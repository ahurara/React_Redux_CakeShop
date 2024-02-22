import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/index";

function HookCakeContainer(){

     const noOfCakes = useSelector(state => state.cake.noOfCakes)
     const dispatch = useDispatch();
    return(
        <div>
            <h2>
                Numbers of Cake usig the use Selector and usedispatch hook :{noOfCakes}
            </h2>
            <button onClick={()=>{dispatch(actions.buyCake())}}>Buy Cake</button>
            
        </div>
    )
}
export default  HookCakeContainer
