import lupa from '../media/lupa.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBan, faCube, faEdit, faPlus, faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function SistemaVentas (){
    return(
<div id="cameBody">
    <body>
    <img src={ lupa } className='imagen3' />
            <form>
                <fieldset>
                    <legend></legend>
                    <section id="container"></section>
                    <h1 id="h"><FontAwesomeIcon className="icones" icon={ faCube}/>Nueva venta</h1>
                    
                    <div className="datos_cliente">
                        <h4 id="h44">Datos del Cliente
                        <a id="a" href="#" className="btn_new_cliente"></a></h4>
                    </div>
                    <form name="form_new_cliente_venta" id="form_new_cliente_venta" className="datos">
                        <input type="hidden" name="action" value="addCliente"/>
                        <input type="hidden" id="idcliente" name="idcliente" value="" required/>
                        <div className="wd30">
                            <label>Nit:</label>
                            <input type="text" name="Nit_cliente" id="Nit_cliente"/>
                        </div>
                        <div className="wd30">
                            <label>Fecha de venta:</label>
                            <input type="date" name="Fecha_compra" id="Fecha_compra"/>
                        </div>
                        <div className="wd30">
                            <label>Nombre:</label>
                            <input type="text" name="Nombre_cliente" id="Nombre_cliente"/>
                        </div>
                        <div className="wd30">
                            <label>Telefono:</label>
                            <input type="number" name="Telefono_cliente" id="Telefono_cliente"/>
                        </div>
                        <div className="wd30">
                            <label>Direccion:</label>
                            <input type="text" name="Direccion_cliente" id="Direccion_cliente"/>
                        </div>
                        <div id="div_registro_cliente" className="wd100">
                            <button type="submit" className="btn_save"><FontAwesomeIcon className="fa lg" icon={ faSave}/>Guardar</button>
                        </div>
                    </form>
                    <div className="datos_venta">
                        <h4 id="h44">Datos de venta</h4>
                        <div className="datos1">
                            <div className="wd50">
                                <label>Vendedor:</label>
                                <input type="text" className="Vendedor" id="Vendedor" />
                            </div>
                            <div className="wd50">
                                <label>Acciones:</label>
                                <div id="acciones_venta">
                                    <a id="a" href="#" className="btn_ok textcenter" id="btn_anular_venta"><FontAwesomeIcon className="icond" icon={ faBan}/>Anular</a>  
                                    <a id="a" href="#" className="btn_new textcenter" id="btn_facturar_venta"><FontAwesomeIcon className="icond" icon={ faEdit}/>Procesar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table  className="tbl_venta">
                        <thead>
                            <tr className="tr">
                                <th >Codigo</th>
                                <th >Descripcion</th>
                                <th >Existencia</th>
                                <th >Cantidad</th>
                                <th  className="textrignt">Precio</th>
                                <th  className="textrignt">Precio Total</th>
                                <th styles="width: 95px;">Accion</th>
                            </tr>
                            <tr className="tr">
                                <td><input type="text" className="txt" name="txt_cod_producto"  id="txt_cod_producto" styles="height: 21xp; width: 58px;"/></td>
                                <td><input type="text" className="txt" name="txt_descripcion" id="txt_descripcion" styles="height:21xp; width: 116xp;"/></td>
                                <td><input type="text" className="txt" name="txt_existencia" id="txt_existencia" styles="width: 85px;"/></td>
                                <td><input type="text" className="txt" name="txt_cod_producto" id="txt_cod_producto" styles="width: 80px;"value="0" min="1" /></td>
                                <td><input type="number" name="txt_precio" id="txt_precio" className="textrignt" styles="width: 101px;"/></td>
                                <td><input id="txt_precio_total" className="textrignt" styles="width: 120px;"/></td>
                                <td><a id="a" href="#" id="add_producto_venta" className="link_add"><FontAwesomeIcon className="icond" icon={ faPlus}/></a> </td>
                            </tr>
                            <tr className="tr">
                                <th>Codigo</th>
                                <th colspan="2">Descripcion</th>
                                <th>Cantidad</th>
                                <th className="textrignt">Precio</th>
                                <th className="textrignt">Precio Total</th>
                                <th>Accion</th>
                            </tr>

                        </thead>
                        <tbody id="detalle_venta">
                            <tr className="tr">
                                <th>0</th>
                                <th colspan="2"></th>
                                <th className="textcenter"></th>
                                <th className="textrignt">0.00</th>
                                <th className="textrignt">0.00</th>
                                <th className="">
                                    <a id="a" className="link_delete" href="#" onclick="event.preventDefault();
                                    del_product_detalle(1);"><FontAwesomeIcon className="icond" icon={ faTrashAlt}/></a>
                                    
                                </th>
                            
                            </tr>

                        </tbody>
                        <tfoot>
                            <tr className="tr">
                                <td colspan="5" className="textrignt">Subtotal </td>
                                <td className="textrignt">0</td>
                            </tr>
                            <tr className="tr">
                                <td colspan="5" className="textrignt">IVA</td>
                                <td className="textrignt">0</td>
                            </tr>
                            <tr className="tr">
                                <td colspan="5" className="textrignt">Total</td>
                                <td className="textrignt">0</td>
                            </tr>
                        </tfoot>

                    </table>
                </fieldset>    

            </form>
        </body> 
        </div>
    )
}
    
export default SistemaVentas;
