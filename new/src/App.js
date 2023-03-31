import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login/Login';
import SignIn from './Pages/SignUp/SignIn';

function App() {
  return (
    <div className="app">
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/sign' element={<SignIn/>}/>
      <Route path='/home' element={<Home/>}/>
     </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
