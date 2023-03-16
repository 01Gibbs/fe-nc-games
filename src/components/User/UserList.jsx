import { useEffect, useState } from 'react'
import { getUsers } from '../../utils/api'
import UserCard from './UserCard'

const Users = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getUsers().then((usersData) => {
      setUsers(usersData)
      setIsLoading(false)
    })
  }, [])

  return isLoading ? (
    <h2>Loading Animation Goes Here</h2>
  ) : (
    <main className="review-container">
      <ul className="review-list" key={users.user_id}>
        {users.map((user) => {
          return <UserCard {...user} />
        })}
      </ul>
    </main>
  )
}

export default Users
