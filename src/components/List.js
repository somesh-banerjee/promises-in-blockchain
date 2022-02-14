import React,{ useState,useEffect } from 'react';
import { Card,Header } from 'semantic-ui-react';
import Contract from '../SmartContract/promise';
require('dotenv').config()

const List = () => {

    const [detail,getDetail] = useState({
        name: [],
		prst: [],
		time: []
    });

    useEffect(()=>{
        const getProms = async() => {
            const allP = await Contract.methods.showPromises().call();
            //console.log(allP);
    
            const arr=[];
            allP[2].forEach((element, index) => {
                var date = new Date(element * 1000).toLocaleDateString("en-GB");
                arr.push(date);
            });
    
            getDetail({
                name:allP[0],
                prst:allP[1],
                time:arr
            })
    
        }
        getProms();
    },[])
    

    return(
        <div>
            <Header size='large' style={{marginTop:'30px'}}>All Promises</Header>
            <div>
                <Card.Group>
                {detail.name.map((items, index) => {
                    return (
                        <Card key={index} fluid header={items + ' Promised'} description={detail.prst[index]} meta={'on ' + detail.time[index]} />
                    );
                })}
                </Card.Group>
            </div>
        </div>
    )

}

export default List;