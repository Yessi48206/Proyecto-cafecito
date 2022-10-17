const URL = process.env.REACT_APP_API_CAFECITO;
//peticion GET para obtener todos los producto
//peticion POST crear un nuevo producto, en los login tambien lo puedo usar
//peticion PUT sirve para modificar un producto
//peticion DELETE sirve para borrar un producto


export const consultarAPI= async()=>{
    //peticion get para obtener todos los productos
try {
    //console.log(URL);
    const respuesta= await fetch(URL);
    const listaProducto = await respuesta.json();
    console.log(listaProducto);
    return listaProducto;
} catch (error) {
    console.log(error);
    return false;
}
}