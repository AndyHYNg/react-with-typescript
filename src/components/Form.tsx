import React, { Fragment } from 'react';

const Form = (props: any) => {
    return (
        <Fragment>
            <h1>Couch Potato</h1>
            <h2>{`For the couch potatoes looking for cheap potato (chips)`}</h2>
            <form action="" onSubmit={props.handleSubmit} onChange={props.handleChange}>
                <label htmlFor="postalCode">Enter Postal Code:</label>
                <input type="text" name="postalCode" className="postalCode" required={true} id="postalCode" placeholder="Postal Code" />
                <select name="chipBrand" id="brand">
                    <option value="potato+chips" defaultValue="true">All</option>
                    <option value="ruffles">Ruffles</option>
                    <option value="miss+vickie">Miss Vickie's</option>
                    <option value="lays">Lay's</option>
                </select>
                <input type="submit" className="submit" />
            </form>
        </Fragment>
    )
}

export default Form;