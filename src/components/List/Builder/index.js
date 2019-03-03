import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../Icon';
import Text from '../../Text';

import List from '../index';

const Builder = ({ items, ...props }) => {
  function renderSubItems(subItems = []) {
    const subItemList = subItems.map((item, i) => (
      <List.SubItem key={i}>
        <Link to={item.link}>
          <Text>{item.text}</Text>
        </Link>
      </List.SubItem>
    ));

    return <List.SubItems>{subItemList}</List.SubItems>;
  }

  const itemList = items.map((item, i) => (
    <List.Item key={i}>
      <Link to={item.link}>
        <Text>
          <Icon name={item.icon} />
          {item.text}
        </Text>
      </Link>
      {renderSubItems(item.subItems)}
    </List.Item>
  ));

  return <List {...props}>{itemList}</List>;
};

export default Builder;
