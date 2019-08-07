import React, { Component } from 'react'

class MovePage extends Component {
    render() {
        return (
            <ul className="pagination center-align">
                <li className="disabled arroww"><i class="material-icons">chevron_left</i></li>
                <li className="page_on"> 1 </li>
                <li className="waves-effect arroww"><i class="material-icons">chevron_right</i></li>
            </ul>
        )
    }
}

export default MovePage