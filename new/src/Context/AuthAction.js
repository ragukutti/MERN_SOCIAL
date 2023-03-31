export const LoginStart = (userCredentials) =>({
    type:'Login_Start'
});

export const LoginSuccess = (user) =>({
    type:'Login_Success',
    paylod:user
});

export const LoginFail= (error) =>({
    type:'Login_Fail',
    paylod:error
});