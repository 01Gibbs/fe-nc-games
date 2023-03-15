import { useParams } from 'react-router-dom'
import { getSingleReview, incrementVoteOnReview } from '../../utils/api'
import { useState, useEffect } from 'react'
import ReviewComments from '../Comments/ReviewComments'

const SingleReview = () => {
  const [singleReview, setSingleReview] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [userVote, setUserVote] = useState(0)
  const [isError, setIsError] = useState(false)
  const { review_id } = useParams()

  useEffect(() => {
    setIsLoading(true)
    getSingleReview(review_id).then((reviewData) => {
      setSingleReview(reviewData)
      setIsLoading(false)
    })
  }, [review_id])

  const onClick = () => {
    userVote <= 0 ? setUserVote(1) : setUserVote(0)
    incrementVoteOnReview(review_id, userVote <= 0 ? 1 : -1).catch((error) => {
      setIsError(true)
    })
  }

  return isLoading ? (
    <h2>Loading Animation Goes Here</h2>
  ) : (
    <main>
      <h2 className="single-review-title">{singleReview.title}</h2>
      <h3 className="single-review-designer">{singleReview.designer}</h3>
      <h4 className="single-review-author">
        Reviewed by: {singleReview.owner}
      </h4>
      <img
        className="single-review-img review-img"
        src={singleReview.review_img_url}
        alt={singleReview.title}
      ></img>
      <ul className="img-buttons">
        <li className="img-vote-button button">
          <button type="toggle" onClick={onClick}>
            {!isError
              ? `Votes: ${singleReview.votes + userVote}`
              : 'Network Error'}
          </button>
        </li>
      </ul>
      <article className="single-review-votes"></article>
      <h5 className="single-review-category">
        Category: {singleReview.category}
      </h5>
      <article className="single-review-body">
        {singleReview.review_body}
      </article>
      <h6 className="single-review-released">{singleReview.created_at}</h6>
      <ReviewComments />
    </main>
  )
}

export default SingleReview
