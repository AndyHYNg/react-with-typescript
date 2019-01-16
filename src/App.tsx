import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      searchRequest: "potato+chips",
      postalCode: "",
      chipsList: [],
    }
  }

  handleChange = (e: any) => {
    this.setState({
      searchRequest: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Couch Potato</h1>
        <h2>{`For the couch potatoes looking for cheap potato (chips)`}</h2>
        <form action="" onChange={this.handleChange}>
          <select name="chipBrand" id="brand">
            <option value="potato+chips" defaultValue="true">All</option>
            <option value="ruffles">Ruffles</option>
            <option value="miss+vickie">Miss Vickie's</option>
            <option value="lays">Lay's</option>
          </select>
        </form>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
