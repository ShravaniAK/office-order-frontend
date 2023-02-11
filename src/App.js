// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter , Routes, 
  Route, } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
         
          <Route exact path="/" element={<Register/>} />
          <Route exact path="/Register" element={<Register/>} />
          <Route exact path="/Login" element={<Login/>} />
         
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
