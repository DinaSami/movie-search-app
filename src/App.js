import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from './components/Search/Search.js';
import FilmPage from './components/FilmPage/FilmPage.js';

function App() {

  return (
    <Router>
      <Routes>

        <Route exact path='/' element={<Search/>}/>
        <Route exact path='/details/:id' element={<FilmPage/>}/>

      </Routes>
    </Router>
  )
}

export default App
