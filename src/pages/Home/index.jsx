import { FiPlus, FiSearch } from 'react-icons/fi'

import { Brand, Container, Content, Menu, NewNote, Search } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Notes'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="All" $isactive /></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="Nodejs" /></li>
      </Menu>

      <Search>
        <Input placeholder="Search for title" icon={FiSearch}

        />

      </Search>

      <Content>
        <Section title="My notes">
          <Note data={{ title: 'React', 
          tags: [
            {id: '1', name:'react'},
            {id: '2', name:'nodejs'}
            ] 
            }}/>
        </Section>

      </Content>

      <NewNote>
        <FiPlus/>
        Criar nota
      </NewNote>
    </Container>
  )
}