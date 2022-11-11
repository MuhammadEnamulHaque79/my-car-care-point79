import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import {
    useSignInWithFacebook,
    useSignInWithGithub,
    useSignInWithGoogle
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);

    const navigate = useNavigate();
    let errorElement;
    if (loading || loading1 || loading2) {
        return <Loading></Loading>
    }
    if (error || error1 || error2) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message} {error2?.message}</p>
        </div>
    };

    if (user || user1 || user2) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 mx-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <div className='mt-3'>
                <button
                    onClick={() => signInWithGoogle()}
                    style={{ borderRadius: '20px', text: 'center' }} className='btn btn-info w-50 mx-auto d-block mt-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>CONTINUE WITH GOOGLE</span>
                </button>

                <button
                    onClick={()=>signInWithFacebook()}
                    style={{ borderRadius: '20px', text: 'center' }} className='btn btn-secondary w-50 mx-auto d-block mt-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>CONTINUE WITH FACEBOOK</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    style={{ borderRadius: '20px', text: 'center' }} className='btn btn-success w-50 mx-auto d-block mt-2'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>CONTINUE WITH GITHUB</span>
                </button>

            </div>

        </div>
    );
};

export default SocialLogin;
