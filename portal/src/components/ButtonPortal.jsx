import React from 'react'


function ButtonPortal() {

  return (
    <div className="App">
      <button style ={{
        display:'flex',
        position:'absolute',
        left: '50%', 
        top: '50%',
        width: '200px',
        height: '100px',
        backgroundColor: 'white',
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

export default ButtonPortal;
