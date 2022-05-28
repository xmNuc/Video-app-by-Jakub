import React, { useContext, useEffect, useState } from 'react';
import { AddContext } from '../../contexts/add.context';
import { Row } from 'reactstrap';
import { OnePost } from './OnePost';
import { videoId } from './YtParser';
import { Pagination } from '../Pagination/Pagination';
import './ShowPosts.css';

export const ShowPosts = () => {
  const { addDemo, sortByDate, deleteAll, setDeleteAll } = useContext(AddContext);
  const [data, setData] = useState<any>([]);
  const [vid, setVid] = useState(videoId);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet,contentDetails,statistics&id=${vid}&key=${process.env.REACT_APP_YT_API_KEY}`
      );
      const ytData = await res.json();
      setData(ytData.items);
    })();
  }, [vid]);

  useEffect(() => {
    setVid(videoId);
  }, [addDemo]);

  useEffect(() => {
    deleteAll && setVid([]);
    setDeleteAll(false);
    // console.log(deleteAll);
  }, [deleteAll]);

  const sort = () =>
    sortByDate
      ? setData(
          data
            .map((arr: any) => arr)
            .sort((a: any, b: any) => (a.snippet.publishedAt < b.snippet.publishedAt ? 1 : -1))
        )
      : setData(
          data
            .map((arr: any) => arr)
            .sort((a: any, b: any) => (a.snippet.publishedAt > b.snippet.publishedAt ? 1 : -1))
        );

  useEffect(() => {
    sort();
  }, [sortByDate]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (!data) {
    <h2>Loading data...</h2>;
  }

  const removeItem = (id: string) => {
    setVid(vid.filter((one: string) => one !== id));
  };

  return (
    <>
      <div className="posts-wrap">
        <Row className="d-flex justify-content-center">
          {currentPost.map((data: any, index: number) => (
            <OnePost key={data.id + index} id={data.id} data={data} removeItem={removeItem} />
          ))}
          <Pagination postPerPage={postPerPage} totalPost={vid.length} paginate={paginate} />
        </Row>
      </div>
    </>
  );
};
