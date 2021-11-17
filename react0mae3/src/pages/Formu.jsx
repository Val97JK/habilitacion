import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react"; 
import { Link } from 'react-router-dom';

function Formu (){
    
    
    const { loginWithRedirect } = useAuth0();
    const {logout} = useAuth0();
    const {user, isAuthenticated} = useAuth0();
    
    

    return(
        
        <div id="cameBody"> 
            <body>
                <form className="formulario1">
                    <p className="centrado">
                        <div className="h11"><h1 className="h1">Bienvenido al Sistema</h1></div>
                        <div className="bluee"/>
                        <img className="imga" src="https://www.semana.com/resizer/a7zdk3tDM5ZmhPJf4KxbcphCloo=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/PGI44RONDBFNDO2WFDBBQFFABQ.jpg"></img>
                    </p>
                    <div className="contenedor">
                        <p className="pp">
                            Para poder ingresar al sistema se debe validar sus credenciales en el siguiente formulario:
                        </p>
                        {/* <div className="input-contenedores"> 
                        <FontAwesomeIcon className="icone" icon={ faEnvelope}/>
                            <input type="text" className="text" placeholder="Digite su Gmail" 
                            oninvalid="this.setCustomValidity('Tienes que ingresar su Gmail!')" oninput="this.setCustomValidity('')"
                            required /> 
                        </div>
                        <div className="input-contenedores"> 
                        <FontAwesomeIcon className="icone" icon={ faKey}/>
                            <input type="password" placeholder="Digite su Contrasena" 
                            oninvalid="this.setCustomValidity('Tienes que ingresar su Contrasena!')" oninput="this.setCustomValidity('')"
                            required /> 
                        </div> */}
                        {/* <a className= "buttonn" href="/home" onClick={() => loginWithRedirect()}> Log In</a>
                        <p className="pp" styles="margin-left: 50px;">¿No tienes cuenta? <a className= "link" href="/signUp">Registrate</a>
                        </p> */}
                        <Link to="/home" className="nav-link active" className= "buttonn" onClick={() => loginWithRedirect()}>Ingresar</Link>

                    </div>

                </form>
            </body>
</div>
    )
}

export default Formu;