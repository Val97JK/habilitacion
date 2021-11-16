import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Layout from '../layout/Layout';
import Formu from '../pages/Formu';
import InterRegis from '../pages/InterRegis';
import IntroPro from '../pages/introPro';
import MaestroPro from '../pages/maestroPro';
import MaestroVentas from '../pages/MaestroVentas';
import MaestroUsuario from '../pages/maeUsuario';
import SistemaVentas from '../pages/SistemaVentas';

const Rutas = () => {
    return (
        <Router>
            <Routes>
            
                <Route path='/home' element={<Layout><IntroPro/></Layout>}/>
                <Route path='/maePro' element={<Layout><MaestroPro/></Layout>}/>
                <Route path='/maeVentas' element={<Layout><MaestroVentas/></Layout>}/>
                <Route path='/maeUsuario' element={<Layout><MaestroUsuario/></Layout>}/>
                <Route path='/sisVentas' element={<Layout><SistemaVentas/></Layout>}/>
                <Route path='/signUp' element={<InterRegis/>}/>
                <Route path='/' element={<Formu/>}/>
                
                   
            </Routes>
        </Router>
    )
}
export default Rutas;