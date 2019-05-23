import React from 'react';
import './column.css';
import Cell from '../cell/cell';

export default class Column extends React.Component {

    showCell (data){
        return data.map((el, i) => (<Cell data={el} i={this.props.i} y={i} clickCell={this.props.clickColumn}/>));
    }

    // clickColumn() {
    // //    this.props.clickColumn(this.props.i);
    // console.log(this.props.i);
    // }
    // clickColumn = this.clickColumn.bind(this);

    render() {
        return (
            <div className='column' >
                {this.showCell(this.props.data)}
            </div>
        )
    }
}
