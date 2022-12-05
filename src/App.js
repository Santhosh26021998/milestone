import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, link, Route, Routes} from 'react-router-dom';
import Login from './components/login';
import Reg from './components/reg';
import Dash from './components/dash';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} ></Route>
      <Route path='/Reg' element={<Reg/>} ></Route>
      <Route path='/Dash' element={<Dash/>} ></Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
