import './App.css'
import { Layout } from './components/Layout/Layout'
import { ItemListContainer } from './components/Productos/ItemListContainer/ItemListContainer'
import { EquipoListContainer } from './components/Equipo/EquipoListContainer/EquipoListContainer'
import { ContenedorFormulario } from './components/Formulario/ContenedorFormulario/ContenedorFormulario'
import { ProductoDetalle } from './components/ProductoDetalle/ProductoDetalle'
import { Routes, Route } from 'react-router-dom'

function App() {
 
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<h1>Pagina de inicioooo</h1>} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/alta" element={<ContenedorFormulario />} />
        <Route path="/equipo" element={<EquipoListContainer />} />
      </Route>
    </Routes>
    </>
  )
}

export default App