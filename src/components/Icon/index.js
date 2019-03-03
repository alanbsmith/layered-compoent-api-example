import React from 'react';

import './index.css';

const iconMap = {
  about: '💁‍',
  home: '🏡',
  writing: '📝'
};

const Icon = ({ className = '', name, ...props }) => {
  const classNames = `icon ${className}`.trim();
  return (
    <i className={classNames} {...props}>
      {iconMap[name]}
    </i>
  );
};

export default Icon;
