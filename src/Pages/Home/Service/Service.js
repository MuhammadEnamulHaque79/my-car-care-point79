import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';


const Service = (props) => {
    const{id, img,name,price,description}=props.service;
    const navigate=useNavigate();

    const navigateToServiceDetail=(id)=>{
            navigate(`/service/${id}`);
    };
    return (
        <div id='services' className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
           <h3> $ {price}</h3>
           <p><small>{description}</small></p>
           <button onClick={()=>navigateToServiceDetail(id)} className='btn btn-primary'>Book : {name}</button>
        </div>
    );
};

export default Service;