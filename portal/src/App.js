import React from 'react'
import {BrowserRouter,Route} from "react-router-dom"
import MainWindow from './pages/MainWindow';
import Authorisation from './pages/Authorisation';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/MainWindow'>
          <MainWindow/>
        </Route>
        <Route path='/Authorisation'>
          <Authorisation/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
