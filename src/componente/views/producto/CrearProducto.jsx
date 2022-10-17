import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProductoAPI } from "../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  //inicializar
  const navegacion= useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    //enviar a la peticion appi

    crearProductoAPI( data).then((respuesta) => {
        if (respuesta.status === 201) {
          Swal.fire(
            "Producto creado",
            "El producto fue creado correctamente cargado",
            "success"
          );
          //aqui quiero resetear los value del formulario
            reset();
            //aqui rediccionamos al ususario 
            navegacion('/administrar');
        } else {
          Swal.fire(
            "Ocurrio un error",
            "Intente esta operacion en unos minitos",
            "error"
          );
        }
      })
  };
  return (
    <Container className="mainSection">
      <h3 className="display-4 text-center">Nuevo Producto</h3>
      <hr />
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label>Nombre Producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: cafe"
            {...register("nombreProducto", {
              required: "El nombre del producto es un dato obligatorio",
              minLength: {
                value: 2,
                message: "la cantidad minima de caracteres debe ser 2",
              },
              maxLength: {
                value: 20,
                message: "la cantidad maxima de caracteres debe ser 20",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            required
            placeholder="Ej: 250"
            {...register("precio", {
              required: "El precio es un valor obligatorio",
              min: {
                value: 50,
                message: "El precio minimo debe ser de $50",
              },
              max: {
                value: 10000,
                message: "El precio maximo debe ser de $10.000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Imagen URL</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Ej: "
            {...register("imagen", {
              required: "La URL de la imagen es obligatorio",
              pattern: {
                value:
                  /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
                message: "debe ingresar una URL valida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Select
            aria-label="Default select example"
            {...register("categoria", {
              required: "Debe seleccionar una categoria",
            })}
          >
            <option value="">Seleccione una opcion ..</option>
            <option value="Dulce">Dulce</option>
            <option value="Bebida caliente">Bebida Caliente</option>
            <option value="Bebida fria">Bebida Fria</option>
            <option value="Salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" className="my-4">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default CrearProducto;
