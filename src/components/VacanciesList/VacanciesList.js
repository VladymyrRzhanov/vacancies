import PropTypes from 'prop-types';
import VacancieCard from '../VacancieCard';
import { List, Item } from './styles';

const VacanciesList = ({ vacancies }) => {
  return (
    <List>
      {vacancies.map(({ id, ...items }) => (
        <Item key={id}>
          <VacancieCard items={items} />
        </Item>
      ))}
    </List>
  );
};

VacanciesList.propTypes = {
  vacancies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      items: PropTypes.node,
    }).isRequired,
  ).isRequired,
};

export default VacanciesList;
