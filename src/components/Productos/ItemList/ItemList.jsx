import { TarjetaProducto } from '../TarjetaProducto/TarjetaProducto';
import styles from './ItemList.module.css'

export function ItemList({ productos }) {
  return (
    <div className={styles.contenedorProductos}>
      {
        productos.map((producto, index) => (
          <TarjetaProducto key={index} {...producto} />
        ))
      }
    </div>
  );
}