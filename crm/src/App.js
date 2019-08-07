import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import 'materialize-css'
import Clients from './Clients/Clients';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount = () => {
    let data = require('./data.json')
    data = data.map(x => {
      x.firstContact = x.firstContact.slice(0, 10)
      return x
    })
    this.setState({data})
  }
  render() {
    return (
      <Router>
        <nav>
          <div className="nav-wrapper nav_bar">
            <ul id="nav-mobile" className="left">
              <li><Link to="/clients"> Clients </Link></li>
              <li><Link to="/actions"> Actions </Link></li>
              <li><Link to="/analytics"> Analytics </Link></li>
            </ul>
          </div>
        </nav>
        <Route exact path='/clients' render={()=> <Clients data={this.state.data}/>}/>
      </Router>
    )
  }
}

export default App;
