import { useState } from 'react'
import {BrowserRouter , Router , Routes , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Show from './assets/Show'
import Insert from './assets/Insert'
import Update from './assets/Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Show />}></Route>
        <Route exact path='/insert' element={<Insert />}></Route>
        <Route exact path='/update/:id' element={<Update />}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
