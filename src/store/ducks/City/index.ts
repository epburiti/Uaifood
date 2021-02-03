import type from './types';
import produce from 'immer';

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.ADD_ITEM:
      return produce(state, draft => {
        console.log('chamou');
        draft = action.payload;
      });
    default:
      return state;
  }
};

export default reducer;
