import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    console.log('inside require auth', user);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <div className="container">
            <h3 className='text-danger text-center'>Your email is not verified!!</h3>
            <h5 className='text-success text-center'>Please verify your email</h5>
            <button
            className='btn btn-primary  justify-content-center'
                onClick={async () => {
                    const success = await sendEmailVerification();
                    if (success) {
                        toast('Sent email');
                    }
                }}
            >
                Verify email
            </button>
            <ToastContainer />
        </div>
    }
    return children;
};

export default RequireAuth;