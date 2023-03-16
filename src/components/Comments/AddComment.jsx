import { useState } from 'react'
import { postCommentOnReview } from '../../utils/api'

export const AddComment = ({ review_id, author }) => {
  const [commentInput, setCommentInput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    postCommentOnReview(review_id, author, commentInput)
  }

  return (
    <form className="AddComment" onSubmit={handleSubmit}>
      <label htmlFor="newComment">Add a Comment</label>
      <textarea
        id="newComment"
        placeholder="Comment Box"
        value={commentInput}
        onChange={(event) => setCommentInput(event.target.value)}
      ></textarea>
      <button type="submit">Post Comment</button>
    </form>
  )
}
