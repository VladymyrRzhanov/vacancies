import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px;
  padding-right: 40px;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 760px) {
    width: 760px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1300px) {
    width: 1300px;
  }
`;
