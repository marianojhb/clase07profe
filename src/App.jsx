import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Componentes
import RutaProtegida from './components/RutaProtegida';
import ProductDetail from './pages/ProductDetail';
import Navegacion from './components/NavBar';

// Paginas
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import LoginPage from './pages/LoginPage';
import Account from './pages/Account';
import Checkout from './pages/Checkout';

function App() {
  // Estados sobre la carga de datos
  const [cargando, setCargando] = useState(false);
  const [errorCarga, setErrorCarga] = useState(null);

  // Estados del listado de productos y del carrito
  const [listadoDeProductos, setListadoDeProductos] = useState([]);
  const [cart, setCart] = useState([]);

  // Función para cargar los datos de productos desde la API
  useEffect(() => {
    async function cargarDatos() {
      setCargando(true);
      setErrorCarga(null);
      let error = null;

      // Simultáneamente cargamos los productos y esperamos 3 segundos
      const [productos] = await Promise.all([
        fetch('https://68ebcbd276b3362414ceb1d3.mockapi.io/api/v1/products')
          .then((res) => {
            if (!res.ok) {
              throw new Error('Error en la respuesta de la red');
            }
            return res.json();
          })

          .catch((err) => {
            error = err;
            console.error('Error al cargar los productos:', error);
            return [];
          }),
        // Simulamos una demora de 1 segundo
        new Promise((resolve) => setTimeout(() => resolve(), 1000)),
      ]);

      if (error) {
        setErrorCarga('Hubo un error al cargar los productos. Por favor, intente nuevamente más tarde.');
      }

      if (productos && productos.length > 0) {
        setListadoDeProductos(productos);
      }
      // Finalizada la carga, sacamos el cartel indicador de carga
      setCargando(false);
    }

    cargarDatos();
  }, []);

  return (
    <>
      <Router>
        <div>
          <Navegacion cart={cart} setCart={setCart} />
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home listadoDeProductos={listadoDeProductos} cart={cart} setCart={setCart} />} />

            {/* Productos */}
            <Route
              path="/products"
              element={<Products listadoDeProductos={listadoDeProductos} cart={cart} setCart={setCart} />}
            />

            {/* Detalle de Producto */}
            <Route path="/products/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />

            {/* About */}
            <Route path="/about" element={<About />} />

            {/* Contacto */}
            <Route path="/contact" element={<Contact />} />

            {/* Login */}
            <Route path="/login" element={<LoginPage />} />

            {/* Rutas protegidas: */}
            {/* 1. Ruta Account */}
            <Route
              path="/account"
              element={
                <RutaProtegida>
                  <Account />
                </RutaProtegida>
              }
            />
            {/* 2. Ruta Checkout */}
            <Route
              path="/checkout"
              element={
                <RutaProtegida>
                  <Checkout cart={cart} setCart={setCart} />
                </RutaProtegida>
              }
            />
          </Routes>
        </div>
      </Router>

      {/* Cartel indicador de carga */}
      {cargando && (
        <div className="loading-container">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      )}
      {errorCarga && <div className="error">{errorCarga}</div>}
    </>
  );
}

export default App;
