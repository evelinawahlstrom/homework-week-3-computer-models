import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'


const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64", 
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]

class App extends Component {
  state = {
    value: ""
  }

  
updateSelection = () => {
    const model = data.find(model => model.name === this.state.value) 
    const action = {
        type: "ADD_MODEL",
        payload: model
        }
        this.props.dispatch(action)
      }
      
  handleChange = (event) => {
        this.setState({ value: event.target.value })
        this.handleChange = this.handleChange.bind(this)
        }


render() {
  console.log("PROPS??", this.props)
  return (
    <div className="App">
    <header className="App-header">
    <h1>Computer Models</h1>
        <main>
        <select value={this.state.value} onChange={this.handleChange}>
        <option value="">-- pick a model --</option>
        <option value="Ivel Z3">Ivel Z3 (1969)</option>
        <option value="Bally Astrocade">Bally Astrocade (1977)</option>
        <option value="Sord M200 Smart Home Computer">Sord M200 Smart Home Computer (1971)</option>
        <option value="Commodore 64">Commodore 64 (1982)</option>
        </select>
        <button onClick={this.updateSelection} id="buttonclick"> Add</button>
        </main>
        </header>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return { state }
  }




export default connect(mapStateToProps)(App)