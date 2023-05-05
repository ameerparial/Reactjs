
function ListItem({list}){
    let totalBill = 0;
    
    const content = list.map((value, index)=>{
        return <li key={'item'+index}>{value['name']}
            <ul>
                <li key={'sub-item'+index}>{`Cost Rs. ${value['price']}`}</li>
            </ul>
            <label>Add item to cart: <input type="checkbox" id={index} onChange={(e)=>{
                const index = e.target.id;
                if(e.target.checked)
                    totalBill +=list[index].price;
                else
                    totalBill -=list[index].price;
                
                // e.target.checked?list[index].sold=true:list[index].sold=false;
            }}/></label>
        </li>
    });
    return (
        <>
            <ul>
                {content}
            </ul>
            <button onClick={()=>{
                console.log({totalBill});
                

            }}>Calculate Bill</button>
        </>
    );


}

export default ListItem;