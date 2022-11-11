import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex w-100 justify-content-center align-items-center mt-3'>
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />{" "}
            <Spinner animation="grow" variant="info" />
        </div>
    );
};

export default Loading;