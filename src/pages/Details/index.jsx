import { Container, Content, Links } from './styles'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        
        <Content>
          <ButtonText title="Delete Note" />

          <h1>Node.js Intro</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi enim ratione dolor nihil voluptatum rerum fugiat accusantium, deserunt maxime totam nisi. Cum dolore quasi sequi tempore eaque, sunt eveniet sed?
          </p>

          <Section title="Links">
            <Links>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </Links>

          </Section>

          <Section title="Tags">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Back" />
        </Content>
      </main>
      
    </Container>
  )
}