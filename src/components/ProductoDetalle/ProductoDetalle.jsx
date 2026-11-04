import styles from './ProductoDetalle.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [esFav, setFavorito] = useState(false);

  const marcarComoFav = () => {
    setFavorito(!esFav);
  };

  useEffect(() => {
    fetch('/data/productos.json')
      .then(response => response.json())
      .then(data => {
        const productoEncontrado = data.find(p => p.id === parseInt(id));
        setProducto(productoEncontrado);
      })
      .catch(error => console.error('Error al cargar el producto:', error))
  }, [id]);

  if (!producto) {
    return <p>Cargando detalle del producto...</p>;
  }

  if (!producto.id) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className={styles.contenedorPrincipal}>
      <div className={styles.contenedorPlastico}>
        <div className={styles.costadito} />
        <div className={styles.contenedorPortada}>
          <img src={`/${producto.imagen}`} alt={producto.nombre} className={styles.portadaImg} />
          <div className={styles.brilloAcrilico} />
          <button
            className={`${styles.botonIcono} ${esFav ? styles.activo : ''}`}
            onClick={marcarComoFav}
          >
            <svg viewBox='0 0 24 24' className={styles.iconoEstrella}>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </button>
        </div>
        <div className={styles.cdDisc}>
          <div className={styles.cdHole} />
        </div>
      </div>

      <div className={styles.productoInfo}>
        <span className={styles.formatoProducto}>Disco Compacto</span>
        <h1 className={styles.tituloAlbum}>{producto.nombre}</h1>
        <p className={styles.artistaYAnio}>{producto.artista} — <span className={styles.anio}>{producto.anio}</span></p>
        <p className={styles.productoPrecio}>${producto.precio}</p>

        <div className={styles.productoBotones}>
          <button className={styles.btnComprar}>Comprar ahora</button>

          <div className={styles.botonesSecundarios}>
            <button
              className={styles.btnIconoFila}
              onClick={() => console.log('Agregado al carrito', producto.id)}
              title="Agregar al carrito"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}