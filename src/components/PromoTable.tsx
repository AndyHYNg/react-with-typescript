import React, { Fragment } from "react";

const PromoTable = (props: any) => (
  props.chipsArray.map((item: any) => (
    <Fragment>
        {/* render results in a table markup */}
        <div>
            <p>{item.clipImage}</p>
            <p>{item.price}</p>
            <p>{item.merchantName}</p>
            <p>{item.merchantLogo}</p>
            <p>{item.itemName}</p>
            <p>{item.validFrom}</p>
            <p>{item.validUntil}</p>
        </div>
    </Fragment>
  ))
)

export default PromoTable;
