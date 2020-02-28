import React, {useState} from "react";
import axios from "axios"


const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [login, setLogin] = useState(
    {
      username: '',
      password: ''
    }
  );
 

  const handleChanges = e => {
    setLogin({
      ...login,
      [e.target.name] : e.target.value
    });
    console.log(login);
  };

const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', login)
      .then(res => {
        console.log('this is response from login post',res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubble-page');
      })
      .catch(error =>{
        console.log("this is error from login post", error)
      })
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="username here" value={login.username} onChange={handleChanges}/>
      <input type="password" name="password" placeholder="username here" value={login.password} onChange={handleChanges}/>
      <button> Login </button>
      </form>
    </>
  );


};

export default Login;
