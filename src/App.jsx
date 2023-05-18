import React, { useState,createContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FullData from './components/FullData';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddData from "./components/AddData";

export const Blogcontext=createContext()

function App() {
  const [dataList, setDataList] = useState([]);

 

  return (
    <Blogcontext.Provider value={{dataList,setDataList}}>
    <Routes>
      <Route path='/' element={<AddData />} />
      <Route path='/view/:id' element={<FullData/>} />
    </Routes>
    </Blogcontext.Provider>

  )
}

export default App;
