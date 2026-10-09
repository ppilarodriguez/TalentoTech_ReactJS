import styles from './Formulario.module.css'

export function Formulario({datosForm, manejarCambio, manejarEnvio}) {
    return (
        <form onSubmit={manejarEnvio}>
            <h2>Nuevo album</h2>
            <div className={styles.contenedorInput}><label htmlFor='nombre'>Nombre:</label><input name="nombre" id='nombre' value={datosForm.nombre} onChange={manejarCambio} type="text"></input></div>
            <div className={styles.contenedorInput}><label htmlFor='artista' typeof="text">Nombre del artista:</label><input name="artista" id='artista' value={datosForm.artista} onChange={manejarCambio} type="text"></input></div>
            <div className={styles.contenedorInput}><label htmlFor='anio' typeof="number">Año de publicación:</label><input name="anio" id='anio' value={datosForm.anio} onChange={manejarCambio} type="number"></input></div>
            <div className={styles.contenedorInput}><label htmlFor='precio' typeof="text">Precio:</label><input name="precio" id='precio' value={datosForm.precio} onChange={manejarCambio} type="text"></input></div>
            <div className={styles.contenedorInput}><label htmlFor='imagen' typeof="text">URL de la portada:</label><input name="imagen" id='imagen' value={datosForm.imagen} onChange={manejarCambio} type="text"></input></div>
            <div className={styles.contenedorInput}><label htmlFor='stock' typeof="number">Stock:</label><input name="stock" id='stock' value={datosForm.stock} onChange={manejarCambio} type="number"></input></div>
            <button type='submit'>Guardar producto</button>
        </form>
    );
}