import React, { useState } from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle, Row } from 'reactstrap';
import { VideoModal } from '../VideoModal/VideoModal';
import favYes from '../../img/favyes.png';
import favNo from '../../img/favno.png';
import './OnePost.css';

interface Props {
  id: string | string[];
  data: any;
  removeItem: boolean | any;
  myFav: any;
  setMyFav: any;
  handleFavorites: any;
  handleRemoveFavorites: any;
}

export const OnePost = (props: Props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // console.log(props.myFav.find((asd: any) => asd.id === props.id));
  let asda = props.myFav.find((arr: []) => arr === props.id);
  // console.log(props.myFav);

  return (
    <>
      <Card className="my-card">
        <img
          className="favorites"
          src={asda ? favYes : favNo}
          // src={props.myFav.indexOf(props.id) > -1 ? favYes : favNo}
          alt="favorites"
          onClick={
            asda
              ? () => props.handleRemoveFavorites(props.id)
              : () => props.handleFavorites(props.id)
          }
          // onClick={
          //   props.myFav.indexOf(props.id) > -1
          //     ? () => props.handleRemoveFavorites(props.id)
          //     : () => props.handleFavorites(props.id)
          // }
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
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
            onClick={() => props.handleRemoveFavorites(props.id)}
          >
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
