import styled from 'styled-components';

export const Blind = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background: white;
  height: 100%;
  opacity: 0.5;
`;

export const Card = styled.div`
  position: relative;
  width: 340px;
  min-height: 330px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 10px 10px rgba(5, 5, 6, 0.05);
  border-radius: 5px;
  @media screen and (min-width: 1300px) {
    width: 750px;
    min-height: 370px;
  }
`;

export const PosterImg = styled.img`
  display: block;
  max-width: 100%;
  height: 50px;
  @media screen and (min-width: 1300px) {
    height: 100px;
  }
`;

export const Features = styled.div`
  padding: 20px 20px 10px 20px;
`;

export const Status = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  padding: 0 10px;
  font-family: 'Main Text';
  font-size: 14px;
  line-height: 1.43;
  color: #bc0002;
  background: #ffe9e9;
  border-radius: 5px;
`;

export const DislikeStatus = styled(Status)`
  background: #c8d1d6;
  color: #303a3e;
`;

export const ApplyStatus = styled(Status)`
  background: #d5ffe6;
  color: #00702d;
`;

export const Position = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const PositionName = styled.h3`
  max-width: 565px;
  margin-right: 20px;
  font-family: 'Header Text';
  font-size: 20px;
  line-height: 1.5;
  color: #212527;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 120px;
  height: 60px;
  overflow: hidden;
  object-fit: contain;
`;

export const LogoImg = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

export const Salary = styled.p`
  margin-bottom: 10px;
  font-family: 'Main Text';
  font-size: 16px;
  line-height: 1.25;
  color: #212527;
`;

export const PlaceContainer = styled.div`
  margin-bottom: 10px;
`;

export const CompanyName = styled.span`
  margin-right: 20px;
  font-family: 'Main Text';
  font-size: 16px;
  line-height: 1.25;
  color: #ff5252;
`;

export const AreaName = styled.span`
  margin-bottom: 10px;
  font-family: 'Main Text';
  font-size: 16px;
  line-height: 1.25;
  color: #212527;
`;

export const BenefitsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const BenefitsItem = styled.li`
  display: inline-block;
  border: 1px solid #c8d1d6;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 10px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const BenefitsText = styled.span`
  font-family: 'Main Text';
  font-size: 14px;
  line-height: 1.43;
  color: #212527;
`;

export const Container = styled.div`
  @media screen and (min-width: 1300px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Public = styled.span`
  font-family: 'Main Text';
  font-size: 14px;
  line-height: 1.43;
  color: #687e88;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
