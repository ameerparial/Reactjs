import { useState } from "react";

function ListItem({list}){
    const [totalBill, setTotalBill] = useState(0);
   
    
    const content = list.map((value, index)=>{
        return <li key={'item'+index}>{value['name']}
            <ul>
                <li key={'sub-item'+index}>{`Cost Rs. ${value['price']}`}</li>
            </ul>
            <label>Add item to cart: <input type="checkbox" id={index} onChange={(e)=>{
                const index = e.target.id;
                if(e.target.checked)
                    setTotalBill(totalBill+list[index].price);
                else
                    setTotalBill(totalBill-list[index].price);
                
                // e.target.checked?list[index].sold=true:list[index].sold=false;
            }}/></label>
        </li>
    });
    return (
        <>
            <ul>
                {content}
            </ul>
            <h4>Total Bill: {totalBill}</h4>
        </>
    );


}

export default ListItem;