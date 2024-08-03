import request from '@/utils/request'

export const getFamousSayingServer = () => {
  return request.get('/api/famoussaying')
}
