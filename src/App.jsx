import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Inicio from '../src/componente/views/Inicio.jsx';
import Administrador from '../src/componente/views/Administrador.jsx'
import Error404 from '../src/componente/views/Error404.jsx';
import Menu from '../src/componente/views/common/Menu';
import Footer  from '../src/componente/views/common/Footer.jsx';
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
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
