import Header from "./pages/Header";
import Formulario from "./pages/Formulario";
import ListaFuncionarios from "./pages/ListaFuncionarios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Formulario />}/>
        <Route path="/ListaFuncionarios" element={<ListaFuncionarios/>}/>
      </Routes>
    </Router>
  );
}

export default App;
