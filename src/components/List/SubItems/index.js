import React from 'react';

import './index.css';

const Subitems = ({ children, className = '', ...props }) => {
  const classNames = `list-subitems ${className}`.trim();
  return (
    <ul className={classNames} {...props}>
      {children}
    </ul>
  );
};

export default Subitems;
