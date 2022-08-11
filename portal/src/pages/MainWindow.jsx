import React from 'react'
import ButtonPortal from '../components/ButtonPortal';
import RNDgenerator from '../components/RNDgenerator';
import Square from '../components/Square';

const MainWindow = () => {
    return (
        <div className="MainWindow">
            <Square />
            <Square />
            <Square />
            <ButtonPortal />
            <RNDgenerator />
    

        </div>
    )
}
export default MainWindow;