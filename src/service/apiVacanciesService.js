const BASE_URL = 'https://api.hh.ru/';

export const fetchVacancies = async page => {
  return await fetch(`${BASE_URL}vacancies?per_page=10&page=${page}`).then(
    response => response.json(),
  );
};

export default fetchVacancies;
