import logo from './logo.svg';
import './App.css';
import { Assignment1 } from './Assignment/Assignment1/Assignment1.js';
import { Lab8 } from './Labs/Lab8/Lab8.js';
import { Assignment2 } from './Assignment/Assignment2/Assignment2.js';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Assignment2()}
      </header>
    </div>
  );
}


export default App;
