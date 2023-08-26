import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Datas from './datas';
import CheckData from './checkData';
import CreateData from './addData';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/getData' element={<Datas />}></Route>
        <Route path='/checkData' element={<CheckData />}></Route>
        <Route path='/createData' element={<CreateData />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
  }
export default App;

