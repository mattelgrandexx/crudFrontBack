import { Badge, Card, Col, Row } from 'react-bootstrap';

const DetalleProducto = (productos, id) => {
    
    
    return (
        <Card className='container my-5 mainSection'>
            <Row className='w-75'>
                <Col md={6}>
                    <img src={productos.imagen} alt='brownie' className="w-100" />
                </Col>
                <Col md={6} className="py-3">
                <h3>{productos.nombreProducto}</h3>
                <hr/>
                <Badge bg="success">{productos.categoria}</Badge>
                <p className='mt-3'><b>{productos.precio}</b></p>
                </Col>
                {}
            </Row>
        </Card>
    );
};

export default DetalleProducto;