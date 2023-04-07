import { useState } from 'react'
import CreatePlayer from './pages/CreatePlayer'
import './App.css'
import DisplayPlayers from './pages/DisplayPlayers'
import { useRoutes } from 'react-router-dom'

function App() {

  let element = useRoutes([

  ])

  return (
    <>
      <CreatePlayer/>
      <DisplayPlayers/>
    </>
  )
}

export default App
