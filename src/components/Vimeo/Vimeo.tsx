import React, { useEffect, useState } from 'react';
const Vimeo = require('vimeo').Vimeo;

export const Vimeoo = () => {
  const [data, setData] = useState(['325845565', '325846054', '325848270', '325849439']);
  const [vimeoData, setVimeoData] = useState([]);

  const client = new Vimeo(
    process.env.REACT_APP_VIMEO_CLIENT_ID,
    process.env.REACT_APP_VIMEO_CLIENT_SECRET,
    process.env.REACT_APP_VIMEO_ACC_TOKEN
  );

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://vimeo.com/api/v2/video/${data}`);
      const viData = await res.json();
      setVimeoData(viData);
    })();
  }, []);

  console.log(vimeoData);

  return <></>;
};

// const [thumbNails, setThumbNails] = useState({
//   data: [],
//     });
// (async () => {
//       let fetchedResult = await Promise.all(
//         data.map((videoId) => fetch(`http://vimeo.com/api/v2/video/${data[0]}.json`))
//       );
//       fetchedResult.map((data) =>
//         setThumbNails({
//           data: result,
//         })
//       );
//     })();
