import { 
  request,
  globalRequest
} from '@/utils/axios';
export const getBanner = () => globalRequest.get('banner?type=0')
export const getPersonalized = params => globalRequest.get(`personalized`, { params })
export const getNewSongs = () => globalRequest.get('personalized/newsong')
