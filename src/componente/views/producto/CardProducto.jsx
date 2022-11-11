import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardProducto = ({producto}) => {
   const {id,nombreProducto, precio, imagen} = {...producto}
   console.log(producto);
    return (
        <>
            <Col className="my-3">
                <Card className="anchoCardProducto">
                    <Card.Img
                        className="card"
                        variant="top"
                        src={imagen}
                    />
                    <Card.Body>
                        <Card.Title>{nombreProducto}</Card.Title>
                        <Card.Text>Precio: ${precio}</Card.Text>
                        <hr />
                        <Link className="btn btn-danger" to={`/administrar/detalle/${id}`}>Ver mas</Link>
                        
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default CardProducto;