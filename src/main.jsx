import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//Hicimos esto para ver si me traia los datos de la carpeta public
//y efectivamente funciono asi que bien! despues me gustaria 
//averiguar un poco mas acerca de esto del fetch, el then, el finally etc.
fetch('/data/productos.json')
.then(respuesta => {
  console.log('Respuesta del servidor', respuesta);
  return respuesta.json();
})
.then(datos => {
  console.log('Productos cargados', datos);
})
.catch(error => {
  console.log('HUbo un error', error);
})
.finally(() => {
  console.log('Fin');
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);