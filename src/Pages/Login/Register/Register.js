import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        // loading,
        // error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateToLogin = () => {

        navigate('/login');
    };
    if (user) {
        // navigate('/');
        console.log(user);
    }
    const handleRegister = async(event) => {
        event.preventDefault();
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);
        const name=event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // if (agree) {
        //     createUserWithEmailAndPassword(email, password);
        // }
       
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName:name});
        // alert('Updated profile');
        console.log('Updated profile');
        navigate('/');

    };

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder='Your Name' required />
                <input type="email" name="email" placeholder='Your Email' id="" required />
                <input type="password" name="password" placeholder='Password' id="" required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'text-primary' : 'text-danger'} style={{ marginLeft: '10px' }} htmlFor="terms">Accept Terms and Conditions</label>
                <input
                    disabled={!agree}
                    style={{ borderRadius: '20px', text: 'center' }} className='btn btn-primary w-50 d-block mx-auto mt-2' type="submit" value="Register" />
            </form>
            <p>Already Have an Account into Car Care Point? <Link to="/login" className='text-primary text-decoration-none text-monospace' onClick={navigateToLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;