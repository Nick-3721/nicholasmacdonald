import { Routes, Route } from 'react-router-dom'
import '@/styles/App.css'

import Layout from '@/Components/Layout'
import Home from '@/pages/Home'
import ProjectList from '@/pages/ProjectList'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/work' element={<ProjectList />} />
      </Route>
    </Routes>

  )
}



export default App