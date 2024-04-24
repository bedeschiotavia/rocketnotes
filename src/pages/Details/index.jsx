import { useEffect, useState } from 'react'
import { Container, Content, Links } from './styles'

import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../../services/api'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm("Do you want to remove the note?")

    if(confirm) {
      await api.delete(`notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(()=> {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Content>
            <ButtonText title="Delete Note" onClick={handleRemove}/>

            <h1>{data.title}</h1>
            <p>
              {data.description}
            </p>
            {
              data.links &&
              <Section title="Links">
                <Links>
                  {
                    data.links.map(link =>(
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">{link.url}</a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Tags">
                
                  {
                    data.tags.map(tag =>(
                      <Tag key={String(tag.id)} title={tag.name}/>
                    ))
                  }
              </Section>
            }

            <Button title="Back" onClick={handleBack}/>
          </Content>
        </main>
      }
      
    </Container>
  )
}