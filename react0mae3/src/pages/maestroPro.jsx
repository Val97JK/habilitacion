import lupa from '../media/lupa.jpg'

import React, {useEffect, useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faList, faBookmark, faCalendarAlt, faClipboardList, faRulerCombined, faInfoCircle, faBookOpen } from '@fortawesome/free-solid-svg-icons';
//<a href="#" title="Ir arriba">
//<input type="submit" value="Ir arriba" className="bootton" styles='position:fixed;bottom:0;right:0;'/>
//</a>
const apiBaseUrl = 'http://localhost:3001'

const MaestroPro = () =>{
    
    const [productos, setProductos] = useState([]);
    const [productoSeleccion, setProductoSeleccion] = useState([]);
    const [productID, setProductID] = useState("");
    const [productDescript, setProductDescript] = useState("");
    const [productCost, setProductCost] = useState("");
    const [productState, setProductState] = useState("")
   
    const [busqueda, setBusqueda]= useState("");
   

    const [validUser, setValidUser] = useState(false);
    const {user, isAuthenticated } = useAuth0();
    const { loginWithRedirect } = useAuth0();   

    const seleccionarUser = (usuario) => {
        console.log('usuario seleccionado', usuario);
        //setOpenModal(true, setUsuarioSeleccion(usuario));        
    }

    const seleccionarProducto = (producto) => {
          
    }
    const validateUserRole = async () => {
        const response = await fetch(`${apiBaseUrl}/get-user?email=${user.email}`);
        const jsonResponse = await response.json();
        return jsonResponse;                   
    }

    const getUsuariosEmail = async(buscar) => {
        let dato = buscar;
        const response = await fetch(`${apiBaseUrl}/get-user-email?email=${dato}`);
        const jsonResponse = await response.json();
        const responseProductos = jsonResponse.data;
        const listProductos = responseProductos.map((usuario) =>
                <tr>                    
                    <th scope="row" >{usuario.id_user}</th>
                    <td> {usuario.user_name}</td>
                    <td> {usuario.email}</td>
                    <td> {usuario.estado}</td>
                    <td>
                        <button className="btn btn-secondary" onClick = {() => seleccionarUser(usuario)}                        
                        > Editar
                        </button>                                                
                    </td>                
                </tr>
            );
            setProductos(listProductos);
    }
    const grantAccess = async (buscar) => {

        let userData;
        // if (isAuthenticated) {
        //     userData = await validateUserRole();
        //     console.log('esta autenticado')
        // }
        // else {
        //     if(!verifySesion()){
        //         loginWithRedirect();
        //         console.log('no esta autenticado')
        //     }            
        //    setValidUser(true);
         //   return;
        //}
        //if (userData) {
            // if (userData.admin === "1") {
            //     setValidUser(true);
            //     localStorage.setItem("state", userData.admin);
            //     if (buscar) {
                    
            //         await getUsuariosEmail(buscar);
            //     }
            //     else{
                     await getProductos();
            //     }
                
            // }
            // else {
            //     localStorage.setItem("state", userData.admin);
            //     setValidUser(false);
            // }
        //}

    }


    useEffect(() => {
        grantAccess();
    },[true, true]);




    const getProductos = async () => { 
        console.log(apiBaseUrl);
        const response = await fetch(`${apiBaseUrl}/get-product`);        
        const jsonResponse = await response.json();
        const responseProductos = jsonResponse.data;
        

        const listProductos = responseProductos.map((producto) =>
                <tr>                    
                    <th scope="row">{producto.productID}</th>
                    <td >{producto.productDescript}</td>
                    <td >{producto.productCost}</td>
                    <td >{producto.productState}</td>
                    
                    <td>
                        <button className="btn btn-secondary" onClick = {() => seleccionarUser(producto)}                        
                        > Editar
                        </button>                                                
                    </td>                 
                </tr>
            );
            setProductos(listProductos);        
    }

    const verifySesion = () => {
        const cookies = document.cookie;const getProductos = async () => {       
            const response = await fetch(`${apiBaseUrl}/get-product`);        
            const jsonResponse = await response.json();
            const responseProductos = jsonResponse.data;
            const listProductos = responseProductos.map((producto) =>
                    <tr>                    
                        <th scope="row">{producto.productID}</th>
                    <td >{producto.productDescript}</td>
                    <td >{producto.productCost}</td>
                    <td >{producto.productState}</td>
                        <td>
                            <button className="btn btn-secondary" onClick = {() => seleccionarUser(producto)}                        
                            > Editar
                            </button>                                                
                        </td>                 
                    </tr>
                );
                setProductos(listProductos);        
        }
    }



    



    const handleChange=e=>{        
        let buscar = e.target.value;     
        setBusqueda(buscar)
        
    }

 



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
                    <div>      
                        <div className="containerInput">
                            <input
                            className="form-control inputBuscar"
                            value={busqueda}
                            placeholder="Búsqueda por nombre"                       
                            onChange={handleChange}
                            />
                        </div>
                        <br />
                        <table className="table table-bordered" id='H' className='H'>
                            <thead>
                                <tr>
                                    <th className='l2' scope="col">Codigo</th>
                                    <th className='l2' scope="col">Descripcion</th>
                                    <th className='l2' scope="col">Precio</th>
                                    
                                    <th className='l2' scope="col">Estado</th>
                                    <th className='l2' scope="col">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productos}
                            </tbody>
                        </table>
                    </div>
 
        </body>
    );
}


export default MaestroPro;