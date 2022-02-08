import React from 'react';
import { ReactComponent as FilterLogo } from '../../assets/images/filter.svg';
import { FilterContainer, FilterTitle } from './styles';

const Filter = () => {
  return (
    <FilterContainer>
      <FilterLogo />
      <FilterTitle>Фильтры</FilterTitle>
    </FilterContainer>
  );
};

export default Filter;
