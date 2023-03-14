import { useEffect, useState } from 'react'
import { getReviews } from '../../utils/api'
import ReviewCard from './ReviewCard'

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getReviews().then((reviewsData) => {
      setReviews(reviewsData)
      setIsLoading(false)
    })
  }, [])

  return isLoading ? (
    <h2>Loading Animation Goes Here</h2>
  ) : (
    <main className="review-container">
      <ul className="review-list">
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} {...review} />
        })}
      </ul>
    </main>
  )
}

export default Reviews
