// export const SuccessApply = styled.a`
//   font-family: 'Main Text';
//   font-size: 16px;
//   line-height: 1.25;
//   color: #212527;
// `;

import styled from 'styled-components';
import { Checkbox } from '@mui/material';
import { ReactComponent as Dislike } from '../../assets/images/dislike2.svg';

export const SuccessApply = styled.button`
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

export const DislikeBtn = styled(Dislike)`
  width: 20px;
  height: 20px;
  fill: transparent;
  stroke: rgb(255 82 81);

  &:checked {
    width: 20px;
    height: 20px;
    fill: rgb(255 82 81);
    /* stroke: rgb(255 82 81); */
  }
`;

export const DislikeBtnChecked = styled(Dislike)`
  width: 20px;
  height: 20px;
  fill: rgb(255 82 81);
  /* stroke: rgb(255 82 81); */
`;
