import { createActions } from 'redux-actions';

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const ADD_BUTTON = 'ADD_BUTTON';

export const { incrementCounter, addButton } = createActions(
  INCREMENT_COUNTER,
  ADD_BUTTON,
);
