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
export const crearProductoAPI= async(producto)=>{
    //peticion post para crear producto
try {
    
    const respuesta= await fetch(URL,{
        //aqui va un objeto
        method:"POST",
        headers:{
            //objeto en formato json
            "Content-Type":"application/json"
        },
        body: JSON.stringify(producto) 
    });
    
    return respuesta;
} catch (error) {
    console.log(error);
    return false;
}
}

export const borrarProductoAPI= async(id)=>{
    
    //peticion delete para crear producto
try {
    
    const respuesta= await fetch(URL+'/'+ id , {
        //aqui va un objeto
        method:"DELETE"  
    });
    
    return respuesta;
} catch (error) {
    console.log(error);
    return false;
}
}
export const obtenerProductoAPI= async(id)=>{
    //peticion get para obtener todos los productos
try {
    //console.log(URL);
    const respuesta= await fetch(URL+'/'+id);
    const producto={
        dato:await respuesta.json(),
        status: respuesta.status
    }
    return producto;
} catch (error) {
    console.log(error);
    return false;
}
}
export const obtenerUnProductoAPI= async(id)=>{
    
try {
    //console.log(URL);
    const respuesta= await fetch(URL+'/'+ id);
    const producto = {
        dato: await respuesta.json(),
        status: respuesta.status
    }
    return producto;
} catch (error) {
    console.log(error);
    return false;
}
}