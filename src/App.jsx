import { Routes, Route } from "react-router-dom";
import Home from "./components/inicio/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <div className="h-screen text-dark flex  ">
      <AuthProvider>
        <Routes>
          <Route path="/*"  element={<ProtectedRoute> <Home /></ProtectedRoute>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
