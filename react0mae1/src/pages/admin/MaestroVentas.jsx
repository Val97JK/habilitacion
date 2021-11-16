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


const MaestroVentas = () =>{
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
<th><h6>Lista de proveedores</h6></th>
<th><div id='hiper' className='hiper'><a href="#openModal">+Agregar o Actualizar</a></div>
    <div id='hiper' className='hiper'><a href="#openModal2">Buscar Proveedor</a></div></th>
</table>
<div id="openModal" className="modalDialog">
	<div>
		<a href="#close" title="Close" className="close">X</a>

        <form className="formulario">
        <h2>Registrar o Actualizar Proveedor</h2>
            <h3>Ingreso de Proveedor</h3>
            <div className='encerrado2'>
                <div className="imput-con">
                    <FontAwesomeIcon className="icon2" icon={ faBarcode }/>Código:<input type='text'/>
                    
                 
                </div>

                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faBookmark }/>
                    <label>Tipo de Productos:</label>
                    <input type='text'/>
                 
                </div>

                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faClipboardList }/>
                    <label>Tipo de proveedor:</label>
                    <input type="radio" id="htm" name="fav_language" value="HTM"/>
                         <label for="htm">Por mayor</label>
                        <input type="radio" id="cs" name="fav_language" value="CS"/>
                         <label for="cs">Por menor</label>
                 
                </div>
                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faRulerCombined }/>
                    <label>Unidad de Medida:</label>
                    <input type='text'/> 
                 
                </div>

                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faInfoCircle }/>
                     <label>Estado:</label>
                    <select id="product" class='pro' name="Productos"/>
                        <option>Defecto</option>
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
        <h2>Registro de proveedor</h2>
            <h3>Buscar proveedor</h3>
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
                     <FontAwesomeIcon className="icon2" icon={ faClipboardList }/>
                     <label>Tipo de proveedor:</label>
                    <input type="radio" id="ht" name="fav_language" value="Mayor"/>
                     <label for="mayor">Por mayor</label>
                    <input type="radio" id="ccs" name="fav_language" value="Menor"/>
                     <label for="menor">Por menor</label>
                 
                </div>
                
                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faList }/>
                    <label> Lista de productos:</label>
                    <select id="product" className='pro' name="Productos"/>
                        <option value="producto 1">producto 1</option>
                        <option value="producto 2">producto 2</option>
                        
                 
                </div>
                    
                <a><input type='sumit' value='Buscar' className="botton"/></a>
                <p>Digita alguno de los espacios con la caracteristica correspondiente del producto
                    para poder facilitar la busqueda
                </p>
                 
            </div>
        
        </form> 
        </div>

        <div id='L' className='L'>
<ul>
    <li><a href="#" className='l2'>Código</a></li>
    <li><a  href="#" className='l2'>Nombre</a></li>
    <li><a  href="#" class='l2'>Descripción Venta</a></li>
    <li><a href="#" class='l2'>Foto/Logo</a></li>
    <li><a href="#" className='l2'>Acción</a></li>
  </ul>
</div>
<div id='lis' className='lis'>
    <ul>
        <li><a href="#" className='l3'>1001</a></li>
        <li><a  href="#" className='l3'>Apple</a></li>
        <li><a href="#" className='l3'>Productos tecnologicos</a></li>
               
        <li><img src={celular} alt="celular" height="75"/></li>
        <li><a href="#openModal" className='l4' styles='color:rgb(59,59,247)'>   <u>  Editar</u></a></li>
      </ul>
    </div>

    <div id='lis2' className='lis2'>
    <ul>
    <li><a href="#" className='l4'>1002</a></li>
        <li><a  href="#" className='l4'>Intel</a></li>
        <li><a href="#" className='l4'>Procesadores para computadores</a></li>
        <li><img src={laptop} alt="laptop" height="75"/></li>
        <li><a href="#openModal" className='l4' styles='color:rgb(59,59,247)'><u>Editar</u></a></li>
      </ul>
    </div>

    <div id='lis' className='lis'>
    <ul>
    <li><a href="#" className='l3'>1003</a></li>
        <li><a  href="#" className='l3'>Mizuno</a></li>
        <li><a href="#" className='l3'>Implementos de Voleibol</a></li>
        <li><img src={nevera} alt="nevera" height="75"/></li>
        <li><a href="#openModal" className='l4' styles='color:rgb(59,59,247)'><u>Editar</u></a></li>
      </ul>
    </div>

    <div id='lis2' className='lis2'>
    <ul>
        
        <li><a href="#" className='l4'>1004</a></li>
        <li><a  href="#" className='l4'>Riot Games</a></li>
        <li><a href="#" className='l4'>Membresías de VideoJuegos</a></li>
        <li><img src={camara} alt="Camara" height="75"/></li>
        <li><a href="#openModal" className='l4' styles='color:rgb(59,59,247)'><u>Editar</u></a></li>
      </ul>
    </div>



    </body>
    )
}

export default MaestroVentas