import { BUY_ICE_CREAM , RETURN_ICE_CREAM} from "./iceCreamType"

//by default it will minus the 1 fron ice cream if no value is given    
function buyIceCream(number = 1){
    return {
        type : BUY_ICE_CREAM,
        payload: number
    }
}

function returnIceCream(){
    return {
        type : RETURN_ICE_CREAM
    }
}

const iceCreamAtions ={buyIceCream , returnIceCream};

export default iceCreamAtions;