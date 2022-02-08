import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  @media screen and (min-width: 760px) and (max-width: 1300px) {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    margin: -5px;
  }
`;

export const Item = styled.li`
  @media screen and (min-width: 760px) and (max-width: 1300px) {
    display: flex;
    flex-basis: calc((100% - 2 * 10px) / 2);
    margin: 5px;
  }
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
