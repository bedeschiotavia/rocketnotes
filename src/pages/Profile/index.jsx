import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Avatar, Container, Form } from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
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
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Current password"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="New password"
          type="password"
          icon={FiLock}
        />

        <Button title="Save" />
      </Form>
    </Container>
  )
}