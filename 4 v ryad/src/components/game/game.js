import React from 'react';
import swal from 'sweetalert';
import Table from '../table/table';
import { RestartBtn } from '../restart/restart';
import './game.css';
import { Link} from 'react-router-dom';

class Game extends React.Component {

    constructor() {
        super();

        this.state = {
            field:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
            player1: true
        };
    }

    restart = () => {

        this.setState({
            field:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
            player1: true
        })
    }

    verticalCheck = (p1, p2) => {
        for(let a = 0; a<  this.state.field.length; a++){
            for (let b = 0; b < (this.state.field[a].length - 3);b++) {
               let arr = this.state.field[a].slice(b,b+4);
               
               if (arr.every((i) => { return i === 1})) {
                //    arr.map((el) => {return el = 1})
                   return setTimeout(() => {swal(`Победил ${p1}!`)}, 100);
               } if (arr.every((i) => { return i === 2})) {
                    return setTimeout(() => {swal(`Победил ${p2}!`)}, 100);
                }
            }
        }
    }

    horizontalCheck = (p1, p2) => {
    

        let horizontalArr = () => {
        let fieldRev = [];
        for(let i = 0; i<= this.state.field[0].length - 1; i++){
            let arr = [];
            for (let y = 0; y <= this.state.field.length - 1; y++){
                arr.push(this.state.field[y][i]);
            }
            fieldRev.push(arr);
        }
        return fieldRev;
            
        }
        const hArr = horizontalArr();

        for(let a = 0; a< hArr.length; a++){
            for (let b = 0; b < (hArr[a].length - 3);b++) {
            let arr = hArr[a].slice(b,b+4);
            
            if (arr.every((i) => { return i === 1})) {
                return setTimeout(() => {swal(`Победил ${p1}!`)}, 100);
            } if (arr.every((i) => { return i === 2})) {
                    return setTimeout(() => {swal(`Победил ${p2}!`)},100);
                }
            }
        }


}
    diagonalCheck = (p1,p2) => {

    const diagonalArrL = () => {
        const Ylength = this.state.field.length;
        const Xlength = this.state.field[0].length;
        const maxLength = Math.max(Xlength, Ylength);
        let temp;
        let res = [];
        for (let k = 0; k <= 2 * (maxLength - 1); ++k) {
            temp = [];
        for (let y = Ylength - 1; y >= 0; --y) {
            let x = k - y;
            if (x >= 0 && x < Xlength) {
                temp.push(this.state.field[y][x]);
            }
        }
        res.push(temp);
        }
        return res;
    }


    const diagonalArrR = () => {
        const Ylength = this.state.field.length;
        const Xlength = this.state.field[0].length;
        const maxLength = Math.max(Xlength, Ylength);
        let temp;
        let res = [];
        for (let k = 0; k <= 2 * (maxLength - 1); ++k) {
            temp = [];
        for (let y = Ylength - 1; y >= 0; --y) {
            let x = k - (Ylength- y);
            if (x >= 0 && x < Xlength) {
                temp.push(this.state.field[y][x]);
            }
        }
        res.push(temp);
        }
        return res;
    }
        const diagonalArr = [...diagonalArrL(), ...diagonalArrR()];
        for(let a = 0; a< diagonalArr.length; a++){
            for (let b = 0; b < (diagonalArr[a].length - 3);b++) {
            let arr = diagonalArr[a].slice(b,b+4);
            
            if (arr.every((i) => { return i === 1}) && (arr.length >= 4)) {
                return setTimeout(() => {swal(`Победил ${p1}!`)},100);
            } if (arr.every((i) => { return i === 2}) && (arr.length >= 4)) {
                    return setTimeout(() => {swal(`Победил ${p2}`)},100);
                }
            }
        }

    }

     clickColumn = (i, y) => {
       const p1 = this.props.location.state ? this.props.location.state.player1 : 'Player1';
       const p2 = this.props.location.state ? this.props.location.state.player2 : 'Player2';
        // console.log(`clicking column ${i}`);
        const field = [...this.state.field];
        
        // let player2 = !this.state.player1;
        this.setState((state) => {
            return {
            player1: !state.player1
            }
        })
        // console.log(this.state.player1)
        if (this.state.player1) {
            field[i][y] = 1;
        } else {
            field[i][y] = 2;
        }

       this.setState({
            field
        })
        // console.log(this.state.field)

    // console.log(i,key)
       this.verticalCheck(p1,p2);
      this.horizontalCheck(p1,p2);
      this.diagonalCheck(p1,p2);
      
    };
    // clickColumn = this.clickColumn.bind(this);
    statusPanel = (x,y) => {
        if (this.state.player1) {
            return `${x}, ходи!`;
        } else {
            return `${y}, ходи!`;
        }
      
    };

   
    

    render() {
     const player1Name = this.props.location.state ? this.props.location.state.player1 : 'Player1';
     const player2Name = this.props.location.state ? this.props.location.state.player2 : 'Player2';
        return (
            <div className='app'>
            <Link to={{pathname:'/'}}>В начало</Link>
               <div className='statusPanel'>{this.statusPanel(player1Name, player2Name)}</div> 
            <div>
                <Table data={this.state.field} clickColumn={this.clickColumn}/>
                
            </div>
           <div> <RestartBtn restart={this.restart}/></div>
            
            </div>
        );
    }
}

export default Game;