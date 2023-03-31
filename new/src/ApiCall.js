import axios from 'axios'

export const Login_call = async (userCredentials,dispatch)=>{
   dispatch({type:"Login_Start"})
   try{
      const res =  await axios.post('http://localhost:5001/auth/login',{userCredentials})
      dispatch({type:"Login_Success",payload:res.data});
      console.log(res);
   }catch(err){
      dispatch({type:"Login_Fail",payload:err})
   }
};