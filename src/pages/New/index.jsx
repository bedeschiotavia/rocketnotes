import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'

import { api } from '../../services/api'

import { Container, Form } from './styles'

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddLink (){
    setLinks(prevState=>[...prevState, newLink])
    setNewLink("");
  }

  function handleRemoveLink (deleted){
    setLinks(prevState=> prevState.filter(link => link !==deleted))
  }

  function handleAddTag() {
    setTags(prevState=>[...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState=> prevState.filter(tag => tag !==deleted))
  }

  function handleBack(){
    navigate(-1)
  }

  async function handleNewNote(){

    if (!title) {
      return alert("Please add a title")
    }

    if(newLink) {
      return alert("You left a link but didn't add it! Do you want to add? If yes, press the plus symbol to add it.")
    }

    if(newTag) {
      return alert("You left a link but didn't add it! Do you want to add? If yes, press the plus symbol to add it.")
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })

    alert("Note successfully created")

    navigate(-1)
  }


  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Create note</h1>
            <ButtonText title="back" onClick={handleBack}/>
          </header>

          <Input
            placeholder="Title"
            onChange={e=> setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Description"
            onChange={e=> setDescription(e.target.value)}
          />

          <Section title="Useful links">
            {
              links.map((link, index)=>(
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={()=>handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="New link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
              
          </Section>

          <Section title="Tags">
            <div className="tags">
              {
                tags.map((tag,index) =>(<NoteItem key={String(index)}value={tag} onClick={()=>handleRemoveTag(tag)}/>))
              }
              <NoteItem
                isNew
                placeholder="New tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
                />
            </div>
          </Section>

          <Button title="Save" onClick={handleNewNote}/>
        </Form>
      </main>
    </Container>
  )
}