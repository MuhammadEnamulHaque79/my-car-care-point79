import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const [
            createUserWithEmailAndPassword,
            user,
            // loading,
            // error,
          ] = useCreateUserWithEmailAndPassword(auth);
        const navigate=useNavigate();

    const navigateToLogin=()=>{
        
        navigate('/login');
    };
    if(user){
        navigate('/');
    }
    const handleRegister=(event)=>{
        event.preventDefault();
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);
        // const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        createUserWithEmailAndPassword(email,password);

    };

    return (
        <div className='register-form'>
            <h2 style={{textAlign:'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder='Your Name' required />
                <input type="email" name="email" placeholder='Your Email' id="" required/>
                <input type="password" name="password" placeholder='Password' id="" required/>
                <input style={{ borderRadius: '20px', text: 'center' }} className='btn btn-primary w-50 d-block mx-auto' type="submit" value="Register" />
            </form>
            <p>Already Have an Account into Car Care Point? <Link to="/login" className='text-danger text-decoration-none text-monospace' onClick={navigateToLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;