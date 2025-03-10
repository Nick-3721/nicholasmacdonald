import { useState } from 'react'
import './App.css'
import RevealLink from './assets/Components/RevealLink'

function App() {

  return (
    <> 
      <RevealLink href="https://github.com/Nick-3721" newTab={true}>Github</RevealLink>
      <RevealLink href="https://chatgpt.com/" newTab={false}>Chat</RevealLink>
    </>
  )
}

export default App
