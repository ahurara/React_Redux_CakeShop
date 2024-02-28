import {FETCH_USER_REQUEST ,FETCH_USER_FAILURE, FETCH_USER_SUCCES} from "./userType";
import axios from "axios";

const fetchUserRequest = ()=>{
    return{
        type : FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = users =>{
    return {
        type : FETCH_USER_SUCCES,
        payload : users
    }
}

const fetchUserFailure = error =>{
    return {
        type : FETCH_USER_FAILURE,
        payload : error
    }
}

// async action creator 

 const fetchUsers = () =>{
    return (dispatch)=>{   
        dispatch(fetchUserRequest()); 
       setTimeout(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users   ")
        .then(response=>{
            const users  = response.data;
            dispatch(fetchUserSuccess(users));
            //console.log(users[2].name);
        })
        .catch(error=>{
            const err = error.message;
            dispatch(fetchUserFailure(err))
            console.log(err)
        })
       },2000)

    }
}


const userActions = {fetchUserSuccess , fetchUserFailure , fetchUserRequest , fetchUsers};

export default userActions;