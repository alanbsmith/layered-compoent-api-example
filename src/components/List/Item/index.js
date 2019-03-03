import React from 'react';

import './index.css';

const Item = ({ children, className = '', ...props }) => {
  const classNames = `list-item ${className}`.trim();
  return (
    <li className={classNames} {...props}>
      {children}
    </li>
  );
};

export default Item;
