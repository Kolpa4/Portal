import React from 'react'
// import {useState}from 'react'

function MainWindow() {

  return (
    <div className="App">
      <button style ={{
        display:'flex',
        position:'absolute',
        left: '50%', 
        top: '50%',
        width: '200px',
        height: '100px',
        // top: coordinates.y,
        // left: coordinates.x,
        backgroundColor: 'white',
        // font:20,
        transform: 'translate(-50%, -50%)',
        fontSize:34,
        textAlign:'center',
        justifyContent: 'center'
        
        }}
        // onClick = {()}
        >ПОРТАЛ</button>
      <div/>
    </div>
  );
}

export default MainWindow;
