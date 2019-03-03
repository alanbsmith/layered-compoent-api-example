import React from 'react';

const Post = ({ children, match }) => {
  return (
    <div className="page post">
      <h1>{match.params.id}</h1>
      {children}
    </div>
  );
};

export default Post;
