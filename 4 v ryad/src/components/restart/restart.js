import React from 'react';

export const RestartBtn = ({restart}) => {

let restart1 = () => {
    restart();
}

    return(
        <div>
            <button onClick={restart1}>Restart</button>
        </div>
    )
};
