import React, { Fragment } from "react";

const PromoTable = (props: any) => (
  props.chipsArray.map((item: any) => (
    <Fragment>
        {/* render results in a table markup */}
        <div>
            <img src={item.clipImage} alt="" />
            <p>{item.price}</p>
            <p>{item.merchantName}</p>
            <img src={item.merchantLogo} alt=""/>
            <p>{item.itemName}</p>
            <p>{item.validFrom}</p>
            <p>{item.validUntil}</p>
        </div>
    </Fragment>
  ))
)

export default PromoTable;
