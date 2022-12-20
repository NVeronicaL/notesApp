import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FormRegister from './components/user/FormRegister';
import FormLogin from './components/user/FormLogin';
import FormNota from './components/nota/FormNota';
import ListNota from './components/nota/ListNota';
import Nota from './components/nota/Nota';
import Menu from './components/navbar/Navbar';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' element={<App></App>}></Route>
        <Route exact path='/home' element={<Home></Home>}></Route>
        <Route path='/register' element={<FormRegister></FormRegister>}></Route>
        <Route path='/login' element={<FormLogin></FormLogin>}></Route>
        <Route path='/notas' element={<ListNota></ListNota>}></Route>
        <Route path='/nota/:id' element={<Nota></Nota>}></Route>
        <Route path='/create-nota' element={<FormNota></FormNota>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
