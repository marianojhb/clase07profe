import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BotonAgregarProductoCart from './BotonAgregarProductoCart';
import { useNavigate } from 'react-router-dom';

const ProductoCard = ({ producto, cart, setCart }) => {
  const navigate = useNavigate();
  return (
    <>
    <Card className="card border-light mb-3 h-100 " style={{ maxWidth: '20rem', cursor: 'pointer' }} onClick={() => navigate(`/products/${producto.id}`)}>
      
      {producto.img && (
        <Card.Img variant="top" src={producto.img} alt={producto.desc} style={{ objectFit: 'cover', height: 160 }} />
      )}
    
      <Card.Body className="d-flex flex-column">
        
        <Card.Title className="mb-1">{producto.name}</Card.Title>
        <Card.Text className="text-muted mb-2">{producto.desc}<br/>ID: {producto.id}</Card.Text>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold">${producto.precio?.toLocaleString?.() || producto.precio}</span>

          <BotonAgregarProductoCart producto={producto} cart={cart} setCart={setCart} />
        </div>
      </Card.Body>

      {typeof producto.stock === 'number' && <Card.Footer className="text-muted">Stock: {producto.stock}</Card.Footer>}
    </Card>
    </>
  );
};

export default ProductoCard;
