import axios from 'axios'

const boardgameApi = axios.create({
  baseURL: 'https://nc-games-server.onrender.com/api',
})

export const getReviews = () => {
  return boardgameApi.get('/reviews').then(({ data }) => {
    return data.reviews
  })
}
