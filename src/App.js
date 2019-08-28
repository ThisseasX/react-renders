import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { incrementCounter, addButton } from './actions';
import { btn } from './Button.module.sass';

const App = ({ counter, buttons, incrementCounter, addButton }) => {
  return (
    <div>
      <p className={btn}>Counter: {counter}</p>
      <Button action={addButton} text={'Add more buttons!'} />
      {Array(buttons)
        .fill()
        .map((_, i) => (
          <Button
            key={i}
            inc={i + 1}
            action={incrementCounter}
            text={`Increment Counter by ${i + 1}`}
          />
        ))}
    </div>
  );
};

export default connect(
  ({ counter, buttons }) => ({
    counter,
    buttons,
  }),
  dispatch => ({
    incrementCounter: payload => dispatch(incrementCounter(payload)),
    addButton: () => dispatch(addButton()),
  }),
)(App);
