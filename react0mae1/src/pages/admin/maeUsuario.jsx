import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import lupa from '../media/lupa.jpg'
import { faFingerprint, faIdCard, faNetworkWired, faQuestionCircle, faUserCircle, faUserMinus } from '@fortawesome/free-solid-svg-icons';
//<a href="#" title="Ir arriba">
//<input type="submit" value="Ir arriba" className="bootton" styles='position:fixed;bottom:0;right:0;'/>
//</a>


const MaestroUsuario = () =>{
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
<th><h6>Maestro de Usuario</h6></th>
<th><div id='hiper' className='hiper'><a href="#openModal">+Nuevo Usuario</a></div>
<div id='hiper' className='hiper'><a href="#openModal3">Eliminar Usuario</a></div>


   </th>
</table>
<div id="openModal" className="modalDialog">
	<div>
		<a href="#close" title="Close" className="close">X</a>

        <form className="formulario">
            <h2>Registro</h2>
            <h3>Nuevo Usuario</h3>
            <div className='encerrado2'>
                <div className="imput-con">
                    <FontAwesomeIcon className="icon2" icon={ faFingerprint }/>ID Usuario:<input type='text'/>
                    
                 
                </div>

                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faIdCard }/>
                    <label>Nombre:</label>
                    <input type='text'/>
                 
                </div>

                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faNetworkWired }/>
                    <label>Rol:</label>
                    <input type='text'/>
                 
                </div>
                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faQuestionCircle }/>
                    <label>Estado:</label>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                         <label for="html">Autorizado</label>
                        <input type="radio" id="css" name="fav_language" value="CSS"/>
                         <label for="css">No Autorizado</label>
                    <input type="radio" id="ss" name="fav_language" value="SS"/>
                         <label for="ss">Pendiente</label>
                          
                 
                </div>

                
                
                <a><input type='sumit' value='Guardar' className="botton"/></a>
                <p>Antes de salir, recuerda verificar el contenido ingresado</p>
                 
            </div>
        
        </form>
        </div>
</div>
<div id="openModal2" className="modalDialog">
	<div>
		<a href="#close" title="Close" className="close">X</a>

        <form className="formulario">
        <h2>Registro</h2>
            <h3>Modificar Datos</h3>
            <div className='encerrado2'>
                <div className="imput-con">
                    <FontAwesomeIcon className="icon2" icon={ faFingerprint }/>ID Usuario:<input type='text'/>
                    
                 
                </div>

                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faIdCard }/>
                    <label>Nombre:</label>
                    <input type='text'/>
                 
                </div>

                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faNetworkWired }/>
                    <label>Rol:</label>
                    <input type='text'/>
                 
                </div>
                <div className="imput-con">
                     <FontAwesomeIcon className="icon2" icon={ faQuestionCircle }/>
                    <label>Estado:</label>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                         <label for="html">Autorizado</label>
                        <input type="radio" id="css" name="fav_language" value="CSS"/>
                         <label for="css">No Autorizado</label>
                    <input type="radio" id="ss" name="fav_language" value="SS"/>
                         <label for="ss">Pendiente</label>
                          
                 
                </div>

                
                
                <a><input type='sumit' value='Guardar' className="botton"/></a>
                <p>Antes de salir, recuerda verificar el contenido ingresado</p>
                 
            </div>
        
        </form>
        </div>
</div>

<div id="openModal3" className="modalDialog">
	<div>
		<a href="#close" title="Close" className="close">X</a>

        <form className="formulario">
        <h2>Registro</h2>
            <h3><FontAwesomeIcon className="iconn" icon={ faUserMinus }/> Eliminar Usuario</h3>
            <div className='encerrado2'>
                <div className="imput-con">
                    <FontAwesomeIcon className="icon2" icon={ faFingerprint }/>Verificar ID:<input type='text'/>
                    
                 
                </div>

                
                <a><input type='sumit' value='Eliminar' className="botton"/></a>
                <a><input type='sumit' value='Cancelar' className="botton"/></a>
                <p>¿Está seguro de su decisión?</p>
                 
            </div>
        
        </form>
        </div>
</div>

        <div id='LL' className='LL'>
<ul>
    <li><a href="#" className='l2'>ID Usuario</a></li>
    <li><a  href="#" className='l2'>Nombre Usuario</a></li>
    <li><a href="#" className='l2'>Rol Usuario</a></li>
    <li><a href="#" className='l2'>Estado</a></li>
    <li><a href="#" className='l2'>Perfil</a></li>
    <li><a href="#" className='l2'>Acción</a></li>
  </ul>
</div>
<div id='lis' className='lis'>
    <ul>
        <li><a href="#" className='l3'>101021219</a></li>
        <li><a  href="#" className='l3'>Camila Parada</a></li>
        <li><a href="#" className='l3'>Vendedor Mr.</a></li>
        <li><a href="#" className='l3'>Autorizado</a></li>
        <li><FontAwesomeIcon className="icon3" icon={ faUserCircle }/></li>
        
        <li>
            
                <a href="#openModal2" className='l3' styles='color:rgb(59,59,247)'><u>Editar</u></a></li>
        
        
      </ul>
    </div>

    <div id='lis2' className='lis2'>
    <ul>
        <li><a href="#" className='l4'>101021218</a></li>
        <li><a  href="#" className='l4'>Valentina Villán</a></li>
        <li><a href="#" className='l4'>Vendedor Mr.</a></li>
        <li><a href="#" className='l4'>Autorizado</a></li>
        <li><FontAwesomeIcon className="icon3" icon={ faUserCircle }/></li>
        
        <li><a href="#openModal2" className='l3' id="edit" styles='color:rgb(59,59,247)'><u>  Editar</u></a></li>
        
      </ul>
    </div>

    <div id='lis' className='lis'>
    <ul>
        <li><a href="#" className='l3'>101021217</a></li>
        <li><a  href="#" className='l3'>Sindy Naranjo</a></li>
        <li><a href="#" className='l3'>Vendedor Mr.</a></li>
        <li><a href="#" className='l3'>No Autorizado</a></li>
        <li><FontAwesomeIcon className="icon3" icon={ faUserCircle }/></li>
        
        <li><a href="#openModal2" className='l3' styles='color:rgb(59,59,247)'><u>  Editar</u></a></li>
        
      </ul>
    </div>

    <div id='lis2' className='lis2'>
    <ul>
        <li><a href="#" className='l4'>101021216</a></li>
        <li><a  href="#" className='l4'>Brian Zuleta</a></li>
        <li><a href="#" className='l4'> Administrador </a></li>
        <li><a href="#" className='l4'>No Autorizado</a></li>
        <li><FontAwesomeIcon className="icon4" icon={ faUserCircle }/></li>
        
        <li><a href="#openModal2" className='l3' styles='color:rgb(59,59,247)'><u>  Editar</u></a></li>
        
      </ul>
    </div>
    <div id='lis' className='lis'>
    <ul>
        <li><a href="#" className='l3'>101021216</a></li>
        <li><a  href="#" className='l3'>Jhonatan Marin</a></li>
        <li><a href="#" className='l3'>Jefe Bodega</a></li>
        <li><a href="#" className='l3'>Pendiente</a></li>
        <li><FontAwesomeIcon className="icon5" icon={ faUserCircle }/></li>
        
        <li><a href="#openModal2" className='l3' styles='color:rgb(59,59,247)'><u>  Editar</u></a></li>
        
      </ul>
    </div>


    </body>
    )
}

export default MaestroUsuario