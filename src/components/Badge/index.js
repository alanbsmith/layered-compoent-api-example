import React from 'react';

import './index.css';

const Badge = ({ children, className = '', ...props }) => {
  const classNames = `badge ${className}`.trim();
  return (
    <span className={classNames} {...props}>
      {children}
    </span>
  );
};

export default Badge;
