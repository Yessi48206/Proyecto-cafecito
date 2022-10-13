import { Card,Badge } from "react-bootstrap";

const DetalleProducto = () => {
    return (
       <>
       <Card className="container border rounded my-3 flex-row">
        <Card.Img className="anchoFotoProducto" variant="start"
        src="imagen" />
        <Card.Body>
            <div className="anchoDetalleProducto">
            <Card.Title>Brownie</Card.Title>
            <hr />
            <Badge bg="success">Success</Badge>
            <Card.Text className="mt-3 fw-bold">Precio: $30</Card.Text>
            </div>
        </Card.Body>
       </Card>
       </>
    );
};

export default DetalleProducto;