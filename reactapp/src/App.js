import logo from './logo.svg';
import './App.css';
import { Assignment1 } from './Assignment/Assignment1/Assignment1.js';
import { Lab8 } from './Labs/Lab8/Lab8.js';
import { Assignment2 } from './Assignment/Assignment2/Assignment2.js';
import { Assignment2Sir } from './Assignment/Assignment2/Assignment2BySir';
import { Lab9 } from './Labs/Lab9/Lab9';
import { Lab10 } from './Labs/Lab10/Lab10';
import { Lab11 } from './Labs/Lab11/Lab11';
import { ReactLab11 } from './Labs/Lab11/ReactBootstrap/ReactLab11';
import { MaterialUILab11 } from './Labs/Lab11/MaterialUIBase/MaterialUILab11';

import 'bootstrap/dist/css/bootstrap.min.css';
import BasicTable from './Labs/Lab12/Component/BasicTable';
import './Labs/Lab12/Component/ShowDataInTable';
import ShowDataInTable from './Labs/Lab12/Component/ShowDataInTable';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShowDataInTable data={[
          {
            id: 1,
            title: 'aaa'
          },
          {
            id: 2,
            title: 'aaa'
          }
        ]} onRowClick={(e) => console.log(e)} />
      </header>
    </div>
  );
}


export default App;
