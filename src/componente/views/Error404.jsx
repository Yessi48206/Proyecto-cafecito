import React from 'react';
import error404 from './img/error-404.jpg'
const Error404 = () => {
    return (
        <div className='d-flex justify-content-center mt-3 mb-3'>
          <img src={error404} className='w-50'></img>
        </div>
    );
};

export default Error404;