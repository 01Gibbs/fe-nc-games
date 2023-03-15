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
      <h2 className="comments-title">Comments:</h2>
      <ul className="comment-list">
        {console.log(reviewComments)}
        {reviewComments.length ? (
          reviewComments.map((comment) => {
            return (
              <li className="comment" key={comment.comment_id}>
                <h3>{comment.author}</h3>
                <h4>{comment.created_at}</h4>
                <article>{comment.body}</article>
                <button type="toggle" className="votes-button button">
                  Votes: {comment.votes}
                </button>
              </li>
            )
          })
        ) : (
          <p>No Comments Found!</p>
        )}
      </ul>
    </section>
  )
}

export default ReviewComments
