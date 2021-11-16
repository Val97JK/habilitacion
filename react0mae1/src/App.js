import './App.css';
import '../src/styles/V02.css'
import '../src/styles/intMaePro.css'
import '../src/styles/indexFormu.css'
import '../src/styles/indexinterRegis.css'
import '../src/styles/sistemaVentas.css'
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import Routess from './Routes/Routes';




function App() {
  return (   

  <Auth0Provider
    domain="react0mae.us.auth0.com"
    clientId="eOuAxnljFyXBd7gW9T15q7GW65fU8WkC"
    redirectUri={window.location.origin}
  >
    <Routess />
  </Auth0Provider>
  );
}

export default App;