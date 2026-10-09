import './App.css'
import { Layout } from './components/Layout/Layout'
import { ItemListContainer } from './components/Productos/ItemListContainer/ItemListContainer'
import { EquipoListContainer } from './components/Equipo/EquipoListContainer/EquipoListContainer'
import { ContenedorFormulario } from './components/Formulario/ContenedorFormulario/ContenedorFormulario'

function App() {
 
  return (
    <>
    <Layout>
      <ItemListContainer/>
      <ContenedorFormulario/>
      <EquipoListContainer/>
    </Layout>
    </>
  )
}

export default App