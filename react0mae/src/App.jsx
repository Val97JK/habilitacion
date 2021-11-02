
import './App.css';
import '../src/styles/V02.css'
import '../src/styles/intMaePro.css'
import Footer from './content/Footer';
import Header from './content/Header';
import MaestroPro from './pages/maestroPro';
import MaestroUsuario from './pages/maeUsuario';
import IntroPro from './pages/introPro';
import Formu from './pages/Formu';
import '../src/styles/indexFormu.css'
import '../src/styles/indexinterRegis.css'
import InterRegis from './pages/InterRegis';
import '../src/styles/sistemaVentas.css'
import MaestroVentas from './pages/MaestroVentas';
import SistemaVentas from './pages/SistemaVentas';




function App() {
  return (
    <div className="App">
      <Header/>
      <SistemaVentas/>
      <Footer/>
    </div>
  );
}

export default App;
