import getVideoId from 'get-video-id';
import { useContext } from 'react';
import { AddContext } from '../../contexts/add.context';
import { demoDb } from '../../utils/demoDb';
import React from 'react';

export const YtParser = () => {
  const { addUrl } = useContext(AddContext);
  const videoFromUrl = getVideoId(addUrl);
  console.log(videoFromUrl);
  return (
    <>
      <h2>Video has been Added</h2>
    </>
  );
};

const videoObj = demoDb.map((item: any) => getVideoId(item));
export const videoId = videoObj.map((item: any) => item.id);
