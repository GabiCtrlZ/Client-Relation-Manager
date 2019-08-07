import React, { Component } from 'react'

class TableBody extends Component {
    isSold = (key) =>{
        if (key === 'sold'){
           return this.props.user[key] ? <i class="material-icons">check</i> : <i class="material-icons">close</i>
        }
        return this.props.user[key]
    }
    render() {
        return (
            <tr className='table_body'>
                {this.props.keys.map(x => <td key={x}>{this.isSold(x)}</td>)}
            </tr>
        )
    }
}

export default TableBody