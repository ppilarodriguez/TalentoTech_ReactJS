import styles from "./TarjetaEquipo.module.css";

export function TarjetaEquipo({ nombre, email, puesto, foto }) {
  return (
    <article className={styles.tarjetaEquipo}>
      <div className={styles.contenedorFoto}>
        <img src={foto} alt={nombre} />
        <span className={styles.etiquetaPuesto}>{puesto}</span>
      </div>

      <div className={styles.contenedorInfo}>
        <h3 className={styles.nombre}>{nombre}</h3>
        <a className={styles.email}>
          {email}
        </a>
      </div>
    </article>
  );
}