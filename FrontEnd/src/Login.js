// import React from 'react';
// import { useRef, useState, useEffect, useContext } from 'react';
// // import AuthContext from "../../BackEnd/context/Auth";
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// // const LOGIN_URL = '/auth';

// const Login = () => {
//     const { setAuth } = useContext(AuthContext);
//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [pwd, setPwd] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd])

// const SERVER_URL = 'http://localhost:5000/'; // replace with your server's URL

// const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await axios.post(`${SERVER_URL}/login`,
//         JSON.stringify({ user, pwd }),
//         {
//           headers: { 'Content-Type': 'application/json' },
//           withCredentials: true
//         }
//       );
//       console.log(JSON.stringify(response?.data));
//       const accessToken = response?.data?.accessToken;
//       const roles = response?.data?.roles;
//       setAuth({ user, pwd, roles, accessToken });
//       setUser('');
//       setPwd('');
//       setSuccess(true);
//     } catch (err) {
//       if (!err?.response) {
//         setErrMsg('No Server Response');
//       } else if (err.response?.status === 400) {
//         setErrMsg('Missing Username or Password');
//       } else if (err.response?.status === 401) {
//         setErrMsg('Unauthorized');
//       } else {
//         setErrMsg('Login Failed');
//       }
//       errRef.current.focus();
//     }
//   }

//     return (
//         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
//         <>
//             {success ? (
//                 <section>
//                     <h1>You are logged in!</h1>
//                     <br />
//                     <p>
//                         <Link to="/">Go to Home</Link>
//                     </p>
//                 </section>
//             ) : (
//                 <section>
//                     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//                     <h1>Sign In</h1>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="username">Username:</label>
//                         <input
//                             type="text"
//                             id="username"
//                             ref={userRef}
//                             autoComplete="off"
//                             onChange={(e) => setUser(e.target.value)}
//                             value={user}
//                             required
//                         />

//                         <label htmlFor="password">Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             onChange={(e) => setPwd(e.target.value)}
//                             value={pwd}
//                             required
//                         />
//                         <button>Sign In</button>
//                     </form>
//                     <p>
//                         Need an Account?<br />
//                         <span className="line">
//                        {<Link to="/register">Sign Up</Link>}
//                             {/* <a href={<Register/>}>Sign Up</a> */}
//                         </span>
//                     </p>
//                 </section>
//             )}
//         </>
//         </div>
//     )
// }
// export default Login
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    // const regi = navigate('/register')
    axios.get('http://localhost:5000')
    .then(res=>{
      if(res.data.valid){
        navigate('/');
      }else{
        navigate('/login')
      }
    })
    .catch(err=>{
      console.log(err)
    })
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      if (response.data.message === 'Login successful') {
        navigate('/')
        console.log('Login successful:', response.data.user);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
      setMessage('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          username:
          <input
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
        <a href='/register'>Create an account</a>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
