import { useState } from "react";
import { Formulario } from "../FormularioProducto/Formulario.jsx";

export function ContenedorFormulario() {
  const [datosForm, setDatosformulario] = useState({
    nombre: '',
    artista: '',
    anio: '',
    precio: '',
    stock: ''
  });

  const [imagen, setImagen] = useState(null);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatosformulario({
      ...datosForm,
      [name]: value
    });
  };

  const manejarCambioImagen = (evento) => {
    setImagen(evento.target.files[0]);
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();

    if (!imagen) {
      alert('Por favor, selecciona una imagen para el álbum');
      return;
    }

    const apiKey = import.meta.env.VITE_API_KEY;
    const formData = new FormData();
    formData.append('image', imagen);

    try {
      console.log('Subiendo imagen a ImgBB...');
      const respuestaImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: 'POST',
        body: formData
      });

      const datosImgbb = await respuestaImgbb.json();

      if (datosImgbb.success) {
        console.log('Imagen subida con éxito:', datosImgbb.data.url);
        
        const productoCompleto = {
          ...datosForm,
          urlImagen: datosImgbb.data.url
        };

        console.log('Enviando datos completos:', productoCompleto);
        
      } else {
        throw new Error('Error al subir la imagen a ImgBB');
      }
    } catch (error) {
      console.error('Error al procesar el formulario:', error);
    }
  };

  return (
    <Formulario
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
      manejarCambioImagen={manejarCambioImagen} 
    />
  );
}