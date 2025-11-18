import { Routes, Route } from 'react-router-dom'

import Layout from '@/Components/layout/Layout'
import Home from '@/pages/Home'
import Work from '@/pages/Work'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/work' element={<Work />} />
      </Route>
    </Routes>

  )
}



export default App