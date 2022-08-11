import React from 'react'
import MainWindow from './components/MainWindow';
import RNDgenerator from './components/RNDgenerator';
import Square from './components/Square';


function App() {


  return (
    <div className="App">
      <Square />
      <Square />
      <Square />
      <MainWindow />
      <RNDgenerator />
    </div>
  );
}

export default App;
