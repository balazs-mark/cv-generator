import React from 'react'
import Sidebar from './components/Sidebar';
import Page from './components/Page';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <Container>
        <Routes>

          <Route path='/' element={ <Navigate to="/cv/hu" />} exact />

          <Route path='/cv' element={ <Navigate to="/cv/hu" />} exact />
          <Route path='/cv/en' element={ <Container><Sidebar language="english" cv_type="normal" /><Page language="english" cv_type="normal" /></Container> } exact />
          <Route path='/cv/hu' element={ <Container><Sidebar language="hungarian" cv_type="normal" /><Page language="hungarian" cv_type="normal" /></Container> } exact />
          
          <Route path='/cv/gov' element={ <Navigate to="/cv/gov/hu" />} exact />
          <Route path='/cv/gov/en' element={ <Container><Sidebar language="english" cv_type="gov" /><Page language="english" cv_type="gov" /></Container> } exact />
          <Route path='/cv/gov/hu' element={ <Container><Sidebar language="hungarian" cv_type="gov" /><Page language="hungarian" cv_type="gov" /></Container> } exact />

        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
