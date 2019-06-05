import React from 'react';
import './error.css';
import { Link } from 'react-router-dom';

export const Err = () => {
    return(
        <div className='err1'>
        <div className='err'>
            <div >Sorry, error(</div>
            <Link to={{pathname:'/'}}>В начало</Link>
        </div>
        </div>
    )
}