import React from 'react'
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
const Burger=(props)=>{
    let arr = [];
    for(let key in props.ingredients){
        let tot = (props.ingredients)[key];
        tot = parseInt(tot);
        while(tot-->0){
            arr.push(key);
        }
    }
    let ret;
    if(arr.length == 0){
        ret = <p>Please start adding ingredients</p>
    }else{
        ret = arr.map(e => {
            return <BurgerIngredients key={Math.random()} type={e}></BurgerIngredients>
        });
    }
   
    return (
        
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"></BurgerIngredients>
            {ret}
            <BurgerIngredients type="bread-bottom"></BurgerIngredients>
        </div>
    )
}

export default Burger;