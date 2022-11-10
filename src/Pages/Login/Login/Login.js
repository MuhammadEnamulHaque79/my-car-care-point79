import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

const Login = () => {
    
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate=useNavigate();
    const location=useLocation();
    const from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        // loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    
      if(user){
        // navigate('/');
        navigate(from, { replace: true });
      };

      if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
        
    };
    

    const handleSubmit=(event)=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        // console.log(email,password);
        signInWithEmailAndPassword(email, password);
    };
    const navigateToRegister=(event)=>{
        navigate('/register');
    };

 const ResetPassword=async()=>{
    const email=emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');
 }
    
    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-primary text-center mt-2'>Please Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button style={{ borderRadius: '20px', text: 'center' }} variant="primary w-50 mx-auto d-block mb-3" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to Car Care Point? <Link to="/register" className='text-primary text-decoration-none text-monospace' onClick={navigateToRegister}>Please Register</Link></p>
            <p>Forget Password? <Link to="/register" className='text-primary text-decoration-none text-monospace' onClick={ResetPassword}>ResetPassword</Link></p>
            
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;