import { RiShutDownLine } from 'react-icons/ri'

import { Container, Logout, Profile } from './styles'

import { useAuth } from '../../hooks/auth'

export function Header() {
  const { signOut } = useAuth()
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/bedeschiotavia.png"
          alt="User Picture"
        />

        <div>
          <span>Welcome</span>
          <strong>Otávia Bedeschi</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
      
    </Container>
  )
}