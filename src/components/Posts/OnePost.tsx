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
import { videoId } from './YtParser';

export const OnePost = () => {
  const [favorites, SetFavorites] = useState(false);
  const [data, setData] = useState<[] | any>([]);
  const [vid, setVid] = useState(videoId);

  const handleFavorites = () => {
    SetFavorites(!favorites);
  };
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${vid}&key=${process.env.REACT_APP_API_KEY}`
      );
      const ytData = await res.json();
      setData(ytData.items);
      // console.log(ytData.items);
    })();
  }, [vid]);
  // console.log(vid);

  if (!data) {
    <h2>Loading data...</h2>;
  }

  // data.map((data: any) => console.log(data));
  // data.map((data: any) => console.log(data.id));

  const handleOpenModal = () => {};

  const removeItem = (asd: string) => {
    console.log(`Remove item  ${asd}`);
    setVid(vid.filter((one: any) => one.asd !== asd));
  };

  return (
    <>
      {data.map((data: any) => (
        <Card key={data.id} id={data.id} className="my-card" onClick={handleOpenModal}>
          <img
            className="favorites"
            src={favorites ? favYes : favNo}
            alt="favorites"
            onClick={handleFavorites}
          />

          <CardImg alt="Card image cap" src={data.snippet.thumbnails.high.url} top width="100%" />
          <CardBody className="d-flex flex-column">
            <CardTitle tag="h5">{data.snippet.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CardText>
            <p>Today is: {new Date().toLocaleDateString()}</p>
            <Row className="d-flex align-items-end mt-auto">
              <Button className="d-flex justify-content-center" onClick={() => removeItem(data.id)}>
                Delete
              </Button>
            </Row>
          </CardBody>
        </Card>
      ))}
    </>
  );
};
