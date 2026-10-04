import { useEffect, useState } from 'react';
import styles from './TarjetaProducto.module.css';

export function TarjetaProducto(props) {

    const agregarAlCarrito = () => {
        alert(`Agregaste ${contador} copias de "${props.nombre}" al carrito! Entra a comprarlo`);
    };

    const [esFav, setFavorito] = useState(false);

    useEffect(() => {
        console.log("Se modificó la lista de favoritos");
    },[esFav]);

    const marcarComoFav = () => {
        setFavorito(!esFav);
    };

    const [contador, setContador] = useState(1);

    const restarCopia = () => {
        if (contador > 1) {
            setContador(contador - 1);
        } else {
            alert("Debe seleccionar minimo una unidad");
        }
    }

    const sumarCopia = () => {
        if (contador < 5) {
            setContador(contador + 1);
        } else {
            alert("Solo puede seleccionar hasta 5 unidades");
        }
    }

    return (
        <div className={styles.contenedorProducto}>
            <div className={styles.contenedorImagen}>
                
                    <img src={props.imagen} alt={props.nombre} />
                
                <div className={styles.artista}>
                    <h5>{props.artista}</h5>
                    <p>{props.anio} - Stock: {props.stock}</p>

                    <div className={styles.contenedorBoton}>
                        <div className={styles.controlCantidad}>
                            <button className={styles.botonCantidad} onClick={restarCopia}>-</button>
                            <span className={styles.numeroCantidad}>{contador}</span>
                            <button className={styles.botonCantidad} onClick={sumarCopia}>+</button>
                        </div>
                        <button onClick={agregarAlCarrito} className={styles.agregar}>
                            Agregar al carrito
                        </button>
                    </div>
                </div>

                <button
                    className={`${styles.favorito} ${esFav ? styles.activo : ''}`}
                    onClick={marcarComoFav}
                >
                    <svg viewBox='0 0 24 24' className={styles.iconoEstrella}>
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                </button>
            </div>
            <div className={styles.contenedorInformacion}>
                <h4>{props.nombre}</h4>
                <h4>${props.precio}</h4>
            </div>
        </div>
    );
}