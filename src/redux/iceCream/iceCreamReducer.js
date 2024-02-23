import { BUY_ICE_CREAM , RETURN_ICE_CREAM } from "./iceCreamType"

const initialState={
    noOfIceCream :20
} 

const IceCreamReducer=(state =initialState , action )=>{
    switch(action.type){
        case BUY_ICE_CREAM :
            return {
                ...state,
                noOfIceCream : state.noOfIceCream - action.payload
            }

            case RETURN_ICE_CREAM:
                // Check if the number of ice creams is less than the limit of 20 before incrementing
                if (state.noOfIceCream < 20) {
                    return {
                        ...state,
                        noOfIceCream: state.noOfIceCream + 1
                    }
                }
                // If the limit is reached, return the current state without incrementing
                return state;
           

            default : 
            return {
                ...state
            }
    }

}


export default IceCreamReducer;