import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import { login } from '../redux/actions/authActions';
import { useDispatch } from 'react-redux';

import '../styles/Login.css';
import { Alert } from '../components';

const Login = () => {
  const initialState = {email: '', password: ''};
  const [showPass, setShowPass] = useState(false);
  const [userData, setUserData] = useState(initialState);
  const {email, password} = userData;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData))
  }

  return (
    <section>
      <div className='form-container'>
        <h1>Login Form</h1>
        <Alert />
        <form onSubmit={handleSubmit}>
          <div className='control'>
            <input type="email" name="email" placeholder='Email' value={email} onChange={handleChange} />
          </div>
          <div className='control'>
            <small className='eye-icon' onClick={() => setShowPass(!showPass)}>{showPass ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}</small>
            <input type={showPass ? "type" : "password"} name="password" placeholder='Password' value={password} onChange={handleChange} />
          </div>
          <span>
            <div className='control'>
              <button type="submit">Login</button>
            </div>
            </span>
        </form>
        <div className='link'>
          <small>Dont have an Account? <Link to="/register">Click here</Link></small>
        </div>
      </div>
    </section>
  )
}

export default Login