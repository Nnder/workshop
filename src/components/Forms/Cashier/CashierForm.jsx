import React from 'react';
import FormInput from "../../UI/Inputs/FormInput";
import Select from "react-select";
import FormNew from "../../UI/Forms/FormNew";
import MainButton from "../../UI/Buttons/MainButton/MainButton";

const CashierForm = (props) => {

    const options = [
        { value: 'Выберите', label: 'Выберите' },
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <FormNew hide={props.hide}>
            <FormInput type={'email'} name={'email'} title={'Email'} style={{ paddingBottom:'5px'}}/>
            <FormInput type={'date'} name={'date'} title={'дата'} style={{ paddingBottom:'5px'}}/>
            <FormInput type={'email'} name={'email'} title={'Email'} style={{ paddingBottom:'5px'}}/>
            <FormInput type={'email'} name={'email'} title={'Email'} style={{ paddingBottom:'5px'}}/>
            <FormInput type={'email'} name={'email'} title={'Email'} style={{ paddingBottom:'5px'}}/>
            <FormInput type={'email'} name={'email'} title={'Email'} style={{ paddingBottom:'5px'}}/>
            <FormInput type={'email'} name={'email'} title={'Email'} style={{ paddingBottom:'5px'}}/>
            <FormInput type={'email'} name={'email'} title={'Email'} style={{ paddingBottom:'5px'}}/>
            <FormInput type={'email'} name={'email'} title={'Email'} style={{ paddingBottom:'5px'}}/>
            <FormInput type={'email'} name={'email'} title={'Email'} style={{ paddingBottom:'5px'}}/>
            <FormInput type={'email'} name={'email'} title={'Email'} style={{ paddingBottom:'5px'}}/>
            <Select options={options} />
            <MainButton>Сохранить</MainButton>
        </FormNew>
    );
};

export default CashierForm;