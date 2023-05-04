
import React from 'react';
import Home from './components/Home';
import ViewUser from './components/ViewUser';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import './App.css';
import Navbar from './components/Navbar';

import {BrowserRouter, Routes, Route}   from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
      <Route path="/" element={ <Home />} />
      <Route path='/view' element= {<ViewUser />} />
      <Route path='/add' element= {<AddUser />}  />
      <Route path='/edit/:id' element={<EditUser />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
