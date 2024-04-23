import { useState } from 'react';
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Link } from 'react-router-dom';

import { Avatar, Container, Form } from "./styles";

import { useAuth } from '../../hooks/auth';

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setpasswordNew] = useState()

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }
    await updateProfile({ user })
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/bedeschiotavia.png"
            alt="User picture"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Current password"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder="New password"
          type="password"
          icon={FiLock}
          onChange={e => setpasswordNew(e.target.value)}
        />

        <Button title="Save" onClick={handleUpdate}/>
      </Form>
    </Container>
  )
}