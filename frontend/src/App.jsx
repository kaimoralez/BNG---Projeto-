import { useState } from 'react'
import { Home } from './pages/home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Catalogo } from './pages/catalogo/catalogo'
import { About } from './pages/about/about'
import { Contato } from './pages/contato/contato'
import { ScrollToTop } from './components/ScrollToTop/scrollToTop'
import { PageNotFound } from './pages/pageNotFound/pageNotFound'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalogo' element={<Catalogo/>}/> 
        <Route path='/sobre' element={<About/>}/>
        <Route path='/contato' element={<Contato/>}/> 
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
