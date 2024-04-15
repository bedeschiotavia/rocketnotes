
import { FiLock, FiMail } from 'react-icons/fi'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Background, Container, Form } from './styles'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Application to save and manage your useful links.</p>

        <h2>Login now</h2>

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

        <Button title="Login" />

        <a href="#">Create account</a>
      </Form>

      <Background/>
    </Container>
  )
}
