import React from 'react';
import './NotFound.css';
import lazyMechanic from '../../../images/404/lazyMechanic.png';

const NotFound = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center'>Mechanic is sleeping!!</h2>
            <img style={{display:'block',
            marginLeft:'auto',
            marginRight:'auto',
            // width:'75%',
            // border: '3px solid #73AD21',
            // padding: '10px',
            // borderRadius:'15px'
        }} src={lazyMechanic} alt="" />
        </div>
    );
};

export default NotFound;