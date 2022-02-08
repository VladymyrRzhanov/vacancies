const BASE_URL = 'https://api.hh.ru/';

export const fetchVacancies = async () => {
  return await fetch(`${BASE_URL}vacancies?per_page=10&page=1`).then(response =>
    response.json(),
  );
};

export default fetchVacancies;
