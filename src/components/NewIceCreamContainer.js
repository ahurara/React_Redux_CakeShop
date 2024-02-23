import React, { useState } from "react";
import  actions  from "../redux/index";
import { connect } from "react-redux";

function NewIceCreamContainer(props){
    const [number , setNumber]= useState(1);

    // Define a function to handle the button click
    const handleBuyIceCream = () => {
        // Call the buyIceCream action creator with the current number value
        props.buyIceCream(number);
    };

    return(
        <div>
            <h2>
                Numbers of Ice Cream {props.noOfIceCream}
            </h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            {/* Use an arrow function or a function reference to call handleBuyIceCream */}
            <button onClick={handleBuyIceCream}>Buy {number} Ice Cream</button>
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
        buyIceCream : (number)=>{dispatch(actions.iceCreamAtions.buyIceCream(number))},       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewIceCreamContainer);
