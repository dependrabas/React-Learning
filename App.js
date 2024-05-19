import React from 'react';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div className="myApps">
      <Navbar />
      <div className="content">
        <ol>
          <li> <a href=''>hii</a> </li>
          <li> <a href=''>This is Dependra Basnet</a> </li>
          <li> <a href=''>I am a programmer</a> </li>
          <li> <a href=''>I  love my country</a> </li>
         
        </ol>
      </div>
    </div>
  );
}

export default App;
