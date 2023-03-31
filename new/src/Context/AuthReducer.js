const AuthReducer =(state,action)=>{
    switch(action.type){
        case "Login_Start":
            return{

                user:null,
                isFetching:true,
                error:false
            };

            case "Login_Success":
                return{
    
                    user:action.paylod,
                    isFetching:false,
                    error:false
                };    

                case "Login_Fail":
                    return{
        
                        user:null,
                        isFetching:false,
                        error:true
                    };      
                    
            default: return state
            
    }
};

export default AuthReducer