import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as favCardsActions from '../../redux/favCards/favCards-actions';
import { getFavCards } from '../../redux/favCards/favCards-selectors';
import { ButtonStar, FavoriteBtn, FavoriteBtnChecked } from './styles';

const BtnFav = ({ cardId }) => {
  const dispatch = useDispatch();
  const isChecked = useSelector(getFavCards);
  const [checked, setChecked] = useState(false);

  const addToFav = (e, cardId) => {
    if (e.target.checked) {
      return dispatch(favCardsActions.addFavCards(cardId));
    } else {
      return dispatch(favCardsActions.deleteFavCards(cardId));
    }
  };

  useEffect(() => {
    if (isChecked.includes(cardId)) {
      return setChecked(true);
    }
    return setChecked(false);
  }, [cardId, isChecked]);

  return (
    <ButtonStar
      icon={<FavoriteBtn />}
      checkedIcon={<FavoriteBtnChecked />}
      onClick={e => addToFav(e, cardId)}
      checked={checked}
    />
  );
};

BtnFav.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default BtnFav;
