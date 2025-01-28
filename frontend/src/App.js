
import './App.css';
import React from 'react';
import { BrowserRouter , Routes ,Route} from 'react-router-dom';
import Home from './pages/Home1'
import Create from './pages/Create1'
import Deleteuser from './pages/Deleteuser1'
import Edit from './pages/Edit1'
import Show from './pages/Show1'

export default function App(){
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Deleteuser />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/show/:id" element={<Show />} />
      <Route path="/create" element={< Create />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

