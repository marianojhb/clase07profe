import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import BotonAgregarProductoCart from '../components/BotonAgregarProductoCart';

export default function ProductDetail({ cart, setCart }) {
  const { id } = useParams();
  const [cargando, setCargando] = useState(false);
  const [errorCarga, setErrorCarga] = useState(null);
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    async function cargarDatos() {
      setCargando(true);
      setErrorCarga(null);
      let error = null;

      // Simultáneamente cargamos los productos y esperamos 3 segundos
      const [productoLoading] = await Promise.all([
        fetch('https://68ebcbd276b3362414ceb1d3.mockapi.io/api/v1/products/' + id)
          .then((res) => {
            if (!res.ok) {
              throw new Error('Error en la respuesta de la red');
            }
            return res.json();
          })

          .catch((err) => {
            error = err;
            console.error('Error al cargar el producto:', error);
            return [];
          }),
        // Simulamos una demora de 3 segundos
        new Promise((resolve) => setTimeout(() => resolve(), 50)),
      ]);

      if (error) {
        setErrorCarga('Hubo un error al cargar. Por favor, intente nuevamente más tarde.');
      }

      if (productoLoading) {
        setProducto(productoLoading);
      }
      // Finalizada la carga, sacamos el cartel indicador de carga
      setCargando(false);
    }

    cargarDatos();
  }, []);

  return (
    <>
      <Container className="py-4">
        {producto && <h2 className="mb-3">{producto.name}</h2>}
        {cargando && <p>Cargando...</p>}
        {errorCarga && <p className="text-danger">{errorCarga}</p>}
        {producto && (
          <div>
            <img src={producto.img} alt={producto.name} style={{ objectFit: 'cover', height: 400, width: 400 }} />
            <h3>{producto.name}</h3>
            <p>{producto.desc}</p>
            <p>Precio: ${producto.precio}</p>
            <BotonAgregarProductoCart producto={producto} cart={cart} setCart={setCart} />
          </div>
        )}
      </Container>
    </>
  );
}
