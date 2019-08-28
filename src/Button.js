import React, { memo } from 'react';
import classes from './Button.module.sass';

const getRandomStyle = () => {
  const color = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
  return {
    backgroundImage: `linear-gradient(white, ${color})`,
    boxShadow: `0px 0px 16px 0px ${color}`,
  };
};

class Button extends React.PureComponent {
  render() {
    const { action, text, inc } = this.props;

    return (
      <button
        style={getRandomStyle()}
        className={classes.btn}
        onClick={inc !== undefined ? () => action(inc) : action}
      >
        {text}
      </button>
    );
  }
}

export default Button;
