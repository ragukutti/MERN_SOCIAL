import './App.css';
import { BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Login from './Pages/Login';
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import Userpage from './Pages/Userpage';

function App() {

  const {user} = useContext(AuthContext);  

  return (
  <div className=' h-screen w-ful  '  >
    <BrowserRouter>
     <Routes>
      <Route path='/' element={ user ?<Home/>  : <Navigate replace='true' to='/login'/> } />
      <Route path='/login' element={user ? <Navigate replace='true' to='/'/> : <Login/>}/>
      <Route path='/sign' element={<SignIn/>}/>
      <Route path='/profile/:id' element={<Userpage/>}/>
    </Routes> 
   </BrowserRouter>
  </div>
  );
}

export default App;
