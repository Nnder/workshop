import React, {useState} from 'react';
import {Table} from "react-bootstrap";
import MainButton from "../UI/Buttons/MainButton/MainButton";

const MainTable = ({...props}) => {

    const getData = (obj)=>{
        let result = [];
        for (let item in obj){
            console.log(obj[item])
            result.push(<td key={result.length}>{obj[item]}</td>);

        }
        return result
    };

    const [DetailTitle, setDetailTitle] = useState(['№','Запчасть','Кол-во'])
    const [Detail,setDetail] = useState([
        {data: {id:1,name:'Насос', count:5},},
    ])

    return (
        <div>
            <div>
                <input type="text" name="id"/>
                <input type="text" />
                <input type="text" />
                <MainButton>+</MainButton>
            </div>
            <Table striped bordered hover key={'table-'+Detail.length}>
                <thead key={'head-'+DetailTitle.length}>
                <tr style={{background:'white'}} key={'titles-'+DetailTitle.length}>
                    {DetailTitle.map((title, id)=>(
                        <th key={'title-'+id}>{title}</th>
                    ))}
                    <th key={'title-'+ DetailTitle.length}>Действия</th>
                </tr>
                </thead>
                <tbody key={'body-'+Detail.length}>
                {Detail.map((item,id)=>(
                    <tr key={'Bid-'+id}>
                        {getData(item.data)}
                        <td key={'Buttons-'+id}>
                            <div key={'Wrapper-'+id}>
                                <MainButton onClick={()=>console.log(123)} key={'Button-'+id}>+</MainButton>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>

    );
};

export default MainTable;