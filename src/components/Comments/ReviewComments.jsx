import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCommentsOnReview } from '../../utils/api'

const ReviewComments = () => {
  const [reviewComments, setReviewComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { review_id } = useParams()

  useEffect(() => {
    setIsLoading(true)
    getCommentsOnReview(review_id).then((reviewCommentData) => {
      setReviewComments(reviewCommentData)
      setIsLoading(false)
    })
  }, [review_id])

  return isLoading ? (
    <h2>ReviewComments: Loading Animation Goes Here</h2>
  ) : (
    <section className="comment-container">
      <ul className="comment-list">
        {reviewComments.map((comment) => {
          console.log(reviewComments)
          return (
            <li className="comment" key={comment.comment_id}>
              <article>{comment.body}</article>
              <button type="toggle" className="votes-button button">
                Votes: {comment.votes}
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ReviewComments
