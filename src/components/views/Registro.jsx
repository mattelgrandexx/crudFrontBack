import React from 'react';
import { Container } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { crearUsuarioAPI } from '../helpers/queries';

const Registro = () => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const navegacion = useNavigate();

    const onSubmit = (datosUsuario)=>{
        console.log(datosUsuario)
        // enviar la peticion a la API
        crearUsuarioAPI(datosUsuario).then((respuesta)=>{
      if(respuesta.status === 201){
      Swal.fire("Usuario Creado", "El usuario fue creado correctamente", "success");
      // resetear el formulario
      reset();
      // redireccionar
      navegacion("/");
      }else{
        Swal.fire("Ocurrio un error", "El producto no pudo ser creado exitosamente", "error");
      }
        })
       }

    return (
        <Container>
        <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail1">
        <Form.Label>Nombre de usuario</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Ingrese un nombre de usuario" 
          minLength={2}
          maxLength={50}
          {...register("nombreUsuario",{
              required:"El nombre de usuario es obligatorio",
              minLength:{
                  value:2,
                  message:"La cantidad minima de caracteres es de 2"
                },
                maxLength:{
                    value:50,
                    message:"La cantidad maxima de caracteres es de 50"
                }
            })}
            />
          <Form.Text className="text-danger">
            {errors.nombreUsuario?.message}
          </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Ingrese un Email" 
        minLength={2}
          maxLength={50}
          {...register("email",{
              required:"El email es obligatorio",
              minLength:{
                  value:2,
                  message:"La cantidad minima de caracteres es de 2"
                },
                maxLength:{
                    value:50,
                    message:"La cantidad maxima de caracteres es de 50"
                }
            })}
            />
          <Form.Text className="text-danger">
            {errors.email?.message}
          </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Ingrese una contraseña" 
        minLength={2}
          maxLength={50}
          {...register("contraseña",{
              required:"Contraseña obligatoria",
              minLength:{
                  value:2,
                  message:"La cantidad minima de caracteres es de 2"
                },
                maxLength:{
                    value:50,
                    message:"La cantidad maxima de caracteres es de 50"
                }
            })}
            />
          <Form.Text className="text-danger">
            {errors.contraseña?.message}
          </Form.Text>
      </Form.Group>
      <Button className='mb-3' variant="primary" type="submit">
        Crear Usuario
      </Button>
    </Form>  
        </div>
        </Container>
    );
};

export default Registro;