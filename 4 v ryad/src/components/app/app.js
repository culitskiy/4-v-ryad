import React from 'react';

import Table from '../table/table';
import { RestartBtn } from '../restart/restart';
import { StatusPanel } from '../statusPanel/statusPanel';

class App extends React.Component {

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

    verticalCheck = () => {
        for(let a = 0; a<  this.state.field.length; a++){
            for (let b = 0; b < (this.state.field[a].length - 3);b++) {
               let arr = this.state.field[a].slice(b,b+4);
               
               if (arr.every((i) => { return i === 1})) {
                   arr.map((el) => {return el = '1'})
                   console.log(typeof arr[1]);
                   return setTimeout(() => {alert('Pobedil player1')}, 100);
               } if (arr.every((i) => { return i === 2})) {
                    return setTimeout(() => {alert('Pobedil player2')}, 100);
                }
            }
        }
    }

    horizontalCheck = () => {
    

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
                return setTimeout(() => {alert('Pobedil player1')}, 100);
            } if (arr.every((i) => { return i === 2})) {
                    return setTimeout(() => {alert("Pobedil player2")},100);
                }
            }
        }


}
    diagonalCheck = () => {

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
                return setTimeout(() => {alert('Pobedil player1')},100);
            } if (arr.every((i) => { return i === 2}) && (arr.length >= 4)) {
                    return setTimeout(() => {alert("Pobedil player2")},100);
                }
            }
        }

    }

     clickColumn = (i,y) => {
        
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

    // console.log(i,key)
       this.verticalCheck();
      this.horizontalCheck();
      this.diagonalCheck();
      
    };
    // clickColumn = this.clickColumn.bind(this);
    statusPanel = () => {
        if (this.state.player1) {
            return "First Player";
        } else {
            return 'Second Player';
        }
      
    };

   
    

    render() {
       
        return (
            <div>
               <div>{this.statusPanel()}</div> 
            <div>
                <Table data={this.state.field} clickColumn={this.clickColumn}/>
                
            </div>
            <RestartBtn restart={this.restart}/>
            
            </div>
        );
    }
}

export default App;