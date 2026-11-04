import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <h1>TEETH RECORDS</h1>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/alta">Agregar Producto</Link></li>
                    <li><Link to="/equipo">Equipo</Link></li>
                </ul>
            </nav>
        </header>
    );
}
