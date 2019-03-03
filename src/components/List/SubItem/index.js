import React from 'react';

import './index.css';

const Subitem = ({ children, className = '', ...props }) => {
  const classNames = `list-subitem ${className}`.trim();
  return (
    <li className={classNames} {...props}>
      {children}
    </li>
  );
};

export default Subitem;
