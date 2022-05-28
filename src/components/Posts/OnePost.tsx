import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle, Row } from 'reactstrap';
import favYes from '../../img/favyes.png';
import favNo from '../../img/favno.png';
import './OnePost.css';
import { VideoModal } from '../VideoModal/VideoModal';
import store from 'store2';

interface Props {
  id: string | any;
  data: any;
  removeItem: boolean | any;
}

export const OnePost = (props: Props) => {
  const [modal, setModal] = useState(false);
  const [favorites, setFavorites] = useState(false);
  const [myFav, setMyFav] = useState<any>();

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleFavorites = (id: string) => {
    setMyFav({ ...myFav, id: { id } });
  };

  useEffect(() => {
    const data = store.get('favorites') !== null && setMyFav(store.get('favorites'));
    console.log(data);
  }, []);

  useEffect(() => {
    myFav && store.set('favorites', myFav);
  }, [myFav]);

  return (
    <>
      <Card className="my-card">
        <img
          className="favorites"
          // src={myFav.id === props.id ? favYes : favNo}
          src={favorites ? favYes : favNo}
          alt="favorites"
          onClick={() => handleFavorites(props.data.id)}
        />

        <div>
          <CardImg
            alt="Card image cap"
            src={props.data.snippet.thumbnails.high.url}
            top
            width="100%"
            onClick={toggleModal}
          />
        </div>
        <CardBody className="d-flex flex-column">
          <CardTitle tag="h5">{props.data.snippet.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            👁 {props.data.statistics.viewCount} Vievs
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            👍 {props.data.statistics.likeCount} Like count
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Published at: {props.data.snippet.publishedAt.replace('T', ' ').replace('Z', '')}
          </CardSubtitle>
          <Row className="d-flex align-items-end mt-auto">
            <Button className="d-flex justify-content-center mb-3" onClick={toggleModal}>
              Play Video
            </Button>
            <VideoModal vid={props.data.id} toggleModal={toggleModal} modal={modal} />
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
