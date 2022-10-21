
const AuthReducer = (state,action)=>{
    switch(action.type){
        case "DETAILS" : {
            return {
                userDataDetails:action.payload
            };
        }
        case "NO_DETAILS" : {
            return {
                userDataDetails : null
            }
        }
        default :
        return state;
    }
}

export default AuthReducer;