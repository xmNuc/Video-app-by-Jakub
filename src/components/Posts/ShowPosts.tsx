import React, { useContext, useEffect, useState } from 'react';
import { AddContext } from '../../contexts/add.context';
import { Row } from 'reactstrap';
import { OnePost } from './OnePost';
import { videoId } from './YtParser';
import { Pagination } from '../Pagination/Pagination';
import useLocalStorage from '../../hooks/useLoclalStorage';
import './ShowPosts.css';

export const ShowPosts = () => {
  const {
    addUrl,
    setAddUrl,
    urlString,
    addDemo,
    sortByDate,
    deleteAll,
    setDeleteAll,
    showFavirites,
    columnView,
  } = useContext(AddContext);
  const [data, setData] = useState<any>([]);
  const [localStorageVideos, setLocalStorageVideos] = useLocalStorage('allVideos', []);
  const [vid, setVid] = useState(localStorageVideos);
  const [myFav, setMyFav] = useLocalStorage('favorites', []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const sort = () => {
    const newData = data
      .map((arr: string[]) => arr)
      .sort((a: any, b: any) => (a.snippet.publishedAt < b.snippet.publishedAt ? 1 : -1));
    sortByDate ? setData(newData) : setData(newData.reverse());
  };

  useEffect(() => {
    setVid(localStorageVideos);
  }, [localStorageVideos]);

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
    addDemo && setLocalStorageVideos(videoId);
    setMyFav([]);
  }, [addDemo]);

  useEffect(() => {
    showFavirites ? setVid(myFav) : setVid(localStorageVideos);
  }, [showFavirites]);

  useEffect(() => {
    deleteAll && setLocalStorageVideos([]);
    setDeleteAll(false);
  }, [deleteAll]);

  useEffect(() => {
    sort();
  }, [sortByDate]);

  useEffect(() => {
    const newUrl: any = [urlString, ...localStorageVideos];
    addUrl && setLocalStorageVideos(newUrl);
    setAddUrl(false);
  }, [addUrl]);

  const handleFavorites = (id: string) => {
    const favList: any = [...myFav, id];
    setMyFav(favList);
  };
  const handleRemoveFavorites = (id: string) => {
    const newFavList: any = myFav.filter((oneFav) => oneFav !== id);
    setMyFav(newFavList);
  };

  const removeItem = (id: string) => {
    setLocalStorageVideos(vid.filter((one: string) => one !== id));
  };
  localStorageVideos.length == 0 && (
    <h1>
      Please add youre Youtube videos or use <span onClick={() => addDemo}>Demo Videos</span>{' '}
    </h1>
  );
  return (
    <>
      <div className="posts-wrap">
        <div className="mt-5 d-flex justify-content-center align-items-center">
          {localStorageVideos.length == 0 && (
            <h1>Please add youre Youtube videos or use Demo Videos</h1>
          )}
        </div>
        <Pagination postPerPage={postPerPage} totalPost={vid.length} paginate={paginate} />
        <Row
          className={
            columnView
              ? 'columnView d-flex flex-column bd-highlight justify-content-center align-items-center'
              : 'rowView d-flex justify-content-center'
          }
        >
          {currentPost.map((data: any, index: number) => (
            <OnePost
              key={data.id + index}
              id={data.id}
              data={data}
              removeItem={removeItem}
              myFav={myFav}
              setMyFav={setMyFav}
              showFavirites={showFavirites}
              handleFavorites={handleFavorites}
              handleRemoveFavorites={handleRemoveFavorites}
            />
          ))}
          <Pagination postPerPage={postPerPage} totalPost={vid.length} paginate={paginate} />
        </Row>
      </div>
    </>
  );
};
