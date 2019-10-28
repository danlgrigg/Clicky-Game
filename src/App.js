import React from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import cardContainer from './components/cardContainer';
import Footer from './components/Footer';
import './App.css';
import Pictures from "./components/Pictures.json";

// class App extends Component {
  
//   state = {
//     Pictures
//   };
// }

function App() {
  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
      <Container/>
      {/* <Children name={""}/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
