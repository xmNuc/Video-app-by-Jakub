import React, { useEffect, useState } from 'react';
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
import { vidId } from './YtParser';
import { isTemplateTail } from 'typescript';

export const OnePost = () => {
  const [favorites, SetFavorites] = useState(false);
  //   const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);

  const handleFavorites = () => {
    SetFavorites(!favorites);
  };
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${vidId}&key=${process.env.REACT_APP_API_KEY}`
      );
      const ytData = await res.json();
      setData(ytData);
      console.log(res);
    })();
  }, []);

  if (!data) {
    <h2>Loading data...</h2>;
  }

  const handleOpenModal = () => {};
  return (
    <>
      <Card className="my-card" onClick={handleOpenModal}>
        <img
          className="favorites"
          src={favorites ? favYes : favNo}
          alt="favorites"
          onClick={handleFavorites}
        />
        <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%" />
        <CardBody>
          <CardTitle tag="h5">Card title{data.kind}</CardTitle>
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
