import { Button, Container, Form,Row,Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Card from 'react-bootstrap/Card';
const CrearCuenta = () => {

    const{
        register,
        handleSubmit,
        formState:{errors},
    }=useForm();
    const onSubmit =(data) =>{
        console.log(data);
    };

    return (
        <Container className="mainSection mt-3">
            <h3 className="text-center display-3">Crear cuenta</h3>
            <hr/>
            <Card className="bg-dark mb-5">
            <Row>
                <Col md={5}>
                  <section className="w-100 m-1">

                <img src="https://images.pexels.com/photos/2551794/pexels-photo-2551794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-100 border-radio" ></img>
                  </section>
                </Col>
            <Col md={6} className="ms-5 mt-4">
            <Form className="text-light w-50 " onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formNombreApellido" >
                <Form.Label >Nombre y Apellido</Form.Label>
                <Form.Control 
                type="text"
                placeholder="Ej: Pepe Perez"
                {...register("nombreYapellido", {
                  required: "El nombre y el apellido es un dato obligatorio",
                  minLength: {
                    value: 8,
                    message: "la cantidad minima de caracteres debe ser 8",
                  },
                  maxLength: {
                    value: 60,
                    message: "la cantidad maxima de caracteres debe ser 60",
                  },
                })}
                />
                 <Form.Text className="text-danger">
                    {errors.nombreYapellido?.message}
                </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEdad">
                <Form.Label>Edad</Form.Label>
                <Form.Control 
                type="number"
                placeholder="Ej: 20"
                {...register("edad",{
                    required:"La edad es un dato obligatorio",
                    min:{
                        value:15,
                        message:"la menos es edad es 15",
                    },
                    max:{
                        value:100,
                        message:"la mayor edad es 100"
                    }
                })}
                />
                 <Form.Text className="text-danger">
                    {errors.edad?.message}
                </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNombreApellido">
                <Form.Label>Edad</Form.Label>
                <Form.Select aria-label="Default select example"
                {...register('sexo',{
                required:'Debe seleccionar una categoria'
              })}
                >
                <option value="">Seleccione una opcion</option>
                <option value="Femenino">Femenino</option>
                <option value="masculino">Masculino</option>
                <option value="neutro">Neutro</option>
                </Form.Select>
                <Form.Text className="text-danger">
                    {errors.sexo?.message}
                </Form.Text>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formNombreApellido">
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control 
                type="text"
                placeholder="Ej: 20/10/1985"
                {...register("Fecha", {
                    required: "ingrese una fecha es obligatorio",
                    pattern: {
                      value:
                        /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/,
                      message: "debe ingresar una fecha DIA/MES/AÑO",
                    },
                  })}
                />
                 <Form.Text className="text-danger">
                    {errors.Fecha?.message}
                </Form.Text>
                </Form.Group>
                <Button variant="success" type="submit" className="my-4 pe-3">Registar</Button>
            </Form>
            </Col>
            </Row>
            </Card>
        </Container>
    );
};

export default CrearCuenta;