function MyButton(props){
    return <>
        <h1>{props.count}</h1>
        <button onClick={props.increaseCount}>count</button>
        <button onClick={props.decreaseCount}>decrease</button>
        <button onClick={props.resetCount}>reset</button>        
    </>
}
export default MyButton;