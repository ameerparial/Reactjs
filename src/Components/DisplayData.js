import React from "react";
import next from '../Images/ameerhamza.jpeg';

class DisplayData extends React.Component{
    
    constructor(props){
        super(props);
        this.state = props.user;
        console.log(this.state);
    }

    changeImage = ()=>{
        //First way
        // this.setState({...this.state, image:next});
        //Second way
        this.setState((data)=>data.image=next);
    }
    render(){
        return <>
        
        <p>{this.state.name}</p>
        <img src={this.state.image} style={{borderRadius:"100%", width:"60px", height:"60px", display:"block"}} alt="Not Found"/>
        <button onClick={this.changeImage}>Change Image</button>
        </>

    }

}

export default DisplayData;