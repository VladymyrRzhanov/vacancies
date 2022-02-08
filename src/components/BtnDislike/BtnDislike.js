import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as dislikeCardsActions from '../../redux/dislikeCards/dislikeCards-actions';
import { getDislikeCards } from '../../redux/dislikeCards/dislikeCards-selectors';
import { ButtonDislike, DislikeBtn, DislikeBtnChecked } from './styles';

const BtnDislike = ({ cardId }) => {
  const dispatch = useDispatch();
  const isChecked = useSelector(getDislikeCards);
  const [checked, setChecked] = useState(false);

  const addToDislike = (e, cardId) => {
    if (e.target.checked) {
      return dispatch(dislikeCardsActions.addDislikeCards(cardId));
    } else {
      return dispatch(dislikeCardsActions.deleteDislikeCards(cardId));
    }
  };

  useEffect(() => {
    if (isChecked.includes(cardId)) {
      return setChecked(true);
    }
    return setChecked(false);
  }, [cardId, isChecked]);

  return (
    <ButtonDislike
      icon={<DislikeBtn />}
      checkedIcon={<DislikeBtnChecked />}
      onClick={e => addToDislike(e, cardId)}
      checked={checked}
    />
  );
};

export default BtnDislike;
