import { demoDb } from '../../utils/demoDb';

const url = demoDb;

// data.map((data: any) => console.log(data.snippet.title));

export const videoId = url
  .map((item: string) =>
    item.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
  )
  .map((item: string) => item[item.length - 1]);

console.log(videoId);

// console.log(videoid);
// const ids = videoid.map((i: string) =>
//   i != null ? console.log('video id = ', videoid[1]) : console.log('The youtube url is not valid.')
// );

// console.log(ids);

// export const videoid = url.match(
//   /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
// );

// if (videoid != null) {
//   console.log('video id = ', videoid[1]);
//   vidId = videoid[1];
// } else {
//   console.log('The youtube url is not valid.');
// }
