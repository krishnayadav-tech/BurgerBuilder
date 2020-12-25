import React from 'react'
import classes from './BackDrop.module.css'

const BackDrop = (props)=>{
    return props.show == true ? <div onClick={props.turnoff} className={classes.BackDrop}></div> : null;
}
export default BackDrop;
