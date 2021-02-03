import Types from './types';

// primeiro parametro é o type do action e o segundo um pay load se tiver
export const saveCity = payload => ({
  type: Types.ADD_ITEM,
  payload
});
export const removeCity = payload => ({
  type: Types.REMOVE_ITEM
});
