//import { Link } from 'react-router-dom'
import lupa from '../media/lupa.jpg'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';


const IntroPro = () =>{
    return(
        <div id='conteiner_intro'>
            <div className="n">
            
            </div>


            <img src={lupa} className='imagen' />


            <div className="input-contenedor">
                <p className="p"> Mis Productos y Servicios</p>
                <div className="objetos">
                    <table className="tabla">

                        <tr>
                            <td><FontAwesomeIcon className="iconn" icon={ faArrowAltCircleRight }/> Tipo de Productos y Servicios</td>
                            <td>
                                <a href ='/maestroPro.jsx' className="buttonn" styles="font-size: 15px;">
                                <FontAwesomeIcon className="iconn" icon={ faArrowAltCircleRight }/></a><label>Productos</label></td>


                            <td><FontAwesomeIcon className="iconn" icon={ faArrowAltCircleRight }/>  Servicios</td>

                        </tr>
                        <tr className="objetos">
                            <td><FontAwesomeIcon className="iconn" icon={ faArrowAltCircleRight }/>   Stock</td>
                            <td><FontAwesomeIcon className="iconn" icon={ faArrowAltCircleRight }/>   Descuentos</td>
                        </tr>

                    </table>
                </div>
                <p className="p"> Mi Empresa</p>
                <div className="objetos">
                    <table className="tabla">
                        <tr className="objetos">
                            <td><FontAwesomeIcon className="iconn" icon={ faArrowAltCircleRight }/>   Configuración General</td>
                            <td><FontAwesomeIcon className="iconn" icon={ faArrowAltCircleRight }/>   Sucursal</td>
                            <td><FontAwesomeIcon className="iconn" icon={ faArrowAltCircleRight }/>   Usuario</td>

                        </tr>
                        <tr className="objetos">
                            <td><FontAwesomeIcon className="iconn" icon={ faArrowAltCircleRight }/>   Perfil de Acceso</td>

                        </tr>
                    </table>
                </div>
                <p className="p"> Mis Ventas</p>

                <div className="objetos">
                    <table className="tabla">
                        <tr className="objetos">
                            <td><a className="buttonn" styles="font-size: 15px;" href="Inter_Sis_Vent.html" target="_blank">
                            <FontAwesomeIcon className="iconn" icon={ faArrowAltCircleRight }/></a><label>Sistemas de Ventas</label></td>
                            <td><FontAwesomeIcon className="iconn" icon={ faArrowAltCircleRight }/>   Renovación</td>
                            <td><FontAwesomeIcon className="iconn" icon={ faArrowAltCircleRight }/>   Formas de Pago</td>

                        </tr>
                        <tr className="objetos">
                            <td><FontAwesomeIcon className="iconn" icon={ faArrowAltCircleRight }/>   Tipo de Documento</td>

                        </tr>
                    </table>
                </div>
            </div>
            <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
        <script src="conteiner_intro"></script>
        </div>
    )
}
export default IntroPro