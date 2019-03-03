import React from 'react';

import Builder from './Builder';
import Item from './Item';
import SubItem from './SubItem';
import SubItems from './SubItems';

import './index.css';

const List = ({ children, className = '', ...props }) => {
  const classNames = `list ${className}`.trim();
  return (
    <ul className={classNames} {...props}>
      {children}
    </ul>
  );
};

List.Item = Item;
List.SubItem = SubItem;
List.SubItems = SubItems;
List.Builder = Builder;

export default List;
