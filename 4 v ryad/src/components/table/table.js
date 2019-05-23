import React from 'react';
import './table.css';
import Column from '../column/column';

class Table extends React.Component {
    showColumns(data) {
        return data.map((el,i) => (<Column data={el} i={i} clickColumn={this.props.clickColumn}/>))    
    }

    render() {
        return(
            <div className='table'>{this.showColumns(this.props.data)}</div>
        )
    }
}

export default Table;