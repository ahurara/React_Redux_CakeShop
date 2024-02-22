import { BUY_ICE_CREAM , RETURN_ICE_CREAM} from "./iceCreamType"


function buyIceCream(){
    return {
        type : BUY_ICE_CREAM
    }
}

function returnIceCream(){
    return {
        type : RETURN_ICE_CREAM
    }
}

const iceCreamAtions ={buyIceCream , returnIceCream};

export default iceCreamAtions;