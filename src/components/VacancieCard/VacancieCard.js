import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getDislikeCards } from '../../redux/dislikeCards/dislikeCards-selectors';
import { getApplyCards } from '../../redux/applyCards/applyCards-selectors';
import {
  Card,
  Blind,
  PosterImg,
  Features,
  ApplyStatus,
  DislikeStatus,
  Status,
  Position,
  PositionName,
  LogoContainer,
  LogoImg,
  Salary,
  PlaceContainer,
  CompanyName,
  AreaName,
  BenefitsList,
  BenefitsItem,
  BenefitsText,
  Container,
  Public,
  ButtonsContainer,
  ApplyContainer,
  SuccessApply,
  ErrorContainer,
  ErrorMessage,
} from './styles';
import BtnFav from '../BtnFav';
import BtnDislike from '../BtnDislike';
import BtnApply from '../BtnApply';
import nologo from '../../assets/images/nologo.jpg';
import { ReactComponent as ErrorIcon } from '../../assets/images/errorIcon.svg';
import ProfPhoto from '../../assets/images/ProfPhoto.jpg';

const VacancieCard = ({ cardId, items }) => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);
  const [apply, setApply] = useState(false);
  const [link, setLink] = useState('');
  const [publication, setPublication] = useState(false);
  const isChecked = useSelector(getDislikeCards);
  const isApply = useSelector(getApplyCards);
  const { name, employer, salary, area, schedule, published_at } = items;
  const { name: company_name, logo_urls } = employer;
  const { name: area_name } = area;
  const { name: schedule_name } = schedule;
  const minPayment = salary?.from === (null || undefined) ? '' : salary.from;
  const maxPayment = salary?.to === (null || undefined) ? '' : salary.to;
  const logo = logo_urls !== null ? `${logo_urls[240]}` : nologo;

  const catchError = () => {
    setError(!error);
  };

  useEffect(() => {
    if (isChecked.includes(cardId)) {
      return setChecked(true);
    }
    return setChecked(false);
  }, [cardId, isChecked]);

  useEffect(() => {
    if (isApply.some(vacancie => vacancie.id === cardId)) {
      return setApply(true);
    }
    return setApply(false);
  }, [cardId, isApply]);

  const payment = () => {
    if (salary === null) {
      return '';
    } else if (salary.from === null) {
      return `${maxPayment}`;
    } else if (salary.to === null) {
      return `${minPayment}`;
    } else if (minPayment === maxPayment) {
      return `${minPayment}`;
    } else {
      return `${minPayment} ??? ${maxPayment}`;
    }
  };

  const getNoun = (number, one, two, five) => {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  };

  const diffTime = () => {
    const dateNow = Date.parse(new Date());
    const time = dateNow - Date.parse(published_at);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    return { days, hours, minutes };
  };

  useEffect(() => {
    const time = diffTime();
    if (time.days > 5) {
      return;
    }
    setPublication(!publication);
  }, []);

  useEffect(() => {
    isApply.find(vacancie => {
      if (vacancie.id !== cardId) {
        return;
      }
      return setLink(vacancie.cdnUrl);
    });
  }, [cardId, isApply]);

  const publicTime = () => {
    const time = diffTime();
    const daysText =
      `${time.days} ` + getNoun(time.days, '????????', '??????', '????????');
    const hoursText =
      `${time.hours} ` + getNoun(time.hours, '??????', '????????', '??????????');
    const minutesText =
      `${time.minutes} ` + getNoun(time.minutes, '????????????', '????????????', '??????????');
    if (time.days === 0) {
      return `${hoursText} ${minutesText} ??????????`;
    } else if (time.hours === 0) {
      return `${daysText} ${minutesText} ??????????`;
    } else {
      return `${daysText} ${hoursText} ${minutesText} ??????????`;
    }
  };

  return (
    <Card>
      {(checked || apply) && <Blind />}
      <PosterImg src={ProfPhoto} alt={'ProfPhoto'} />
      <Features>
        {checked && <DislikeStatus>????????????????????????</DislikeStatus>}
        {apply && <ApplyStatus>???? ????????????????????????</ApplyStatus>}
        {publication && !checked && !apply && <Status>??????????</Status>}
        <Position>
          <PositionName>{name}</PositionName>
          <LogoContainer>
            <LogoImg src={logo} alt={company_name} />
          </LogoContainer>
        </Position>
        {salary && (
          <Salary>
            {payment()}
            <span>&#8372;</span>
          </Salary>
        )}

        <PlaceContainer>
          <CompanyName>{company_name}</CompanyName>
          <AreaName>{area_name}</AreaName>
        </PlaceContainer>
        <BenefitsList>
          <BenefitsItem>
            <BenefitsText>{schedule_name}</BenefitsText>
          </BenefitsItem>
        </BenefitsList>
        <Container>
          <Public>{publicTime()}</Public>
          <ButtonsContainer>
            {!apply && !checked && (
              <BtnApply cardId={cardId} onChange={catchError} />
            )}
            <div>
              <BtnFav cardId={cardId} />
              <BtnDislike cardId={cardId} />
              {apply && (
                <ApplyContainer>
                  <SuccessApply href={link}>???????????????????? ????????????</SuccessApply>
                </ApplyContainer>
              )}
            </div>
          </ButtonsContainer>
        </Container>
      </Features>
      {error && (
        <ErrorContainer>
          <ErrorIcon />
          <ErrorMessage>
            ????????-??????????, ???????? ???????? ???????????? ???????????????? ?? ???? ???????????????????? ?? ?????? ????????????
          </ErrorMessage>
        </ErrorContainer>
      )}
    </Card>
  );
};

VacancieCard.propTypes = {
  cardId: PropTypes.string.isRequired,
  items: PropTypes.shape({
    name: PropTypes.string,
    employer: PropTypes.shape({
      name: PropTypes.string,
      logo_urls: PropTypes.shape({
        240: PropTypes.string,
      }),
    }),
    salary: PropTypes.shape({
      from: PropTypes.number,
      to: PropTypes.number,
    }),
    area: PropTypes.shape({
      name: PropTypes.string,
    }),
    schedule: PropTypes.shape({
      name: PropTypes.string,
    }),
    published_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default VacancieCard;
