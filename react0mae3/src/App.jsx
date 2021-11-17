import '../src/styles/V02.css';
import '../src/styles/intMaePro.css';
import '../src/styles/indexFormu.css';
import '../src/styles/indexinterRegis.css';
import '../src/styles/sistemaVentas.css';
import Header from '../../react0mae3/src/content/Header';
import SistemaVentas from '../../react0mae3/src/pages/SistemaVentas';
import Footer from '../../react0mae3/src/content/Footer';
import Layout from './layout/Layout';

import { Auth0Provider } from "@auth0/auth0-react";
import Rutas from './Routes/Rutas';


 
function App() {
  return (
    <div className="App">
      <Auth0Provider
    domain="react0mae.us.auth0.com"
    clientId="eOuAxnljFyXBd7gW9T15q7GW65fU8WkC"
    redirectUri='http://localhost:3000/home'
  >
    <Rutas />
  </Auth0Provider>
    </div>
  );
}

export default App;
