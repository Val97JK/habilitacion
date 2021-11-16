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
            
                <Route path='/home' element={<IntroPro/>}/>
                <Route path='/maePro' element={<MaestroPro/>}/>
                <Route path='/maeVentas' element={<MaestroVentas/>}/>
                <Route path='/maeUsuario' element={<MaestroUsuario/>}/>
                <Route path='/sisVentas' element={<SistemaVentas/>}/>
                <Route path='/signUp' element={<InterRegis/>}/>
                <Route path='/' element={<Formu/>}/>
                
                   
            </Routes>
        </Router>
    )
}
export default Rutas;