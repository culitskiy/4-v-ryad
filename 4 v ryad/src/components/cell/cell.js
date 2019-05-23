import React from 'react';
import './cel.css';

export default class Cell extends React.Component {

    getClassName(data) {
        switch(data) {
            case 1:
            return 'cell player1';

            case 2:
            return 'cell player2';

            case '1':
            return 'cell win';

            default:
            return 'cell blank';
        }
    }
    clickCell() {
        this.props.clickCell(this.props.i, this.props.y);
        // console.log(this.props.y);
    }
    clickCell = this.clickCell.bind(this);


    render() {
        return (
            <div className={this.getClassName(this.props.data)} 
            onClick={this.clickCell}>
                {this.props.data}
            </div>
        )
    }
}