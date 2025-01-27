import { useEffect } from 'react'
import {ToastContainer} from "react-toastify"
import Nav from './component/Navbar/Nav'
import { Foot } from './component/Footer/Foot'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from './component/TodoList/TodoList';
import { getWeatherDetails } from './action/weatherAction';
import UserLogin from './component/LoginSignup/Login';
import UserSignup from './component/LoginSignup/Signup';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherDetails());
  }, [dispatch]);
  
  return (
    <>
      <ToastContainer 
        position="top-center"  
        autoClose={3000}  // Toast will disappear after 4 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
          <Nav/>
          <Routes>
            <Route path="/todoList" element={<TodoList />}/>
            <Route path='/' element={<UserLogin />} />
            <Route path='/signup' element={<UserSignup />} />
          </Routes>
          <Foot />
      </Router>
    </>
  );
}

export default App
