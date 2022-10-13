import {Form,Button} from "react-bootstrap";



const CrearProducto = () => {
    return (
        <div>
            <section className="container my-3">
            <h3 className="display-4">Nuevo Producto</h3>
            <hr/>
            </section>
            <section className="container my-3">
            <Form>
      <Form.Group className="mb-3" controlId="formNombreProducto">
        <Form.Label>Nombre Producto</Form.Label>
        <Form.Control type="text" placeholder="Ej: cafe" />
        <Form.Text className="text-danger">
          algun error
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" required placeholder="Ej: 250" />
        <Form.Text className="text-danger">
          algun error
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPrecio">
        <Form.Label>Imagen URL</Form.Label>
        <Form.Control type="number" required placeholder="Ej: " />
        <Form.Text className="text-danger">
          algun error
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Categoria</Form.Label>
        <Form.Select disabled>
          <option>dulce</option>
          <option>caliente</option>
          <option>frio</option>
        </Form.Select>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
            </section>
        </div>
    );
};

export default CrearProducto;