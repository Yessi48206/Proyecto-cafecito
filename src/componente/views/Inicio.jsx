import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { consultarAPI } from "../views/helpers/queries";
import { useState, useEffect} from "react";


const Inicio = () => {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
       consultarAPI().then((respuesta)=>{
        // console.log(respuesta)
        setProductos(respuesta);
       })
       
    },[])

  return (
    <Container className="mainSection">
      <h1 className="display-3 text-center "> <spam> Bienvenidos</spam></h1>
      <hr />
      <Row xs={1} md={4}>
        {/* aqui van las columnas */}
        {
            productos.map((producto)=> <CardProducto key={producto._id} producto={producto} setProductos={setProductos}></CardProducto>)            
        }
      </Row>
    </Container>
  );
};

export default Inicio;
