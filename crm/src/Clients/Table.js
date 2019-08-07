import React, { Component } from 'react'
import TableHead from './TableHead';
import TableBody from './TableBody';
import MovePage from './MovePage';

class Table extends Component {
    render() {
        return (
            <div className="container_search">
                <table>
                    <thead>
                        <TableHead keys={this.props.keys}/>
                    </thead>

                    <tbody>
                        {this.props.data.map(x => <TableBody keys={this.props.keys} user={x} key={x._id}/>)}
                    </tbody>
                </table>
                <MovePage />
            </div>
        )
    }
}

export default Table