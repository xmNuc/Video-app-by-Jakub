import getVideoId from 'get-video-id';
import { demoDb } from '../../utils/demoDb';

const videoObj = demoDb.map((item: any) => getVideoId(item));
export const videoId = videoObj.map((item: any) => item.id);
