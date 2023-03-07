import { Navegacion } from "../subcomponents/Navegacion"
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from "../ProtectedRoute";
import { SoldaduraFibra } from "../subcomponents/ftth/SoldaduraFibra";
import { Inicio } from "./Inicio";


const Home = () => {


  return (
    <div>
      <Navegacion />
      <div style={{transform:"translateY(120px)"}}>
      <Routes>
        <Route path="/" element={<ProtectedRoute> <Inicio /></ProtectedRoute>} />
        <Route path="/soldadura-fibra" element={<ProtectedRoute> <SoldaduraFibra /></ProtectedRoute>} />
        <Route path="/instalación-paquetes" element={<ProtectedRoute> <SoldaduraFibra /></ProtectedRoute>} />
      </Routes>
      </div>
    
    </div>
  )
}

export default Home
