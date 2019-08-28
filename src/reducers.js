import { addButton, incrementCounter } from './actions';
import { handleActions } from 'redux-actions';
import { clamp } from 'lodash';

export const reducer = handleActions(
  {
    [addButton]: state => ({
      ...state,
      buttons: clamp(state.buttons + 1, 1, 10),
    }),
    [incrementCounter]: (state, { payload }) => ({
      ...state,
      counter: state.counter + clamp(payload, 1, 10) || 1,
    }),
  },
  { buttons: 1, counter: 0 },
);
