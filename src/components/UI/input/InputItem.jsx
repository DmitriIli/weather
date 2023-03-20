import React, { useState } from "react";
import classes from './InputItem.module.css'


const InputItem = (props) =>{
    return(
        <input className={classes.myInput} {...props}/>
    );
};

export default InputItem;