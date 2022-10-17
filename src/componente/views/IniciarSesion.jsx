import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {Link} from  'react-router-dom'
const IniciarSesion = () => {

    const{
        register,
        handleSubmit,
        formState:{errors},
    }=useForm();
    const onSubmit =(data) =>{
        console.log(data);
    };

    return (
       <Container className=" text-light ">
        <Form noValidate className="border m-5 p-5 bg-dark" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 ">
            <Form.Label>Ingrese su correo</Form.Label>
            <Form.Control 
            type="email"
            placeholder="Ej: xxxxxx@xxxx.xxx"
            {...register("correo",{
                required:"Debe ingresar un correo",
                pattern:{
                    value:/\S+@\S+\.\S+/,
                    message: "debe ingresar un correo valido",
                }
            })}
            
            />
             <Form.Text className="text-danger">
                   {errors.correo?.message}
                </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
            type="password"
            {...register("contraseña",{
                required:"debe ingresar una contraseña",
                pattern:{
                    value:/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    message:"La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.",
                }
            })
            }
            />
        <Form.Text className="text-danger">
                    {errors.contraseña?.message}
                </Form.Text>
            
        </Form.Group>
        <Button variant="primary" type="submit" className="my-4 pe-3 w-100">
            Iniciar Sesion
        </Button>
       
        <Link className="text-danger d-flex justify-content-center  mb-1" to='/*'>¿Olvidaste tu contraseña?</Link>
       
        <Link className='w-100 btn btn-success mt-3' to='/crearCuenta'> Crear una cuenta</Link>
        </Form>
       </Container>
    );
};

export default IniciarSesion;