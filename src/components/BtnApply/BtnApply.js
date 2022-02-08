import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as applyCardsActions from '../../redux/applyCards/applyCards-actions';
import { ReactComponent as Apply } from '../../assets/images/apply.svg';
import { ButtonApply, ApplyText } from './styles';

const BtnFav = ({ cardId }) => {
  const dispatch = useDispatch();

  const addToApply = (e, cardId) => {
    return dispatch(applyCardsActions.addApplyCards(cardId));
  };

  return (
    <ButtonApply onClick={e => addToApply(e, cardId)}>
      <Apply />
      <ApplyText>Откликнуться</ApplyText>
    </ButtonApply>
  );
};

BtnFav.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default BtnFav;
