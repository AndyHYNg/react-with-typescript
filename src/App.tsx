import React, { Component } from 'react';
import axios from "axios";
import './App.css';

import ChipProduct from "./components/ChipProduct";

import Form from "./components/Form";

interface appState {
  searchBrand : string,
  postalCode : string,
  fixedPostalCode : string,
  chipsList : object[]
}

class App extends Component <{}, appState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchBrand: "potato+chips",
      postalCode: "",
      fixedPostalCode: "",
      chipsList: []
    }
  }

  // we need to be explicit with e typing in TS
  handleChange = (e: React.ChangeEvent<any>) => {
    // console.log(e.target.name);
    (e.target.name === "chipBrand") ? this.setState({ searchBrand: e.target.value }) : this.setState({ postalCode: e.target.value });
  }

  // we need to be explicit with e typing in TS
  // we don't need to technically gain anything from e as handleChange should have set the state with all the necessary information obtained from the form
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fixedPostalCode = this.filterPostalCode(this.state.postalCode);
    this.setState({
      fixedPostalCode,
      chipsList : []
    }, this.getDeals)
  }

  getDeals = () => {
    return axios
      .get(`https://backflipp.wishabi.com/flipp/items/search`, {
        params: {
          locale: "en-CA",
          postal_code: this.state.fixedPostalCode,
          q: this.state.searchBrand
        }
      })
      .then((res: any) => {
        (res.data.items).forEach(this.pushData);
      })
  }

  pushData = (element: object | {}) => {
    let newChipsList = this.state.chipsList.concat(element);
    this.setState({
      chipsList: newChipsList
    })
  }

  // remove whitespace in postal code
  filterPostalCode = (postalCode: string) => {
    return postalCode.replace(/\s/g, '');
  }

  render() {
    return (
      <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
    );
  }
}

export default App;
