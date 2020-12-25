import React, { Component } from 'react'
import classes from './Modal.module.css'
import BackDrop from './../BackDrop/BackDrop'

const Modal = (props)=>{
   
   
    return (
        <>
        <BackDrop turnoff={props.turnoff} show={props.show}></BackDrop>
        <div className={props.show?classes.Modal:classes.hidden}>
            {props.children}
        </div>
        </>
    )
}
export default Modal;
//assign more classes to element  https://stackoverflow.com/questions/34521797/how-to-add-multiple-classes-to-a-reactjs-component