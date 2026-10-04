import './App.css'
import { Formulario } from './components/Formulario/Formulario'
import { Layout } from './components/Layout/Layout'
import { ItemListContainer } from './components/Productos/ItemListContainer/ItemListContainer'

function App() {
 
  return (
    <>
    <Layout>
      <ItemListContainer/>
      <Formulario />
    </Layout>
    </>
  )
}

export default App

//Proximamente tenemos que entregar este trabajo, tenemos que agregar un equipo en alguna parte 
// y traerlo desde la carpeta data. Para practicar este tema del fetch 
