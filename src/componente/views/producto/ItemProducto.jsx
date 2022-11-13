
import { Button } from 'react-bootstrap';
import {Link} from  'react-router-dom';
import { borrarProductoAPI, consultarAPI } from '../helpers/queries';
import Swal from "sweetalert2";

const ItemProducto = ({producto,setProducto}) => {

    const borrarProducto = ()=>{
    //Tarea agregar con SWAL UNA VENTANA QUE PREGUNTE AL USUARIO SI DESEA 
    //ELIMINAR EL PRODUCTO
    borrarProductoAPI(producto._id).then((respuesta)=>{
            if(respuesta.status === 200){
                Swal.fire('Producto eliminado','El producto fue correctamente eliminado','success');
                consultarAPI().then((respuesta)=>{
                    //actualizo el state de producto de administrador con los datos que hay en la api
                    setProducto(respuesta);

                })
            }else{
                Swal.fire(
                    'Ocurrio un error',
                    'Intente esta operacion en unos minitos',
                    'error');
            }
        })
    }
    return (
        <>
     
        
        <tr>
            <td>{producto._id}</td>
            <td>{producto.nombreProducto}</td>
            <td>{producto.precio}</td>
            <td>{producto.imagen}</td>
            <td>{producto.categoria}</td>
            <td className='text-center'>
                <Link className='btn btn-outline-warning me-1'  to={`/administrar/editar/${producto._id} `}>
                   Editar
                </Link>
                <Button variant='outline-danger me-1 mt-1' onClick={borrarProducto}>
                    Borrar
                </Button>
            </td>
        </tr>
        </>
    );
};

export default ItemProducto;