import React from "react";
import { connect } from "react-redux";
import actions from "../redux";

function ItemContainer(props){
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}> Buy Items </button>
        </div>
    )
}

const mapstateToProps = (state ,  ownProps)=>{
    const itemState = ownProps.cake 
    ? state.cake.noOfCakes
    : state.iceCream.noOfIceCream

    return{
        item : itemState
    }
}

const mapDispatchToProps = (dispatch , ownProps) =>{
    const dispatchFunction = ownProps.cake
    ? ()=>dispatch(actions.buyCake())
    : ()=>dispatch(actions.iceCreamAtions.buyIceCream())

    return {
        buyItem : dispatchFunction
    }
}

export default connect(mapstateToProps , mapDispatchToProps)(ItemContainer) ;