import React from 'react';
import {Table} from "react-bootstrap";
import MainButton from "../UI/Buttons/MainButton/MainButton";
import CloseButton from "../UI/Buttons/CloseButton/CloseButton";
import AddDetail from "./AddDetail";

const MainTable = ({setBids,Bids,titles,...props}) => {

    const getData = (obj)=>{
        let result = [];
        for (let item in obj){
            result.push(<td key={result.length}>{obj[item]}</td>);
        }
        return result
    };

    const show = (id)=>{
    if(Bids[id].description.show){
        Bids[id].description.show = false
    } else {
        Bids[id].description.show = true
    }
        setBids([...Bids])
    }



    const parse = (Bids) => {
        let result = [];
        Bids.map((item,id)=>{

                result.push(
                    (<tr key={'Bid-'+id}>
                {getData(item.data)}
                <td key={'Buttons-'+id}>
                    <div key={'Wrapper-'+id}>
                        <MainButton onClick={()=>show(id)} key={'Button-'+id}>+</MainButton>
                    </div>
                </td>
            </tr>))

            result.push(
                (<tr key={'descriptions-'+id} style={{ display: Bids[id].description.show ? "table-row" : "none" }} >
                <td colSpan="13" key={'description-'+id}>
                    <div>{Bids[id].description.note}</div>
                    <CloseButton>Удалить</CloseButton>
                    <MainButton>Изменить</MainButton>
                    <AddDetail/>
                </td>
            </tr>))


        })

        return result
    }

    // {Bids.map((item,id)=>(
    //     <>
    //         <tr key={'Bid-'+id}>
    //             {getData(item.data)}
    //             <td key={'Buttons-'+id}>
    //                 <div key={'Wrapper-'+id}>
    //                     <MainButton onClick={()=>show(id)} key={'Button-'+id}>+</MainButton>
    //                 </div>
    //             </td>
    //         </tr>
    //         <tr key={'descriptions-'+id} style={{ display: Bids[id].description.show ? "table-row" : "none" }} >
    //             <td colSpan="13" key={'description-'+id}>
    //                 {Bids[id].description.note}
    //             </td>
    //         </tr>
    //     </>
    // ))}

    return (
        <Table striped hover key={'table-'+Bids.length} style={{background:'white', borderWidth: '1px'}}>
            <thead key={'head-'+Bids.length} style={{position:'sticky',top:'60px',background:'white'}}>
                <tr  key={'titles-'+Bids.length}>
                    {titles.map((title, id)=>(
                        <th key={'title-'+id}>{title}</th>
                    ))}
                    <th key={'title-'+ titles.length}>Действия</th>
                </tr>
            </thead>
            <tbody key={'body-'+Bids.length}>
            {parse(Bids)}
            </tbody>
        </Table>
    );
};

export default MainTable;