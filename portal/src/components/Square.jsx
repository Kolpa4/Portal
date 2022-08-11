import React,{useState} from 'react'

function Square() {
    const [coordinates, setCoordinates] = useState({x:0, y:0})
    
    
    console.log(coordinates)
  
    return (
      <div className="Square">
        <div style ={{
          display:'flex',
          position:'absolute',
          width: '100px',
          height: '100px',
          top: coordinates.y - 50,
          left: coordinates.x - 50,
          backgroundColor: 'black'
          }}
          onMouseDown={(e) => setCoordinates({x:e.pageX, y:e.pageY})}
        />
      </div>
    );
  }
  
  export default Square;
  