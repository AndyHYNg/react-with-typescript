import React, { Component, Fragment } from 'react';
import axios from "axios";
import './App.css';

import Form from "./components/Form";
import PromoTable from "./components/PromoTable";

// object interface to store necessary data obtained from API
interface ChipProduct {
  // itemObject: object,
  clipImage: string,
  price: number,
  merchantName: string,
  merchantLogo: string,
  itemName: string,
  validFrom: string,
  validUntil: string
}

// type instead of interface for better constraints (for React Props and States)
type AppState = {
  searchBrand : string,
  postalCode : string,
  fixedPostalCode : string,
  chipsArray : ChipProduct[]
}

class App extends Component <{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchBrand: "potato+chips",
      postalCode: "",
      fixedPostalCode: "",
      chipsArray: []
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
      chipsArray : []
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
      .then((res: any) => 
        res.data.items.map((item: any) => ({
          // itemObject : item,
          clipImage : item.clipping_image_url,
          price : item.current_price,
          merchantName : item.merchant_name,
          merchantLogo : item.merchant_logo,
          itemName : item.name,
          validFrom : item.valid_from,
          validUntil : item.valid_to
        }))
      )
      .then((items: ChipProduct) => {
        this.pushData(items)
      })
  }

  pushData = (element: ChipProduct) => {
    let newChipsList = this.state.chipsArray.concat(element);
    this.setState({
      chipsArray: newChipsList
    })
  }

  // remove whitespace in postal code
  filterPostalCode = (postalCode: string) => {
    return postalCode.replace(/\s/g, '');
  }

  render() {
    return (
      <Fragment>
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <PromoTable chipsArray={this.state.chipsArray} />
      </Fragment>
    );
  }
}

export default App;
