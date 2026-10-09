import { EquipoList } from "../EquipoList/EquipoList";
import { useEffect, useState } from "react";
import styles from './EquipoListContainer.module.css';

export function EquipoListContainer() {

    const [equipo, setEquipo] = useState([]);

    const [error, setError] = useState(null);

    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('/data/nosotros.json')
            .then(respuesta => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar al equipo');
                }
                return respuesta.json();
            })
            .then(datos => {
                setEquipo(datos);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            })
    }, []);

    if (cargando) return <p>Cargando info del equipo...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={styles.contenedor}>
            <h2>Nuestro Equipo</h2>
            <EquipoList equipo={equipo} />
        </div>
    );
}