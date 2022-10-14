import React, {useState} from 'react';
import MainTable from "../components/Table/MainTable";
import Menu from "../components/Menu/Menu";
import WorkshopForm from "../components/Forms/Workshop/WorkshopForm";

const Workshop = () => {

    const [Title, setTitle] = useState(['№','Дата','Время','Адрес','Телефон','Вид техники','Марка','Причина','Мастер','Статус','Цена'])

    const [Bids,setBids] = useState([
        {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
        {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
        {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
        {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
        {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
        {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
        {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
        {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
        {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
        {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
        {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
        {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
        {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
        {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
        {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
        {id:1,date:'12.12.2022',time: '16:00',address: 'Пушкина',phone:'89125126126',tech:'СМА',mark: 'Samsung',cause: 'Не крутит',user:'Леша',status: 'Не готово',price: '2000'},
    ])




    const [description, setDescription] = useState([
        {show:false,note:"Это описание"},
        {show:false,note:"Это описание"},
        {show:false,note:"Это описание"},
        {show:false,note:"Это описание"},
        {show:false,note:"Это описание"},
        {show:false,note:"Это описание"},
        {show:false,note:"Это описание"},
        {show:false,note:"Это описание"},
        {show:false,note:"Это описание"},
        {show:false,note:"Это описание"},
        {show:false,note:"Это описание"},
        {show:false,note:"Это описание"},
        {show:false,note:"Это описание"},
        {show:false,note:"Это описание"},
        {show:false,note:"Это описание"},
        {show:false,note:"Это описание"},
    ])

    const [hideForm, setHideForm] = useState(true);

    return (
        <div className="App">
            {!hideForm ? (<WorkshopForm hide={setHideForm}/>) : ''}

            {/*<MainTable*/}
            {/*    titles={Title}*/}
            {/*    items={Bids}*/}
            {/*    setBids={setBids}*/}
            {/*    setDescription={setDescription}*/}
            {/*    description={description}/>*/}

            <Menu items={[{name:'Новая заявка',onClick: ()=>setHideForm(false)}]}/>
        </div>
    );
};

export default Workshop;