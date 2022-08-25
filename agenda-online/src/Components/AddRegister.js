import React, { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

function AddRegister() {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input !== "") {
      await addDoc(collection(db, "registers"), {
        input,
        completed: false,
      });
      setInput("");
      // alert('Adicionado com sucesso')
    }
  }; // Término da função para que adiciona ao banco de dados criando a coleção 
  return (


    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Digite aqui..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="btn-container">
        <button>Cadastrar</button>
      </div>
      
    </form>// Formulário de entrada dos dados 
 
  );
}

export default AddRegister;