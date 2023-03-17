import { useContext } from 'react'
import { UserContext } from '../../context/User'

function UserCard({ username, name, avatar_url }) {
  const { user, setUser } = useContext(UserContext)
  return (
    <li className="user-item">
      <h2 className="username">{username}</h2>
      <h3 className="name">{name}</h3>
      <img src={avatar_url} alt={username} className="user-img"></img>
      <button className="sign-in button" onClick={() => setUser(user)}>
        Log Me In
      </button>
    </li>
  )
}

export default UserCard
