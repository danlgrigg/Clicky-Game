import React, {component} from 'react';
import Images from "./components/Images.json";
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import './App.css';



// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Jumbotron/>
//       <CardContainer/>
//       {/* <Footer/> */}
//     </div>
//   );
// }
function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  // Set this.state
  state = {
    images,
    currentScore: 0,
    topScore: 0,
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };
  
}
export default App;
