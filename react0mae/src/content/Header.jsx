const Header = () => {
    return (
        <header> 
            <div className="encabezado">
                <h1 className="h111">Nombre de la empresa</h1>
            </div>

            <div className="menu" id="menu">
                
                <ul>
                <li><a href="#">Mi Empresa</a>
                <ul>
                    <li><a href="#">Configuración general</a></li>
                    
                    <li><a href="#">Sucursal</a></li>
                    <li><a className="link" href="V02.html">Usuario</a></li>
                    <li><a href="#">Perfil de acceso</a></li>
                    
                </ul>
                </li>
                <li><a href="#">Mis Productos y Servicios</a>
                
                <ul>
                    <li><a href="#">Tipo de producto o servicio</a></li>
                    <li><a className="link" href="V02.html">Productos</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Descuentos</a></li>
                    <li><a href="#">Stock</a></li>
                </ul>
                
                </li>
                <li><a href="#">Mis ventas</a>
                
                <ul>
                    <li><a className="link" href="Inter_Sis_Vent.html"  target="_blank">Sistema de Ventas</a></li>
                    <li><a href="#">Renovación</a></li>
                    <li><a href="#">Formas de Pago</a></li>
                    <li><a href="#">Tipo de Documento</a></li>
                </ul>
                
                </li>
                <li><a href="#">Punto de venta</a></li>
                <li><a href="#">Reportes</a></li>

                </ul>
                
                </div>
                
        </header>
    )
}
export default Header