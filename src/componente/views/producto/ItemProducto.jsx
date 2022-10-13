import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from  'react-router-dom'
const ItemProducto = ({producto}) => {
    return (
        <>
     
        
        <tr>
            <td>{producto.id}</td>
            <td>{producto.nombreProducto}</td>
            <td>{producto.precio}</td>
            <td>{producto.imagen}</td>
            <td>{producto.categoria}</td>
            <td className='text-center'>
                <Link className='btn btn-outline-warning me-2'  to='/administar/editar/:id'>
                    <i className='bi bi-arrow-clockwise text-warning'></i>

                </Link>
                <Button variant='outline-danger'>
                    <i className='bi bi-x-lg text-dark'></i>
                </Button>
            </td>
        </tr>
        </>
    );
};

export default ItemProducto;