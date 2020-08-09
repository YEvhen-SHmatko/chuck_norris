import Axios from 'axios';

export const api = {
  getRandomJoke: () => Axios.get('https://api.chucknorris.io/jokes/random'),
};
