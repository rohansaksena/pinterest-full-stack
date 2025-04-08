import { useState } from 'react'
import Image from '../../components/Image/Image'
import './AuthPage.css'

function AuthPage() {

  const[isRegister, setRegister] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className='authPage'>
      <div className='authContainer'>
        <Image path="/general/logo.png" alt="" w={36} h={36}/>
        <h1>{isRegister ? "Create an Account" : "Login to your account"}</h1>
        {isRegister ? (
          <form key="register">
            <div className="formGroup">
            <label htmlFor="">Username</label>
            <input type="username" placeholder="Username" required name="username" id="username"/>
          </div>
          <div className="formGroup">
            <label htmlFor="">Name</label>
            <input type="displayname" placeholder="Name" required name="displayname" id="displayname"/>
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" required name="email" id="email"/>
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" required name="password" id="password"/>
          </div>
          <button type="submit">Register</button>
          <p onClick={() => setRegister(false)}>
            Do you have an account? <b>Login</b>
            </p>
            {error && <p className='error'>{error}</p>}
        </form>
        ) 
        : 
        (
          <form key="login">
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" required name="email" id="email"/>
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" required name="password" id="password"/>
          </div>
          <button type="submit">Login</button>
          <p onClick={() => setRegister(true)}>
            Don't have an account? <b>Register</b>
            </p>
            {error && <p className='error'>{error}</p>}
        </form>
        )}
      </div>
    </div>
  )
}

export default AuthPage