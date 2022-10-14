import React from 'react';
import MainButton from "../UI/Buttons/MainButton/MainButton";
import classes from './Menu.module.css';

const Menu = (props) => {
    return (
        <div className={classes.menu}>
            <div className={classes.wrapper}>
                {props.items.map((item, id)=> (
                    <MainButton key={id} onClick={item.onClick}>{item.name}</MainButton>
                ))}
            </div>
        </div>
    );
};

export default Menu;