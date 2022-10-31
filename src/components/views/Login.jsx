import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { consultarUsuarioAPI } from "../helpers/queries";

const Login = () => {
const iniciarSesion = ()=>{
   consultarUsuarioAPI().then(()=>{
    
  })

}
  return (
      <Container>
          <div className="ancho50">
        <Form>
          <Form.Group className="mt-3 mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ej: RollingCode@gmail.com" />
            <Form.Text className="text-muted">
              No lo compartiremos con terceros.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mt-2 mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" />
          </Form.Group>
          <Button onClick={iniciarSesion} className="mx-1 mb-3" variant="primary" type="submit">
            Iniciar Sesion
          </Button>
        </Form>
    </div>
      </Container>
  );
};

export default Login;
