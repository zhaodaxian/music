import { 
  request,
  globalRequest
} from '@/utils/axios';
export const getBanner = () => globalRequest.get('banner?type=0')
export const getPersonalized = params =>
  request.get(`/personalized`, { params })
