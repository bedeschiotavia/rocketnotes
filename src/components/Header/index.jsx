import { RiShutDownLine } from 'react-icons/ri'
import { api } from '../../services/api'
import { Container, Logout, Profile } from './styles'

import { useAuth } from '../../hooks/auth'

export function Header() {
  const { signOut, user } = useAuth()

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

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
      
    </Container>
  )
}