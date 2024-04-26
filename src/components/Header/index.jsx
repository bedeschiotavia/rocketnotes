import { RiShutDownLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { Container, Logout, Profile } from './styles'

import { useAuth } from '../../hooks/auth'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header() {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  function handleSignOut(){
    navigate("/")
    signOut()
  }

  // eslint-disable-next-line no-undef
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <Profile to="/profile">
        <img
          src={avatarUrl}
          alt={user.name}
        />

        <div>
          <span>Welcome</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
      
    </Container>
  )
}