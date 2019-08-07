import React, { Component } from 'react'
import Search from './Search';
import Table from './Table';

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            searchVal: '',
            radioVal: '',
            pageNum: 1
        }
    }
    handleInput = (e) => {
        let name
        let value
        if (!e.target.value) {
            value = e.target.textContent
            name = e.target.className
        }
        else {
            value = e.target.value
            name = e.target.name
        }
        this.setState({ [name]: value })
    }
    getKeysArray = () => {
        if (this.props.data[0]) {
            return Object.keys(this.props.data[0]).filter(x => x !== '_id' && x !== 'email')
        }
        return []
    }

    render() {
        return (
            <div>
                <Search state={this.state} handleInput={this.handleInput} />
                <Table keys={this.getKeysArray()} data={this.props.data.slice(0, 10)}/>
            </div>
        )
    }
}

export default Clients