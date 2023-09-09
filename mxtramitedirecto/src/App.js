import './App.css';
import Navbar from './Components/Navbar.js';
import 'bulma/css/bulma.min.css';
// PORTADA
import Portada from './Layouts/Portada.js';

// CATEGORIAS
import SAT from './Components/CATEGORIAS/SAT.js';
import CITAS from './Components/CATEGORIAS/CITAS.js';
import UDG from './Components/CATEGORIAS/UDG.js';
import BECAS from './Components/CATEGORIAS/BECAS.js';

function App() {
  return (
    <div class="container">
      <Navbar/>
      <SAT/>
      <CITAS/>
      <UDG/>
      <BECAS/>
    </div>
  );
}

export default App;
