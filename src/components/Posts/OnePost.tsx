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
import favYes from '../../img/favyes.png';
import favNo from '../../img/favno.png';
import { displayTime } from '../../utils/time';

import './OnePost.css';

interface Props {
  id: string;
  data: any;
  removeItem: boolean | any;
}

export const OnePost = (props: Props) => {
  const [favorites, setFavorites] = useState(false);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '');
    if (favorites) {
      setFavorites(favorites);
    }
  }, [favorites]);

  const handleFavorites = (id: string) => {
    setFavorites(!favorites);
    !favorites
      ? localStorage.setItem('fav_id', JSON.stringify(id))
      : localStorage.removeItem('fav_id');
  };

  const getTime = displayTime();

  const handleOpenModal = () => {};

  return (
    <>
      <Card className="my-card" onClick={handleOpenModal}>
        <img
          className="favorites"
          src={favorites ? favYes : favNo}
          alt="favorites"
          onClick={() => handleFavorites(props.id)}
        />

        <CardImg
          alt="Card image cap"
          src={props.data.snippet.thumbnails.high.url}
          top
          width="100%"
        />
        <CardBody className="d-flex flex-column">
          <CardTitle tag="h5">{props.data.snippet.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            👁 {props.data.statistics.viewCount} Vievs
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            👍 {props.data.statistics.likeCount} Like count
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {/* Published at: {publishedAt} */}
            Published at: {props.data.snippet.publishedAt}
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Added {getTime}
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CardText>
          <Row className="d-flex align-items-end mt-auto">
            <Button
              className="d-flex justify-content-center"
              onClick={() => props.removeItem(props.data.id)}
            >
              Delete
            </Button>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

// src="https://picsum.photos/318/180"
