import React from 'react';
import './restart.css';

export const RestartBtn = ({restart}) => {

let restart1 = () => {
    restart();
}

    return(
        <div className='button'>
            <button className='restartBtn' onClick={restart1}>Restart</button>
        </div>
    )
};
