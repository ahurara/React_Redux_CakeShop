import React from "react";
import  actions  from "../redux/index";
import { connect } from "react-redux";

function IceCreamContainer(props){
    return(
        <div>
            <h2>
                Numbers of Ice Cream {props.noOfIceCream}
            </h2>
            <button onClick={props.buyIceCream}>Buy Ice Cream</button>
            <button onClick={props.returnIceCream}>Return Ice Cream</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        noOfIceCream : state.iceCream.noOfIceCream
}
}

const mapDispatchToProps = dispatch =>{
    return{
        buyIceCream : ()=>{dispatch(actions.iceCreamAtions.buyIceCream())},
        returnIceCream : ()=>{dispatch(actions.iceCreamAtions.returnIceCream())}

    }
}

export default connect( mapStateToProps, mapDispatchToProps) (IceCreamContainer);