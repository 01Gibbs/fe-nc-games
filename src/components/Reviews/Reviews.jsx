import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getReviews } from '../../utils/api'

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getReviews().then((reviewsData) => {
      setReviews(reviewsData)
      setIsLoading(false)
    }, [])
  })

  return isLoading ? (
    <h1>Loading Animation Goes Here</h1>
  ) : (
    <main review-container>
      <ul className="review-list">
        {reviews.map((review) => {
          return (
            <li key={review.review_id} className="review-item">
              <h2>{review.title}</h2>
              <h3>{review.owner}</h3>
              <Link to="/">
                <img
                  src={review.review_img_url}
                  alt={review.title}
                  className="review-img"
                ></img>
              </Link>
              <article className="review limit-75"></article>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
export default Reviews
