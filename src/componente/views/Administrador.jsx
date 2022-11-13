import React, { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import {Link} from  'react-router-dom'
import ItemProducto from './producto/ItemProducto';
import {useEffect} from "react";
import {consultarAPI} from "../views/helpers/queries.js"
const Administrador = () => {
    const [producto, setProducto] = useState([]);
    useEffect(()=>{
        consultarAPI().then((respuesta)=>{
            //console.log(respuesta);
            setProducto(respuesta);

        })
    },[])
    return (
        
        <Container className="mainSection">
       
            <article className='d-flex justify-content-between align-items-center'>
                <h1 className='primary mt-3'>
                    Producto disponible
                </h1>
                <Link className='h-100 btn btn-primary' to='/administrar/crear'> Agregar</Link>
            <hr/>
            </article>
        <Table responsive striped bordered hover size="sm" >
        <thead>
            <tr>
                <th>cod</th>
                <th>Producto</th>
                <th>precio</th>
                <th>URL de imagen</th>
                <th>Categoria</th>
                
            </tr>
        </thead>
            <tbody>
                {
                    producto.map((producto)=><ItemProducto key={producto._id} producto={producto} setProducto={setProducto} />)
                }
                
            </tbody>
        </Table>
        </Container>
        
    );
};

export default Administrador;