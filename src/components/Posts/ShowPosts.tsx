import React, { useState } from 'react';
import { Row } from 'reactstrap';
import { OnePost } from './OnePost';
import './ShowPosts.css';

export const ShowPosts = () => {
  const [posts, setPosts] = useState(true);

  return (
    <>
      <div className="posts-wrap">
        <Row className="d-flex justify-content-center">
          <OnePost />
          <OnePost />
          <OnePost />
          <OnePost />
          <OnePost />
        </Row>
      </div>
      {/* <div className="post-container">
        {posts
          .map((post) => (
            <OnePost key={post.id} id={post.id} post={post} />
          ))
          .reverse()}
      </div> */}
    </>
  );
};
