import React, { useEffect } from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

export const About = () => {
  const a = useContext(NoteContext)

  //Using this hook as the componentDidMount() 
  useEffect(() => {
    a.update()
    //eslint-disable-next-line
  }, [])
  
  return (
    <div>About {a.globalContext.name}</div>
  )
}

export default About