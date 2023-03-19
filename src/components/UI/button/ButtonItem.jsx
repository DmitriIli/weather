import React from "react";
import classes from './ButtonItem.module.css';


const ButtonItem = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {props.description}
        </button>
    );
};

export default ButtonItem;