import logo from './logo.svg';
import './App.css';
import { Assignment1 } from './Assignment/Assignment1/Assignment1.js';
import { Lab8 } from './Labs/Lab8/Lab8.js';
import { Assignment2 } from './Assignment/Assignment2/Assignment2.js';
import { Assignment2Sir } from './Assignment/Assignment2/Assignment2BySir';
import { Lab9 } from './Labs/Lab9/Lab9';
import { Lab10 } from './Labs/Lab10/Lab10';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          Lab10()
        }
      </header>
    </div>
  );
}


export default App;
