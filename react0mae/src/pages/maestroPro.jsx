import lupa from '../media/lupa.jpg'
import celular from '../media/celular.jpg'
import laptop from '../media/laptop.jpg'
import nevera from '../media/nevera.jpg'
import camara from '../media/camara.jpg'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faList, faBookmark, faCalendarAlt, faClipboardList, faRulerCombined, faInfoCircle, faBookOpen } from '@fortawesome/free-solid-svg-icons';
//<a href="#" title="Ir arriba">
//<input type="submit" value="Ir arriba" className="bootton" styles='position:fixed;bottom:0;right:0;'/>
//</a>


const MaestroPro = () =>{
    return(
        <body>
        <div className='imagen2'>
            <img src={lupa} width="500"/>
            </div>
            <div className="n"> 
            
        </div>
        <br/>
<br/>
<br/>
<table className="table">
<th><h6>Lista de Productos</h6></th>
<th><div id='hiper' className='hiper'><a href="#openModal">+Nuevo Registro o Actualización</a></div>
    <div id='hiper' className='hiper'><a href="#openModal2">Buscar Producto</a></div></th>
</table>
<div id="openModal" className="modalDialog">
	<div>
		<a href="#close" title="Close" className="close">X</a>

        <form className="formulario">
            <h2>Registro o Actualización de productos</h2>
            <h3>Ingreso de producto</h3>
            <div className='encerrado2'>
                <div className="imput-con">
                    <FontAwesomeIcon className="icon2" icon={ faBarcode }/>Código:<input type='text'/>
                    
                 
                </div>

                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faBookmark }/>
                    <label>Descripción:</label>
                    <input type='text'/>
                 
                </div>

                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faCalendarAlt }/>
                    <label>Fecha de creación:</label>
                    <input type='text'/>
                 
                </div>
                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faClipboardList }/>
                    <label>Tipo:</label>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                         <label for="html">Sin Definición</label>
                        <input type="radio" id="css" name="fav_language" value="CSS"/>
                         <label for="css">Serie</label>
                          <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                          <label for="javascript">Lote</label>
                 
                </div>

                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faRulerCombined }/>
                    <label>Unidad de Medida:</label>
                    <input type='text'/>
                 
                </div>

                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faInfoCircle }/>
                    <label>Estado:</label>
                    <select id="product" className='pro' name="Productos"/>
                        <option value="Disponible">Disponible</option>
                        <option value="No Disponible">No Disponible</option>
                        <option value="En Camino">En Camino</option>
                 
                </div>
                
                <a><input type='sumit' value='Guardar' className="botton"/></a>
                <p>Antes de salir, recuerda verificar el contenido ingresado</p>
                 
            </div>
        
        </form>
        </div>
</div>

<div id="openModal2" className="modalDialog">
	
		<a href="#close" title="Close" className="close">X</a>
        
		
        <form className="formulario">
            <h2>Registro de productos</h2>
            <h3>Buscar producto</h3>
            <div className='encerrado2'>
                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faBookOpen }/>Nombre:<input type='text'/>
                    
                 
                </div>

                <div className="imput-con">
                    <FontAwesomeIcon className="icon2" icon={ faBarcode }/>
                    <label>Código:</label>
                    <input type='text'/>
                 
                </div>

                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faCalendarAlt }/>
                    <label>Fecha de creación:</label>
                    <input type='text'/>
                 
                </div>
                
                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faList }/>
                    <label> Lista de productos:</label>
                    <select id="product" className='pro' name="Productos"/>
                        <option value="producto 1">producto 1</option>
                        <option value="producto 2">producto 2</option>
                        
                 
                </div>
                    
                <a><input type='sumit' value='Buscar' className="botton"/></a>
                <p>Digita alguno de los espacios con la caracteristica correspondiente del producto</p>
                 
            </div>
        
        </form> 
        </div>

        <div id='L' className='L'>
<ul>
    <li><a href="#" className='l2'>Código</a></li>
    <li><a  href="#" className='l2'>Descripción</a></li>
    <li><a href="#" className='l2'>Precio</a></li>
    <li><a href="#" className='l2'>Existencia</a></li>
    <li><a href="#" className='l2'>Proveedor</a></li>
    <li><a href="#" className='l2'>Foto</a></li>
    <li><a href="#" className='l2'>Acción</a></li>
  </ul>
</div>
<div id='lis' className='lis'>
    <ul>
        <li><a href="#" className='l3'>1</a></li>
        <li><a  href="#" className='l3'>Celular</a></li>
        <li><a href="#" className='l3'>5,000,000</a></li>
        <li><a href="#" className='l3'>Disponible</a></li>
        <li><a href="#" className='l3'>Proveedor A</a></li>
        <li><img src={celular} alt="celular" height="75"/></li>
        <li><a href="#openModal" className='l4' styles='color:rgb(59,59,247)'>   <u>  Editar</u></a></li>
      </ul>
    </div>

    <div id='lis2' className='lis2'>
    <ul>
        <li><a href="#" className='l4'>2</a></li>
        <li><a  href="#" className='l4'>Laptop</a></li>
        <li><a href="#" className='l4'>5,000,000</a></li>
        <li><a href="#" className='l4'>Disponible</a></li>
        <li><a href="#" className='l4'>Proveedor B</a></li>
        <li><img src={laptop} alt="laptop" height="75"/></li>
        <li><a href="#openModal" className='l4' styles='color:rgb(59,59,247)'><u>Editar</u></a></li>
      </ul>
    </div>

    <div id='lis' className='lis'>
    <ul>
        <li><a href="#" className='l3'>3</a></li>
        <li><a  href="#" className='l3'>Nevera</a></li>
        <li><a href="#" className='l3'>9,000,000</a></li>
        <li><a href="#" className='l3'>Disponible</a></li>
        <li><a href="#" className='l3'>Proveedor C</a></li>
        <li><img src={nevera} alt="nevera" height="75"/></li>
        <li><a href="#openModal" className='l4' styles='color:rgb(59,59,247)'><u>Editar</u></a></li>
      </ul>
    </div>

    <div id='lis2' className='lis2'>
    <ul>
        <li><a href="#" className='l4'>4</a></li>
        <li><a  href="#" className='l4'>Camara</a></li>
        <li><a href="#" className='l4'>3,000,000</a></li>
        <li><a href="#" className='l4'>Disponible</a></li>
        <li><a href="#" className='l4'>Proveedor D</a></li>
        <li><img src={camara} alt="Camara" height="75"/></li>
        <li><a href="#openModal" className='l4' styles='color:rgb(59,59,247)'><u>Editar</u></a></li>
      </ul>
    </div>



    </body>
    )
}

export default MaestroPro