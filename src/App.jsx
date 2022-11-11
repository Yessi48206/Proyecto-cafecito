import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Inicio from '../src/componente/views/Inicio.jsx';
import Administrador from '../src/componente/views/Administrador.jsx'
import Error404 from '../src/componente/views/Error404.jsx';
import Menu from '../src/componente/views/common/Menu';
import Footer  from '../src/componente/views/common/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetalleProducto from './componente/views/producto/DetalleProducto.jsx';
import CrearProducto from './componente/views/producto/CrearProducto.jsx';
import EditarProducto from './componente/views/producto/EditarProducto.jsx';
import './app.css';
import CrearCuenta from './componente/views/CrearCuenta.jsx';
import IniciarSesion from './componente/views/IniciarSesion.jsx';
function App() {
  return (
    //administrar la rutas
    //invoco al componente browser
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      {/*las rutas siempre son nombres del dominio path */}
      <Route exact path='/' element={<Inicio></Inicio>}></Route>
      <Route exact path='/administrar' element={<Administrador></Administrador>}> </Route>
      <Route path='*' element={ <Error404></Error404>}></Route>
      <Route exact path='/administrar/detalle/:id' element={<DetalleProducto></DetalleProducto>}></Route>
      <Route exact path='/administrar/crear' element={<CrearProducto></CrearProducto>}></Route>
      <Route exact path='/administrar/editar/:id' element={<EditarProducto></EditarProducto>}></Route>
      <Route exact path='/IniciarSesion' element={<IniciarSesion></IniciarSesion>} ></Route>
      <Route exact path='/crearCuenta' element={<CrearCuenta></CrearCuenta>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
