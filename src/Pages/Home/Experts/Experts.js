import React from 'react';
import expert1 from '../../../images/Experts/expert1.png';
import expert2 from '../../../images/Experts/expert2.png';
import expert3 from '../../../images/Experts/expert3.png';
import expert4 from '../../../images/Experts/expert4.png';
import expert5 from '../../../images/Experts/expert5.png';
import expert6 from '../../../images/Experts/expert6.png';
import Expert from '../Expert/Expert';

const experts=[
    {id:1,name:'Willium Smith',img:expert1},
    {id:2,name:'Willium Cladwell',img:expert2},
    {id:3,name:'Willium Henery',img:expert3},
    {id:4,name:'Willium Marin',img:expert4},
    {id:5,name:'Willium Sindy',img:expert5},
    {id:6,name:'Willium Rock',img:expert6},
];
const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-success text-center mt-3'>Our Experts</h2>
            <div className="row">
                {
                  experts.map(expert =><Expert
                    key={expert.id}
                    expert={expert}
                  ></Expert>)  
                }
            </div>
        </div>
    );
};

export default Experts;