import React, { useContext, useEffect, useState } from 'react';
import { AddContext } from '../../contexts/add.context';
import { Row } from 'reactstrap';
import { OnePost } from './OnePost';
import { videoId } from './YtParser';
import './ShowPosts.css';

export const ShowPosts = () => {
  const { addDemo } = useContext(AddContext);
  const [data, setData] = useState<[] | any>([]);
  const [vid, setVid] = useState(videoId);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet,contentDetails,statistics&id=${vid}&key=${process.env.REACT_APP_API_KEY}`
      );
      const ytData = await res.json();
      setData(ytData.items);
    })();
  }, [vid]);

  useEffect(() => {
    addDemo ? setVid(videoId) : setVid(videoId);
  }, [addDemo]);

  if (!data) {
    <h2>Loading data...</h2>;
  }
  // data.map((data: any) => console.log(data.id));

  const removeItem = (id: string) => {
    console.log(`Remove item  ${id}`);
    setVid(vid.filter((one: any) => one !== id));
  };

  return (
    <>
      <div className="posts-wrap">
        <Row className="d-flex justify-content-center">
          {data.map((data: any) => (
            <OnePost key={data.id} id={data.id} data={data} removeItem={removeItem} />
          ))}
        </Row>
      </div>
    </>
  );
};
