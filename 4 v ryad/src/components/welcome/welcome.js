import React from 'react';
import './welcome.css';
import { Link } from 'react-router-dom';

export default class Welcome extends React.Component{

    constructor() {
        super();
        this.state = {
            player1: '',
            player2: ''
        };
    }

    player1 = (event) => {

        const value = event.target.value;

        this.setState(() => {
            return {
            player1: value
            }
        })
    }
    player2 = (event) => {

        const value = event.target.value;

        this.setState(() => {
            return {
            player2: value
            }
        })
    }

    render(){
        return (
            
            <div className='form'>
                <p className='p'>Player 1</p>
                <input type='text' className='input' placeholder="Enter your name" value={this.state.player1} onChange={this.player1}/>
                <p className='p'>Plaer 2</p>
                <input type='text' className='input' placeholder="Enter your name" value={this.state.plaer2} onChange={this.player2}/>
                <Link className='btn' to={{
                pathname:'/game',
                state:{
                    fromStartPage: true,
                    player1: this.state.player1,
                    player2: this.state.player2
                }
                }}><button className='startBtn'>Start</button></Link> 
            </div>
            
        )
    }
} 