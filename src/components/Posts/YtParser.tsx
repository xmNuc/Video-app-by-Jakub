import { demoDb } from '../../utils/demoDb';
export let vidId = [];

const url = demoDb;

// data.map((data: any) => console.log(data.snippet.title));

export const videoid = url.map((item: string) =>
  console.log(
    item.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
  )
);
// .match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

if (videoid != null) {
  console.log('video id = ', videoid[1]);
  vidId = videoid[1];
} else {
  console.log('The youtube url is not valid.');
}

// export const videoid = url.match(
//   /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
// );

// if (videoid != null) {
//   console.log('video id = ', videoid[1]);
//   vidId = videoid[1];
// } else {
//   console.log('The youtube url is not valid.');
// }
