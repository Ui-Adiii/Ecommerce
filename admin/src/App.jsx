import React, { useEffect, useState } from "react";
import Orders from "./pages/Orders";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Login from "./components/Login";
import { ToastContainer} from 'react-toastify';


export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '$'

const App = () => {
  const [token, settoken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');
  
  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token])
  

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer/>
      {
        token === '' ? <Login settoken={settoken} /> :
        <>
        <NavBar settoken={settoken} />
        <hr />
        <div className="flex w-full">
          <SideBar />
          <div className="w-[70%] ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
           
            <Routes>
              <Route path="/add" element={<Add token={token}/>} />
              <Route path="/list" element={<List token={token}/>} />
              <Route path="/orders" element={<Orders token={token}/>} />
            </Routes>

          </div>
        </div>
      </>
      }
    </div>
  );
};

export default App;
