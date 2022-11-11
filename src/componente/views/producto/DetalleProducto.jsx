import { useState, useEffect } from "react";
import { Card, Badge, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProductoAPI } from "../helpers/queries";


const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        obtenerProductoAPI(id).then((respuesta) => {
          if (respuesta.status === 200) {
            console.log(respuesta);
            //cargar los datos 
            setProducto(respuesta)
          }
        });
      }, []);

    return (
        <>
        <Container className="mainSection w-100">

            <Card className="container border rounded my-3 mt-5 flex-row ">
                    <Card.Img
                        variant="start"
                        className="w-50"
                        src={producto.dato?.imagen}

                    />
                    <Card.Body>
                        <div >
                            <Card.Title className="display-6">{producto.dato?.nombreProducto}</Card.Title>
                            <hr />
                            <Badge bg="success" className="mt-3">{producto.dato?.categoria}</Badge>
                            <Card.Text className="mt-3 fw-bold">Precio: ${producto.dato?.precio}</Card.Text>
                        </div>
                    </Card.Body>
            </Card>
        </Container>
        </>
    );
};

export default DetalleProducto;