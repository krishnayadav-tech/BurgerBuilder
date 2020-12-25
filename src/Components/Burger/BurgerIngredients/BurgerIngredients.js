import React, { Component } from 'react';
import classes from './BurgerIngredients.module.css';
import PropTypes from 'prop-types';
class BurgerIngredient extends Component{
    render(){
        let ingredints = null;
        switch(this.props.type){
            case 'bread-bottom':{
                ingredints = <div className={classes.BreadBottom}></div>
                break;
            }
            case 'bread-top':{
                ingredints = <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
                break;
            }
            case 'meat':{
                ingredints = <div className={classes.Meat}></div>
                break;
            }   
            case 'cheese':{
                ingredints = <div className={classes.Cheese}></div>
                break;
            }
            case 'salad':{
                ingredints = <div className={classes.Salad}></div>
                break;
            }
            case 'bacon':{
                ingredints = <div className={classes.Bacon}></div>
                break;
            }default:
                ingredints = null;
        }

        return ingredints;
    }
}

BurgerIngredient.propTypes = {
    type : PropTypes.string.isRequired
}
export default BurgerIngredient;