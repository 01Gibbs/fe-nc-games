import { useState, useContext } from 'react'
import { postCommentOnReview } from '../../utils/api'
import { UserContext } from '../../context/User'

export const AddComment = ({ review_id, setReviewComments }) => {
  const [commentInput, setCommentInput] = useState('')
  const [isFormDisabled, setIsFormDisabled] = useState(false)
  const [isError, setIsError] = useState(false)
  const { user } = useContext(UserContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsError(false)
    setIsFormDisabled(true)
    postCommentOnReview(review_id, user.username, commentInput)
      .then((responseFromApi) => {
        setReviewComments((currentReviewComments) => {
          return [responseFromApi.data, ...currentReviewComments]
        })
      })
      .catch(() => {
        setIsError(true)
      })
    setCommentInput('')
    setIsFormDisabled(false)
  }

  return (
    <form className="AddComment" onSubmit={handleSubmit}>
      <label htmlFor="newComment">Add a Comment</label>
      <textarea
        id="newComment"
        placeholder="Comment Box"
        value={commentInput}
        onChange={(event) => setCommentInput(event.target.value)}
        required
      ></textarea>
      <button type="submit" disabled={isFormDisabled}>
        Post Comment
      </button>
      {isError ? <p>Error Posting Comment!</p> : null}
    </form>
  )
}
