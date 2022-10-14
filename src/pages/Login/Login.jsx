import React from 'react';
import FormInput from "../../components/UI/Inputs/FormInput";
import MainButton from "../../components/UI/Buttons/MainButton/MainButton";
import classes from './Login.module.css';

const Login = () => {
    return (
        <div className={classes.wrapper}>
            <form className={classes.form}>
                <FormInput type={'text'} name={'login'} title={'Логин'} style={{ paddingBottom:'15px'}}/>
                <FormInput type={'password'} name={'password'} title={'Пароль'} style={{ paddingBottom:'15px'}}/>
                <MainButton style={{marginLeft:'auto',marginRight:'auto'}}>Войти</MainButton>
            </form>
        </div>
    );
};

export default Login;