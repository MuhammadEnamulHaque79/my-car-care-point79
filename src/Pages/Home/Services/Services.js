import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            // .then(data=>console.log(data));
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            <h1 class='services-title mt-3 text-primary'> Our Services</h1>
            <div class="services-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;