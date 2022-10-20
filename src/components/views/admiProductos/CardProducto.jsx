import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";



const CardProducto = (productos) => {


  return (
    <Card className="my-4">
      <Card.Img
        variant="top"
        src={productos.imagen}
        className="img-fluid"
      />
      <Card.Body>
        <Card.Title>{productos.nombreProducto}</Card.Title>
        <Card.Text>{productos.precio}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button className="btn btn-danger me-2">Ver más</Button>
      </Card.Footer>
    </Card>
  );
};

export default CardProducto;
