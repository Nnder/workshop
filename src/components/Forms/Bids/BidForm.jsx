import React, {useState} from 'react';
import FormInput from "../../UI/Inputs/FormInput";
import Select from "react-select";
import FormNew from "../../UI/Forms/FormNew";
import MainButton from "../../UI/Buttons/MainButton/MainButton";
import DatePicker from 'react-date-picker';
import classes from './BidForm.module.css';

const BidForm = ({Bids,setBids,...props}) => {

    const options = [
        { value: 'Выберите', label: 'Выберите' },
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const [id, setId] = useState(Bids.length+1);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [cause, setCause] = useState('');
    const [tech, setTech] = useState();
    const [mark, setMark] = useState();
    const [master, setMaster] = useState();
    const [status, setStatus] = useState();
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const writeData = (e)=>{
        e.preventDefault();
        const bid = {
            data: {
                id,
                date,
                time,
                address,
                phone,
                cause,
                tech: tech.value,
                mark: mark.value,
                master: master.value,
                status: status.value,
                price,
            },
            description : {
                show:false,
                note:description},
        }

        console.log(bid);
        console.log(bid);

        setBids([...Bids,bid])
    }

    const formatDate = (date)=>{
        return date.toString().split("-").reverse().join('.');
    }


    //<DatePicker onChange={(e)=>setDate(e.target.value)} value={date} className={classes.datePickerWrapper}/>

    return (
        <FormNew hide={props.hide}>
            <FormInput type={'date'} name={'date'} title={'дата'} onChange={(e)=>setDate(formatDate(e.target.value))} />
            <FormInput type={'text'} name={'time'} title={'время'} onChange={(e)=>setTime(e.target.value)} />
            <FormInput type={'text'} name={'address'} title={'адрес'} onChange={(e)=>setAddress(e.target.value)}/>
            <FormInput type={'text'} name={'phone'} title={'телефон'} onChange={(e)=>setPhone(e.target.value)}/>
            <FormInput type={'text'} name={'cause'} title={'причина'} onChange={(e)=>setCause(e.target.value)}/>
            <FormInput type={'text'} name={'description'} title={'Прочее'} onChange={(e)=>setDescription(e.target.value)}/>

            <Select options={options} className={classes.selectWrapper} placeholder={"Вид техники"}
                    defaultValue={tech} onChange={setTech}/>
            <Select options={options} className={classes.selectWrapper} placeholder={"Марка"}
                    defaultValue={mark} onChange={setMark}/>
            <Select options={options} className={classes.selectWrapper} placeholder={"Мастер"}
                    defaultValue={master} onChange={setMaster}/>
            <Select options={options} className={classes.selectWrapper} placeholder={"Статус"}
                    defaultValue={status} onChange={setStatus}/>
            <FormInput type={'text'} name={'price'} title={'цена'} onChange={(e)=>setPrice(e.target.value)}/>

            <MainButton onClick={writeData}>Сохранить</MainButton>

        </FormNew>
    );
};

export default BidForm;