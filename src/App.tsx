import React, { Component } from 'react';
import axios from "axios";
import './App.css';

interface appState {
  searchBrand : string,
  postalCode : string,
  chipsList : App[]
}

class App extends Component<{}, appState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchBrand: "potato+chips",
      postalCode: "",
      chipsList: []
    }
  }

  // we need to be explicit with e typing in TS
  handleChange = (e: React.ChangeEvent<any>) => {
    // console.log(e.target.name);
    (e.target.name === "chipBrand") ? this.setState({ searchBrand: e.target.value}) : this.setState({ postalCode: e.target.value});
  }

  // we need to be explicit with e typing in TS
  // we don't need to technically gain anything from e as handleChange should have set the state with all the necessary information obtained from the form
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.getDeals();
  }

  getDeals = () => {
    const fixedPostalCode = this.filterPostalCode(this.state.postalCode);
    return axios
      .get(`https://backflipp.wishabi.com/flipp/items/search`, {
        params: {
          locale: "en-CA",
          postal_code: this.state.postalCode,
          q: this.state.searchBrand
        }
      })
      .then(res => {
        console.log(res);
      })
  }

  // remove whitespace in postal code
  filterPostalCode = (postalCode: string) => {
    return postalCode.replace(/\s/g, '');
  }

  render() {
    return (
      <div className="App">
        <h1>Couch Potato</h1>
        <h2>{`For the couch potatoes looking for cheap potato (chips)`}</h2>
        <form action="" onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <label htmlFor="postalCode">Enter Postal Code:</label>
          <input type="text" name="postalCode" className="postalCode" required={true} id="postalCode" placeholder="Postal Code" />
          <select name="chipBrand" id="brand">
            <option value="potato+chips" defaultValue="true">All</option>
            <option value="ruffles">Ruffles</option>
            <option value="miss+vickie">Miss Vickie's</option>
            <option value="lays">Lay's</option>
          </select>
          <input type="submit" className="submit"/>
        </form>
      </div>
    );
  }
}

export default App;
