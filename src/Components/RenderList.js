
function ListItem({list}){
    const content = list.map((value)=>{
        return <li>{value[0]}
            <ul>
                <li>{`Cost Rs. ${value[1]}`}</li>
            </ul>
        </li>
    });
    return (
        <ul>
            {content}
        </ul>
    );


}

export default ListItem;