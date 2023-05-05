import React from "react";

class DisplayData extends React.Component{
    constructor(props){
        super(props);
        this.state = props.user;
        console.log(this.state);
    }
    render(){
        return <>
        
        <p>{this.state.name}</p>
        <img className="profile" src={this.state.image} style={{borderRadius:"100%", width:"60px", height:"60px"}} alt="Not Found"/>
        </>

    }

}

export default DisplayData;