import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ProductoCard from '../components/ProductoCard';

const Products = ({ listadoDeProductos, cart, setCart }) => {
  return (
    <Container className="py-4">
      <h2 className="mb-3">Productos</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {listadoDeProductos.map((producto) => (
          <Col key={producto.id}>
            <ProductoCard producto={producto} cart={cart} setCart={setCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
