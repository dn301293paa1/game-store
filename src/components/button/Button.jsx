import classNames from 'classnames';
import React from 'react';

const Button = ({ onCLick, type, children, size = 's' }) => {
  const btnClass = classNames({
    btn: true,
    'btn--secondary': type === 'secondary',
    'btn--primary': type === 'secondary',
    'btn--small': size === 's',
    'btn--medium': size === 'm',
  });
  return (
    <button className='btnClass' onClick={onCLick}>
      {children}
    </button>
  );
};

export default Button;
