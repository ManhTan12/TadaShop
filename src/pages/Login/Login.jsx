// import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./Login.scss";
import {message} from "antd";
import { Link,useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isLoading, error} = useSelector((state => state.user))
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!username || !password){
      message.error('Vui lòng nhập đủ thông tin !');
      return
  }
    login(dispatch,{username,password});
    
    message.success('Đăng nhập thành công!')
  }

  return (
    
    <div className='login'>
      <div className="wrapper">
        <h1 className="title">SING IN</h1>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          <button  type="submit" disabled={isLoading}>LOGIN</button>
          {error && <div className="err">Đăng nhập thất bại!</div>}
        </form>
        
        <span className="agreement">
          Bạn chưa có tài khoản?

          <Link to='/register'>
            Đăng Ký
          </Link>
        </span>
        
        
      </div>
    </div>
  )
}

export default Login