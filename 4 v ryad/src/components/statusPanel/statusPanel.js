import React from 'react';

export const StatusPanel = ({statusPanel}) => {

    let statusPanelf = () => {
        statusPanel();
    }

    return (
        <div>{statusPanelf()}</div>
        
    )
}