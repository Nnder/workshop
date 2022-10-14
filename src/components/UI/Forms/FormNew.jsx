import React from 'react';
import CloseButton from "../Buttons/CloseButton/CloseButton";
import classes from './FormNew.module.css';


const FormNew = ({children,...props}) => {

    return (
        <div className={classes.back}>
            <form className={classes.window}>
                <div style={{justifyContent:'space-between', display:'flex', marginBottom:'10px'}}>
                    <div>
                        <h5>№1</h5>
                    </div>
                    <div>
                        <CloseButton  onClick={(e)=> {
                            e.preventDefault();
                            console.log(props.hide(true))
                        }}>X</CloseButton>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </form>
        </div>
    );
};

export default FormNew;