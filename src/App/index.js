import React from 'react';
import { Link } from 'react-router-dom';

import Badge from '../components/Badge';
import Icon from '../components/Icon';
import List from '../components/List';
import Text from '../components/Text';

import './index.css';

const items = [
  { icon: 'home', text: 'Home', link: '/' },
  { icon: 'about', text: 'About', link: '/about' },
  {
    icon: 'writing',
    text: 'Writing',
    link: '/posts',
    subItems: [
      { text: 'Builder Pattern', link: '/posts/Builder Pattern' },
      { text: 'Higher-level API', link: '/posts/Higher-level API' },
      { text: 'Simple to Use', link: '/posts/Simple to Use' }
    ]
  }
];

const renderComposableList = () => (
  <List>
    <List.Item>
      <Link to="/">
        <Text>
          <Icon name="home" />
          Home
        </Text>
      </Link>
    </List.Item>
    <List.Item>
      <Link to="/about">
        <Text>
          <Icon name="about" />
          About
        </Text>
      </Link>
    </List.Item>
    <List.Item>
      <Link to="/posts">
        <Text>
          <Icon name="writing" />
          Writing
        </Text>
      </Link>
      <List.SubItems>
        <List.SubItem>
          <Link to="/posts/Composable Pattern">
            <Text>
              <Badge>new</Badge>Composable Pattern
            </Text>
          </Link>
        </List.SubItem>
        <List.SubItem>
          <Link to="/posts/Lower-Level API">
            <Text>
              <Badge>new</Badge>Lower-Level API
            </Text>
          </Link>
        </List.SubItem>
        <List.SubItem>
          <Link to="/posts/More Flexibile">
            <Text>
              <Badge>new</Badge>More Flexibile
            </Text>
          </Link>
        </List.SubItem>
      </List.SubItems>
    </List.Item>
  </List>
);

const App = ({ children }) => (
  <div className="app">
    <div className="left-nav">
      <List.Builder items={items} />
      <hr />
      {renderComposableList()}
    </div>
    {children}
  </div>
);

export default App;
