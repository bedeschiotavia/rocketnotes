import { useState } from "react"
import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

import { api } from "../../services/api"

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Background, Container, Form } from './styles'

export function SignUp() {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const navigate = useNavigate();

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert ("Please, fill in all the fields")
    }

    api.post("/users", { name, email, password })
    .then(()=>{
      alert ("User successfully registered")
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else {
        alert("Something went wrong")
      }
    })


  }
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
          onChange={e=> setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e=> setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={e=> setPassword(e.target.value)}
        />

        <Button title="Sign up" onClick={handleSignUp} />

        <Link to="/" >Back to login</Link>
      </Form>

    </Container>
  )
}