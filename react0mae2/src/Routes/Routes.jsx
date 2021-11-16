import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Layout from '../layout/Layout';
import IntroPro from '../pages/admin/introPro';
import MaestroPro from '../pages/admin/maestroPro';
import MaestroVentas from '../pages/admin/MaestroVentas';
import MaestroUsuario from '../pages/admin/maeUsuario';
import SistemaVentas from '../pages/admin/SistemaVentas';
import Formu from '../pages/public/Formu';
import InterRegis from '../pages/public/InterRegis';

const Routess = () => {
    return (
        <Router>
            <Routes>
                <Route path={['/home','/maePro', '/maeVentas', '/maeUsuario', '/sisVentas']}>
                    <Layout>
                    <Routes>
                        <Route path='/home'>
                            <IntroPro/>
                        </Route>
                        <Route path='/maePro'>
                            <MaestroPro/>
                        </Route>
                        <Route path='/maeVentas'>
                            <MaestroVentas/>
                        </Route>
                        <Route path='/maeUsuario'>
                            <MaestroUsuario/>
                        </Route>
                        <Route path='/sisVentas'>
                            <SistemaVentas/>
                        </Route>
                    </Routes>
                    </Layout>
                </Route>
                <Route path={['/', '/signUp']}>
                        <Route path='/'>
                            <InterRegis/>
                        </Route>
                            <Routes>
                            <Route path='/signUp'>
                                <Formu/>
                            </Route>
                            </Routes>
                </Route>
            </Routes>
        </Router>
    )
}
export default Routess;