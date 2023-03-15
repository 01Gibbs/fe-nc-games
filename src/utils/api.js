import axios from 'axios'

const boardgameApi = axios.create({
  baseURL: 'https://nc-games-server.onrender.com/api',
})

export const getReviews = () => {
  return boardgameApi.get('/reviews').then(({ data }) => {
    return data.reviews
  })
}

export const getSingleReview = (review_id) => {
  return boardgameApi.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review
  })
}

export const getCommentsOnReview = (review_id) => {
  return boardgameApi.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data.reviewComments || []
  })
}

export const incrementVoteOnReview = (review_id, incrementNum) => {
  return boardgameApi.patch(`/reviews/${review_id}`, {
    inc_votes: incrementNum,
  })
}

//optimistic rendering
// state -> user req -> if ! -> revert
//                   -> if Y -> forward
