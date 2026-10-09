import styles from './Formulario.module.css'

export function Formulario({datosForm, manejarCambio, manejarEnvio, manejarCambioImagen}) {
    return (
        <form onSubmit={manejarEnvio}>
            <h2>Nuevo album</h2>
            <div className={styles.contenedorInput}><label htmlFor='nombre'>Nombre:</label><input name="nombre" id='nombre' value={datosForm.nombre} onChange={manejarCambio} type="text"></input></div>
            <div className={styles.contenedorInput}><label htmlFor='artista'>Nombre del artista:</label><input name="artista" id='artista' value={datosForm.artista} onChange={manejarCambio} type="text"></input></div>
            <div className={styles.contenedorInput}><label htmlFor='anio'>Año de publicación:</label><input name="anio" id='anio' value={datosForm.anio} onChange={manejarCambio} type="number"></input></div>
            <div className={styles.contenedorInput}><label htmlFor='precio'>Precio:</label><input name="precio" id='precio' value={datosForm.precio} onChange={manejarCambio} type="text"></input></div>
            <div className={styles.contenedorInput}><label htmlFor='imagen'>Imagen:</label><input name="imagen" id='imagen' className={styles.inputImagen} onChange={manejarCambioImagen} type="file"></input></div>
            <div className={styles.contenedorInput}><label htmlFor='stock'>Stock:</label><input name="stock" id='stock' value={datosForm.stock} onChange={manejarCambio} type="number"></input></div>
            <button type='submit'>Guardar producto</button>
        </form>
    );
}