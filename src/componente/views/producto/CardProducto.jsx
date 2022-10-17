import {Col, Button, Card} from 'react-bootstrap';

export const CardProducto = () => {
    return (
        <>
        <Col className='my-3'>
            <Card className='anchoCardProducto'>
            <Card.Img variant="top" src="imagen"/>
            <Card.Body>
                <Card.Title>Brawnie</Card.Title>
                <Card.text>Precio: $400</Card.text>
                <hr/>
                <Button variant="danger">Ver mas</Button>
            </Card.Body>
            </Card>
        </Col>
        </>
    );
};

export default CardProducto;