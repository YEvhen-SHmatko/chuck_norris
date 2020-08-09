import types from '../types';

const random = (state = 'eng', {type, payload}) => {
  switch (type) {
    case types.GET_RANDOM_JOKE_START:
      return {...state, loader: true};
    case types.GET_RANDOM_JOKE_SUCCESS:
      return {data: payload, loader: false};
    case types.GET_RANDOM_JOKE_FAILURE:
      return {...state, loader: false};
    default:
      return state;
  }
};

export default random;
