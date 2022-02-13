import React,{ useState } from 'react';
import { Button } from 'semantic-ui-react';
import Contract from '../SmartContract/promise';

const List = () => {

    const [detail,getDetail] = useState({
        name: [],
		prst: [],
		time: []
    });

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

    return(
        <div>
            <h2>All Promises</h2>
            <div>
                <ul>
                {detail.name.map((items, index) => {
                    return (
                        <li> {items} promised "{detail.prst[index]}" on {detail.time[index]}</li>
                    );
                })}
                </ul>
            </div>
        </div>
    )

}

export default List;