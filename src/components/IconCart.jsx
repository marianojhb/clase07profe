import { RiShoppingCart2Line } from 'react-icons/ri';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { Button } from 'react-bootstrap';

const IconCart = ({ cart, setCart }) => {
  const totalItems = cart.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
  const totalAmount = cart.reduce((acumulador, producto) => acumulador + producto.cantidad * producto.precio, 0);

  const vaciarCarrito = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCart([]);
  };

  return (
    <>
      <div>
        {totalItems > 0 ? <RiShoppingCart2Fill size={24} /> : <RiShoppingCart2Line size={24} />}
        &nbsp;&nbsp; Items:&nbsp;{totalItems} &nbsp;&nbsp; $&nbsp;{totalAmount.toLocaleString()} &nbsp;&nbsp;
        <Button
          variant="outline-danger"
          size="sm"
          className="btn-xs align-top "
          onClick={(e) => vaciarCarrito(e)}
          aria-label="Vaciar carrito"
        >
          ✕
        </Button>
      </div>
    </>
  );
};

export default IconCart;
