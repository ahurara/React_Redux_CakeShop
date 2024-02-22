import React from "react";
import  actions  from "../redux/index";
import { connect } from "react-redux";

function CakeContainer(props){
    return(
        <div>
            <h2>
                Numbers of Cake {props.noOfCakes}
            </h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        noOfCakes : state.cake.noOfCakes
}
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake : ()=>{dispatch(actions.buyCake())}
    }
}

export default connect( mapStateToProps, mapDispatchToProps) (CakeContainer);