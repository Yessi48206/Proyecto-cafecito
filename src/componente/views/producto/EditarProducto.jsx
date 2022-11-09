import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {obtenerUnProductoAPI} from "../helpers/queries.js"
const EditarProducto = () => {

  //aqui traemo el parametro de ruta
  const {id}= useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    //pedir a la api actualizar el producto con los datos peticion put
  };

useEffect(()=>{
  obtenerUnProductoAPI(id).then((respuesta)=>{
    if(respuesta.status === 200){
      console.log(respuesta);
      //cargar los datos al formulario
      setValue('nombreProducto',respuesta.dato.nombreProducto);
      setValue('precio',respuesta.dato.precio);
      setValue('imagen',respuesta.dato.imagen);
      setValue('categoria',respuesta.dato.categoria);

    }
  })
},[])
  return (
    <div>
      <section className="container my-3">
        <h3 className="display-4 text-center">Editar producto</h3>
        <hr />
      </section>
      <section className="container my-3">
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formNombreProducto">
            <Form.Label>Nombre Producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: cafe"
              {...register("nombreProducto", {
                required: "Debe ingresar el nombre del producto",
                minLength: {
                  value: 8,
                  message: "La cantidad minima de caracteres es 8",
                },
                maxLength: {
                  value: 40,
                  message: "la cantidad maxima es de 40 caracteres",
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
              placeholder="Ej: $250"
              {...register("precio", {
                required: "El precio es un dato obligatorio",
                min: {
                  value: 100,
                  message: "El precio minimo es $100",
                },
                max: {
                  value: 1900,
                  message: "El precio maximo es $1900",
                }
              })}
            />
            <Form.Text className="text-danger">
              {errors.Precio?.message}
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
          <Form.Group className="mb-3">
            <Form.Label>Categoria</Form.Label>
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

          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default EditarProducto;
