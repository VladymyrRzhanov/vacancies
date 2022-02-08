import { createGlobalStyle } from 'styled-components';
import GraphikRegular from '../fonts/Graphik-Regular-Web.woff2';
import GraphikBold from '../fonts/Graphik-Bold-Web.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Main Text';
        src: local('Graphik Regular'), local('GraphikRegular'),
        url(${GraphikRegular}) format('woff2');
        font-weight: 400;
        font-style: normal;
    };
    @font-face {
        font-family: 'Header Text';
        src: local('Graphik Bold'), local('GraphikBold'),
        url(${GraphikBold}) format('woff2');
        font-weight: 700;
        font-style: normal;
    },
`;
