import styled from 'styled-components';

export const ButtonApply = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px 0;
  @media screen and (min-width: 1300px) {
    margin-right: 20px;
  }
`;

export const ApplyText = styled.span`
  margin-left: 10px;
  font-family: 'Header Text';
  font-size: 16px;
  line-height: 1.25;
  color: #ff5252;
`;
