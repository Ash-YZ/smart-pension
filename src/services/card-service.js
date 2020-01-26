export const getAllPeople = (page = 1) => fetch('https://swapi.co/api/people/?page=' + page);

export const getPerson = id => fetch('https://swapi.co/api/people/' + id);

export const getAllStarships = (page = 1) => fetch('https://swapi.co/api/starships/?page=' + page || 1);

export const getStarship = id => fetch('https://swapi.co/api/starships/' + id);
