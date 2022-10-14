import React, {useEffect, useState} from "react";
import Menu from "../components/Menu/Menu";
import MainTable from "../components/Table/MainTable";
import BidForm from "../components/Forms/Bids/BidForm";

function Bids() {
    const [Title, setTitle] = useState(['№','Дата','Время','Адрес','Телефон','Вид техники','Марка','Причина','Мастер','Статус','Цена'])
    const [Bids,setBids] = useState([
        {
            data: {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
            description: {show:false,note:"Это описание 1"},
        }
    ])

    useEffect(()=>{
        const example = [
            {
                data: {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
                description: {show:false,note:"Это описание Это описаниеЭто описаниеЭто описаниеЭто описаниеЭто описаниеЭто описание Это описаниеЭто описаниеЭто описаниеЭто описаниеЭто описаниеЭто описание Это описаниеЭто описаниеЭто описаниеЭто описание Это описаниеЭто описаниеЭто описаниеЭто описаниеЭто описание Это описание"},
            },
            {
                data: {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
                description: {show:false,note:"Это описание"},
            },
            {
                data: {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
                description: {show:false,note:"Это описание"},
            },
        ]

        setBids([...Bids,...example])
    },[])

    const [hideForm, setHideForm] = useState(true);

    return (
        <div className="App">
            {!hideForm ? (<BidForm hide={setHideForm} Bids={Bids} setBids={setBids}/>) : ''}

            <MainTable
                titles={Title}
                setBids={setBids}
                Bids={Bids}/>

            <Menu items={[{name:'Новая заявка',onClick: ()=>setHideForm(false)}]}/>
        </div>
    );
}

export default Bids;
