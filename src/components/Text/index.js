import React from 'react';

import './index.css';

const Text = ({ children, className = '', ...props }) => {
  const classNames = `text ${className}`.trim();
  return (
    <span className={classNames} {...props}>
      {children}
    </span>
  );
};

export default Text;
