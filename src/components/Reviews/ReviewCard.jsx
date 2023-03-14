import { Link } from 'react-router-dom'

function ReviewCard({ review_id, title, owner, review_img_url }) {
  return (
    <li className="review-item">
      <h2 className="review-title">{title}</h2>
      <h3 className="review-author">{owner}</h3>
      <Link to={`/reviews/${review_id}`}>
        <img src={review_img_url} alt={title} className="review-img"></img>
      </Link>
      <article className="review limit-75"></article>
    </li>
  )
}

export default ReviewCard
