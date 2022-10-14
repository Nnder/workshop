import React from 'react';
import './FormInput.css';

const FormInput = ({name,type,title,...props}) => {
    return (
        <div className="text-field text-field_floating-3" {...props} style={{ paddingBottom:'5px'}}>
            <input className="text-field__input" type={type}  name={name}
                   placeholder={title}/>
                <label className="text-field__label">{title}</label>
        </div>
    );
};

export default FormInput;