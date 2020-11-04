import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div >
      <div className="d-flex justify-content-center" >
        <NavBar />
      </div>
      <Home className="d-flex justify-content-center" greeting="Challenge clase 05 Curso de React en CODER HOUSE" />
    </div>
  );
}

export default App;
