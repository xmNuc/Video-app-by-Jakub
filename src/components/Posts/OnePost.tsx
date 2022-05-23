import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Row,
} from 'reactstrap';
import './OnePost.css';
import favYes from '../../img/favyes.png';
import favNo from '../../img/favno.png';

export const OnePost = () => {
  const [favorites, SetFavorites] = useState(false);

  const handleFavorites = () => {
    SetFavorites(!favorites);
  };
  const handlePostDetails = () => {};
  return (
    <>
      <Card className="my-card">
        <img
          className="favorites"
          src={favorites ? favYes : favNo}
          alt="favorites"
          onClick={handleFavorites}
        />
        <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CardText>
          <Row>
            <Button>Delete</Button>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};
