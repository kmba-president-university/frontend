import React from 'react'
import Login from './Login'
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Events from './events'
import Wild from './Wild'
import IYA from './IYA'
import QRPage from './QRPage'



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/events' element={<Events/>}></Route>
          <Route path='/Wild' element={<Wild/>}></Route>
          <Route path='/IYA' element={<IYA/>}></Route>
          <Route path='/qr' element={<QRPage/>}></Route>
        </Routes>
    </BrowserRouter>
  )

}
export default App;
