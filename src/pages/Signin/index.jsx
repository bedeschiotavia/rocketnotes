import { useState } from 'react'

import { FiLock, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Background, Container, Form } from './styles'

export function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn (){
    signIn({ email, password })
  }
  
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
          onChange= {e=> setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange= {e=> setPassword(e.target.value)}
        />

        <Button title="Login" onClick={handleSignIn} />

        <Link to="/register">Register</Link>
      </Form>

      <Background/>
    </Container>
  )
}
