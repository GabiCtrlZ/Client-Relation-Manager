import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import 'materialize-css'
import Clients from './Clients/Clients';
import Actions from './Actions/Actions';
import Analytics from './Analytics/Analytics';

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
  update = (id, updateData) =>{
    let data = [...this.state.data]
    let user = data.find(x => x['_id'] === id)
    for (let key of Object.keys(updateData)){
      user[key] = updateData[key]
    }
    this.setState({
      data
    })
  }
  updateClient = (name, key, value) =>{
    let data = [...this.state.data]
    let user = data.find(x => x.name === name)
    if(!user || !value){
      return 'error try again'
    }
    user[key] = value
    this.setState({
      data
    })
    return 'Updated successfully'
  }
  addClient = async (client) =>{
    let data = [...this.state.data]
    data.push(client)
    await this.setState({data})
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
        <Route exact path='/clients' render={()=> <Clients data={this.state.data} update={this.update}/>}/>
        <Route exact path='/actions' render={()=> <Actions data={this.state.data} updateClient={this.updateClient} addClient={this.addClient} />}/>
        <Route exact path='/analytics' render={()=> <Analytics data={this.state.data} />}/>
      </Router>
    )
  }
}

export default App;
