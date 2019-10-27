import React from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron'
import Container from './components/Container'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
      <Container/>
      {/* <Children name={""}/> */}
      <Footer/>
    </div>
  );
}

export default App;
