import React, { Component } from 'react';
import Burger from './../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls.js'
import Modal from './../../Components/UI/Modal/Modal';
import OrderSummary from './../../Components/Burger/OrderSummary/OrderSummary';
class BurgerBuilder extends Component{
    constructor(props){
        super(props);
        this.state = {
            ingredients : {
                salad : 0,
                cheese : 0,
                bacon : 0,
                meat : 0
            },
            totalPrice : 60,
            modalshow : false
        }

        this.price  = {
            salad : 20,
            cheese : 40,
            bacon : 100,
            meat : 120
        }
    }

    addingredient = (type)=>{
        
        let olding = {...this.state.ingredients};
        olding[type] = olding[type]+1;
        this.setState({
            ingredients : olding,
            totalPrice : this.state.totalPrice + this.price[type]
        })
    }
    removeingredient = (type)=>{
        let olding = {...this.state.ingredients};
        olding[type] = Math.max(olding[type]-1,0);
        this.setState({
            ingredients : olding,
            totalPrice : this.state.totalPrice - this.price[type]
        })
    }

    orderButtonListen = ()=>{
        this.setState({
            modalshow : true
        });
    }

    turnoff=()=>{
        
        this.setState({
            ingredients : {
                salad : 0,
                cheese : 0,
                bacon : 0,
                meat : 0
            },
            totalPrice : 60,
            modalshow : false
        })
    }

    purchased=()=>{
        alert("You order has been placed... ");
        this.setState({
            ingredients : {
                salad : 0,
                cheese : 0,
                bacon : 0,
                meat : 0
            },
            totalPrice : 60,
            modalshow : false
        })
    }


    render(){
        
        return (
            <>
                <Modal purchased={this.purchased} turnoff={this.turnoff} show={this.state.modalshow}><OrderSummary tatalPrice={this.state.totalPrice} purchased={this.purchased} turnoff={this.turnoff} ingredients={this.state.ingredients}></OrderSummary></Modal>
                <div><Burger ingredients={this.state.ingredients}></Burger></div>
                <BuildControls order={this.orderButtonListen} tatalPrice={this.state.totalPrice} ingredients={this.state.ingredients} removecall={(t)=>this.removeingredient(t)} addcall={(t)=>this.addingredient(t)}></BuildControls>
            </>
        )
    }

}
export default BurgerBuilder;