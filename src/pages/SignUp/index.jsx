import { FiLock, FiMail, FiUser } from 'react-icons/fi'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Background, Container, Form } from './styles'

export function SignUp() {
  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Application to save and manage your useful links.</p>

        <h2>Login now</h2>

        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
        />

        <Button title="Sign up" />

        <a href="#">Back to login</a>
      </Form>

    </Container>
  )
}