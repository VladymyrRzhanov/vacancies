import { useSelector } from 'react-redux';
import Container from '../Container';
import Filter from '../Filter';
import VacanciesList from '../VacanciesList';
import Pagination from '../Pagination';
import fetchVacancies from '../../service/apiVacanciesService';
import { getPage } from '../../redux/vacanciesPage/vacanciesPage-selectors';
import { useState, useEffect } from 'react';
import { Section } from './styles';

const Vacancies = () => {
  const [vacancies, setVacancies] = useState([]);
  const [totalPage, setTotalPage] = useState('');
  const [error, setError] = useState(null);
  const page = useSelector(getPage);

  useEffect(() => {
    fetchVacancies(page)
      .then(({ items, pages }) => {
        setVacancies([...items]);
        setTotalPage(pages);
      })
      .catch(error => setError(error));
  }, [page]);
  return (
    <Section>
      <Container>
        <Filter />
        <VacanciesList vacancies={vacancies} />
        <Pagination totalPage={totalPage} />
      </Container>
    </Section>
  );
};

export default Vacancies;
