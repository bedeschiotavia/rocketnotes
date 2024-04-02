import { RiShutDownLine } from 'react-icons/ri'

import { Container, Logout, Profile } from './styles'

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/bedeschiotavia.png"
          alt="User Picture"
        />

        <div>
          <span>Welcome</span>
          <strong>Otávia Bedeschi</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
      
    </Container>
  )
}