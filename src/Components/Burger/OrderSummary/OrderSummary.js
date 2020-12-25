import React from 'react';
import Button from './../../UI/Button/Button'

const OrderSummary = (props)=>{

    let ingredients = props.ingredients;
    let listi =[];
    for(let key in ingredients){
        listi.push(<li key={key}>{key} : {ingredients[key]}</li>);
    }

    
    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious Burger with following ingredients.</p>
            <ul>
                {listi}
            </ul>
            <p>Continue to Checkout ?</p>
            <p><strong>Total Price : {props.tatalPrice}</strong></p>
            <Button clicked={props.purchased} btntype="Success">CHECKOUT</Button>
            <Button clicked={props.turnoff} btntype="Danger">CANCEL</Button>
        </>
    )
}

export default OrderSummary;

//assign more classes to element 