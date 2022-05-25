import { demoDb } from '../../utils/demoDb';

const url = demoDb;

// data.map((data: any) => console.log(data.snippet.title));

export let videoId = url
  .map((item: string) =>
    item.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
  )
  .map((item: string) => item[item.length - 1]);
