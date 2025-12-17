import { useEffect, useState } from 'react';
import './App.css';
import ThemeDropdown from './components/ThemeDropDown';
import LoginPage from './pages/LoginPage';
import ProductDetail from './pages/ProductDetail';
import Account from './pages/Account';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Navegacion from './components/NavBar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import loadingicon from './assets/icons8-loading.gif';

function App() {
  // Estado para controlar la carga de datos, cartel indicador de carga
  const [cargando, setCargando] = useState(false);
  const [errorCarga, setErrorCarga] = useState(null);

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
        // Simulamos una demora de 3 segundos
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

  const [listadoDeProductos, setListadoDeProductos] = useState([]);

  const [cart, setCart] = useState([]);

  return (
    <>
      <Router>
        <div>
          <Navegacion cart={cart} setCart={setCart} />
          <Routes>
            <Route path="/" element={<Home listadoDeProductos={listadoDeProductos} cart={cart} setCart={setCart} />} />
            <Route path="/products/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
            <Route path="/account" element={<Account />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/products"
              element={<Products listadoDeProductos={listadoDeProductos} cart={cart} setCart={setCart} />}
            />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </Router>

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
