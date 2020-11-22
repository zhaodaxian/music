import { 
  request,
  globalRequest
} from '@/utils/axios';
export const getSearch = () => request.get('search/hot')
