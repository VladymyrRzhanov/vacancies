import Container from '../Container';
import Filter from '../Filter';
import VacanciesList from '../VacanciesList';
import fetchVacancies from '../../service/apiVacanciesService';
import { useState, useEffect } from 'react';
import { Section } from './styles';

const Vacancies = () => {
  const [vacancies, setVacancies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVacancies()
      .then(({ items }) => {
        setVacancies([...items]);
      })
      .catch(error => setError(error));
  }, []);

  return (
    <Section>
      <Container>
        <Filter />
        <VacanciesList vacancies={vacancies} />
      </Container>
    </Section>
  );
};

export default Vacancies;
