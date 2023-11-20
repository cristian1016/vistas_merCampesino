import './App.css'
import Home from './Home/Home'
import Login from './Login/Login'
import Registro from './Registro/Registro'
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/Login' element= {<Login/>}></Route>
      <Route path='/Registro' element= {<Registro/>}></Route>
      <Route path='*' element= {<NotFound/>}></Route>
    </Routes>
    </>
  )
}

export default App
