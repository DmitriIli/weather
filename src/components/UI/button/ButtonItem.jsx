import React from "react";
import classes from './ButtonItem.module.css';


const ButtonItem = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default ButtonItem;