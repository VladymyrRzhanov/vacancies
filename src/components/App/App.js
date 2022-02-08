import Header from '../Header';
import Vacancies from '../Vacancies';
// import { MainFont } from './assets/utils/fonts';
import GlobalFonts from '../../assets/utils/fonts';
import './App.css';

const App = () => {
  return (
    <>
      <GlobalFonts />
      <Header />
      <Vacancies />
    </>
  );
};

export default App;
