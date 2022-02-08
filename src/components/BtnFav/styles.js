import styled from 'styled-components';
import { Checkbox } from '@mui/material';
import { ReactComponent as Star } from '../../assets/images/star.svg';

export const ButtonStar = styled(Checkbox)`
  margin-right: 10px;
  padding: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  /* transition: transform 250ms ease-in;
  &:hover {
    transform: scale(1.1);
  } */
`;

export const FavoriteBtn = styled(Star)`
  width: 20px;
  height: 20px;
  fill: transparent;
  stroke: rgb(255 82 81);
  stroke-width: 0.5ch;

  &:checked {
    width: 20px;
    height: 20px;
    fill: rgb(255 82 81);
    stroke: rgb(255 82 81);
  }
`;

export const FavoriteBtnChecked = styled(Star)`
  width: 20px;
  height: 20px;
  fill: rgb(255 82 81);
  stroke: rgb(255 82 81);
`;
