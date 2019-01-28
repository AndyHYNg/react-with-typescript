import React, {Component, Fragment } from 'react';

interface listState {
    clipImage : string,
    price : number,
    merchantName : string,
    itemName : string,
    validFrom : string,
    validUntil : string
}

class ChipProduct extends Component <{}, listState> {
    constructor(props: any) {
        super(props);
        this.state = {
            clipImage : "",
            price : 0,
            merchantName : "",
            itemName : "",
            validFrom : "",
            validUntil: ""
        }
    }
}

export default ChipProduct;