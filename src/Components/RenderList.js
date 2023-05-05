
function ListItem({list}){
    const content = list.map((value)=><li>{value}</li>);
    return (
        <ul>
            {content}
        </ul>
    );


}

export default ListItem;