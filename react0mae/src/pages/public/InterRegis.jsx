import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function InterRegis (){
    return(
        <div id="cameBody">
            
            <body>
                    <p className="parrafo">
                    Para poder registrarse complete el siguiente formulario:
                    </p>
                <form className="formulario2">
                    <h2 id="h21"></h2>
                    <h1 id="h12">Datos Personales</h1>
                    <h3 id="h33"></h3>
                    <FontAwesomeIcon className="iconee" icon={ faUser}/>
                        <div className="contenedor5">
                            <div className="input-contenedor5"> 
                                <label for="name" id="name-label">Nombre*:</label>
                                <input type="text" className="text2" placeholder="Nombre"
                                oninvalid="this.setCustomValidity('Tienes que ingresar el nombre completo!')" oninput="this.setCustomValidity('')"
                                required /> 
                            </div>
                            <div className="input-contenedor5"> 
                                <label for="name" id="name-label">Apellidos*:</label>
                                <input type="text" className="text2" placeholder="Apellidos"
                                oninvalid="this.setCustomValidity('Tienes que ingresar el Apellido completo!')" oninput="this.setCustomValidity('')"
                                required /> 
                            </div>
                            <div className="input-contenedor5">
                                <label for="name" id="name-label">Telefono*:</label>
                                <input type="text" className="text2" placeholder="Telefono"
                                oninvalid="this.setCustomValidity('Tienes que ingresar un Telefono!')" oninput="this.setCustomValidity('')"
                                required />  
                            </div>
                            <div className="input-contenedor5"> 
                                <label for="name" id="name-label">Fecha de nacimiento*:</label>
                                <input type="date" placeholder = "Fecha de Nacimiento"
                                oninvalid="this.setCustomValidity('Tienes que ingresar su Fecha de Nacimiento!')" oninput="this.setCustomValidity('')"
                                required />  
                            </div>
                            <div className="input-contenedor5"> 
                                <label for="name" id="name-label">País:</label>
                                <input type="text" className="text2" placeholder="País"
                                oninvalid="this.setCustomValidity('Tienes que ingresar un País!')" oninput="this.setCustomValidity('')"
                                required /> 
                            </div>
                            <div className="input-contenedor5"> 
                                <label for="name" id="name-label">Correo Electronico*:</label>
                                <input type="text" className="text2" placeholder="Correo Electronico"
                                oninvalid="this.setCustomValidity('Tienes que ingresar un Correo Electronico!')" oninput="this.setCustomValidity('')"
                                required />  
                            </div>
                            <a className= "button" href="IntMaeProd_V01.html">Ingresar</a>
                    

                        </div>
                   
                </form>
            </body>
            </div>
    )
}
    
export default InterRegis;
