import {
  Card,
  PosterImg,
  Features,
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
  Button,
  ButtonStar,
  ApplyButton,
  ApplyText,
} from './styles';
import { ReactComponent as Apply } from '../../assets/images/apply.svg';
import { ReactComponent as Star } from '../../assets/images/star.svg';
import { ReactComponent as Dislike } from '../../assets/images/dislike.svg';
import nologo from '../../assets/images/nologo.jpg';
import ProfPhoto from '../../assets/images/ProfPhoto.jpg';

const VacancieCard = ({ items }) => {
  const { name, employer, salary, area, schedule, published_at } = items;
  const { name: company_name, logo_urls } = employer;
  const { name: area_name } = area;
  const { name: schedule_name } = schedule;
  const minPayment = salary?.from === (null || undefined) ? '' : salary.from;
  const maxPayment = salary?.to === (null || undefined) ? '' : salary.to;
  const logo = logo_urls !== null ? `${logo_urls[240]}` : nologo;

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
      return `${minPayment} — ${maxPayment}`;
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

  const publicTime = () => {
    const dateNow = Date.parse(new Date());
    const time = dateNow - Date.parse(published_at);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const daysText = `${days} ` + getNoun(days, 'день', 'дня', 'дней');
    const hoursText = `${hours} ` + getNoun(hours, 'час', 'часа', 'часов');
    const minutesText =
      `${minutes} ` + getNoun(minutes, 'минута', 'минуты', 'минут');
    if (days === 0) {
      return `${hoursText} ${minutesText} назад`;
    } else if (hours === 0) {
      return `${daysText} ${minutesText} назад`;
    } else {
      return `${daysText} ${hoursText} ${minutesText} назад`;
    }
  };

  return (
    <Card>
      <PosterImg src={ProfPhoto} alt={'ProfPhoto'} />
      <Features>
        <Status>Новая</Status>
        <div>
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
        </div>
        <Container>
          <Public>{publicTime()}</Public>
          <ButtonsContainer>
            <ApplyButton>
              <Apply />
              <ApplyText>Откликнуться</ApplyText>
            </ApplyButton>
            <div>
              <ButtonStar>
                <Star />
              </ButtonStar>
              <Button>
                <Dislike />
              </Button>
            </div>
          </ButtonsContainer>
        </Container>
      </Features>
    </Card>
  );
};

export default VacancieCard;
