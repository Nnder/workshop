import React from 'react';
import classes from './CloseButton.module.css';

const CloseButton =  ({children,hide,...props}) => {
    return (
        <button onClick={()=>hide(true)} {...props} className={classes.close__Btn}>
            {children}
        </button>
    );
};

export default CloseButton;