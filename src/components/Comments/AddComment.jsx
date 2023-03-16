import { useState, useContext } from 'react'
import { postCommentOnReview } from '../../utils/api'
import { UserContext } from '../../context/User'

export const AddComment = ({ review_id }) => {
  const [commentInput, setCommentInput] = useState('')
  const { user } = useContext(UserContext)
  console.log(user, 'in add comment')

  const handleSubmit = (event) => {
    event.preventDefault()
    postCommentOnReview(review_id, user.username, commentInput)
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
