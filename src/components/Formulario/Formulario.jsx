import styles from './Formulario.module.css'

export function Formulario() {
    return (
        <form>
            <h2>Nuevo album</h2>
            <div className={styles.contenedorInput}><label for='nombre' typeof="text">Nombre:</label><input name="nombre" id='nombre'></input></div>
            <div className={styles.contenedorInput}><label for='artista' typeof="text">Nombre del artista:</label><input name="artista" id='artista'></input></div>
            <div className={styles.contenedorInput}><label for='anio' typeof="number">Año de publicación:</label><input name="anio" id='anio'></input></div>
            <div className={styles.contenedorInput}><label for='precio' typeof="text">Precio:</label><input name="precio" id='precio'></input></div>
            <div className={styles.contenedorInput}><label for='imagen' typeof="text">URL de la portada:</label><input name="imagen" id='imagen'></input></div>
            <div className={styles.contenedorInput}><label for='stock' typeof="number">Stock:</label><input name="stock" id='stock'></input></div>
            <button type='submit'>Guardar producto</button>
        </form>
    );
}

//hoy vamos a aprender acerca del eveneto onChange
//se usa para trabajar con los inputs usualmente
//vamos a hacer un formulario para cargar productos jeje
//va a ser divertido
//vamos a hacer un formulario con un input para cada atributo
//de nuestros albumes 