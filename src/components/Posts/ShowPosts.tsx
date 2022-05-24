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
        </Row>
      </div>
    </>
  );
};
