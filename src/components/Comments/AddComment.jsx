import { useState } from 'react'
import { postCommentOnReview } from '../../utils/api'

export const AddComment = ({ review_id }) => {
  const [commentInput, setCommentInput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(review_id, commentInput, '<<<< this thning')
    postCommentOnReview(review_id, 'tickle122', commentInput)
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
