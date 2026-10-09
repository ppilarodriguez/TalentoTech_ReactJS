import styles from './EquipoList.module.css';
import { TarjetaEquipo } from '../TarjetaEquipo/TarjetaEquipo';

export function EquipoList({equipo}){
    return(
        <div className={styles.contenedorEquipo}>
            {
                equipo.map((miembro, index) => (
                    <TarjetaEquipo key={index} {...miembro} />
                ))
            }
        </div>
    );
}