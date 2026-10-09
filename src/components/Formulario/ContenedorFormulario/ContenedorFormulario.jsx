import { useState }from "react";
import { Formulario} from "../FormularioProducto/Formulario.jsx";

export function ContenedorFormulario(){
    let [datosForm, setDatosformulario] = useState({
        nombre: '',
        artista: '',
        anio: '',
        precio: '',
        imagen: '',
        stock: ''
    });

    const manejarCambio = (evento) => {
        const { name, value} = evento.target;
        setDatosformulario({
            ...datosForm,
            [name] : value
        });
    }

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log('Enviando los siguientes datos:', datosForm);
    }
   

    return(
        <Formulario
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}
        />
    );
}