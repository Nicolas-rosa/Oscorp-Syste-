import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

function Formulario() {
  const [funcionario, setFuncionario] = useState({
    nome: "",
    cpf: "",
    salario: "",
    endereco: "",
    telefone: "",
    horasTrabalhadas: "",
  });


  const navigate = useNavigate();

  // UseEffect para checar se estamos editando um funcionário
  useEffect(() => {
    const funcionarioEditado = JSON.parse(localStorage.getItem("funcionarioEditado"));
    if (funcionarioEditado) {
      setFuncionario(funcionarioEditado); // Preenche o formulário com os dados do funcionário a ser editado
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFuncionario((prevFuncionario) => ({
      ...prevFuncionario,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const funcionariosSalvos = JSON.parse(localStorage.getItem("Funcionarios")) || [];

    
    const indexFuncionarioExistente = funcionariosSalvos.findIndex(f => f.cpf === funcionario.cpf);

    if (indexFuncionarioExistente >= 0) {
      
      funcionariosSalvos[indexFuncionarioExistente] = funcionario;
    } else {
      
      funcionariosSalvos.push(funcionario);
    }

    localStorage.setItem("Funcionarios", JSON.stringify(funcionariosSalvos));

    
    localStorage.removeItem("funcionarioEditado");
    setFuncionario({
      nome: "",
      cpf: "",
      salario: "",
      endereco: "",
      telefone: "",
      horasTrabalhadas: "",
    });

    
    navigate("/ListaFuncionarios");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-items-center flex-col py-12"
    >
      <div className=" transition-all duration-300 hover:shadow-[0_0_30px_rgb(9,51,0)]  hover:bg-gray-900  relative drop-shadow-xl w-[60vw] h-[100vh] overflow-hidden rounded-xl bg-[#3d3c3d]">
        <div className="w-[60vw] h-[100vh] flex items-center justify-items-center flex-col py-12 text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
          <div className="flex flex-col mb-2">
            <label className="font-medium">Nome:</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite o Nome"
              value={funcionario.nome}
              onChange={handleChange}
              className="hover:ring-2 hover:ring-black hover:ring-offset-2 px-3 w-[50vw] text-[3vh] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-medium">CPF:</label>
            <input
              type="text"
              id="cpf"
              value={funcionario.cpf}
              placeholder="Digite o CPF"
              onChange={handleChange}
              disabled={!!funcionario.cpf}
              className="hover:ring-2 hover:ring-black hover:ring-offset-2 px-3 w-[50vw] text-[3vh] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-medium">Salário:</label>
            <input
              type="number"
              id="salario"
              value={funcionario.salario}
              placeholder="Digite o seu Salario"
              onChange={handleChange}
              className="hover:ring-2 hover:ring-black hover:ring-offset-2 px-3 w-[50vw] text-[3vh] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-medium">Endereço:</label>
            <input
              type="text"
              id="endereco"
              value={funcionario.endereco}
              placeholder="Digite o seu Endereço"
              onChange={handleChange}
              className="hover:ring-2 hover:ring-black hover:ring-offset-2 px-3 w-[50vw] text-[3vh] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-medium">Telefone:</label>
            <input
              type="tel"
              id="telefone"
              value={funcionario.telefone}
              placeholder="Digite o seu Telefone"
              onChange={handleChange}
              className="hover:ring-2 hover:ring-black hover:ring-offset-2 px-3 w-[50vw] text-[3vh] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-medium">Horas Trabalhadas:</label>
            <input
              type="number"
              id="horasTrabalhadas"
              value={funcionario.horasTrabalhadas}
              placeholder="Quantas horas você trabalha ?"
              onChange={handleChange}
              className=" hover:ring-2 hover:ring-black hover:ring-offset-2 px-3 w-[50vw] text-[3vh] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-[6vh] px-4 py-2 max-w-[15vw] whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
          >
            Salvar
          </button>
          System Oscorp
        </div>
      </div>
      <Link
        type="submit"
        to="/ListaFuncionarios"
        className="mt-[3vh] flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-[7vh] px-4 py-2 max-w-[20vw] whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
      >
        Funcionarios
      </Link>
    </form>
  );
}

export default Formulario;
