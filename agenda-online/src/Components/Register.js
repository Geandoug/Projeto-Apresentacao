import React, {useState} from "react";



function Register({ register, toggleDone, handleDelete, handleEdit,}) {
  const [newInput, setNewInput] = useState(register.input);

  const handleChange = (e) => {
    e.preventDefault();
    if (register.complete === true) {
      setNewInput(register.input);
    } else {
      register.input = "";
      setNewInput(e.target.value);
    }
  };// Função que reseta o campo input para adição de nova entrada
  return (
    <div className="register">
      <div>
      <input
        style={{ textDecoration: register.completed && "line-through" }}
        type="text"
        value={register.input === "" ? newInput : register.input}
        className="list"
        onChange={handleChange} //input de saída, recupera do banco de dados
      />
      </div>
      <div className="btns-container">
        <button
          className="btn btn-done"
          onClick={() => toggleDone(register)}
        ><i class="bi bi-check-lg"></i>
          Feito
        </button>
        {/* função do botão marca o registro como feito */}
        <button
          className="btn btn-edit"
          onClick={() => handleEdit(register, newInput)}
        ><i class="bi bi-pen"></i>
       Editar
        </button>
        {/* função do botão para editar registro */}
        <button className="btn btn-delete" onClick={() => handleDelete(register.id)}>
        <i class="bi bi-trash"></i>
        Deletar
        </button>
        {/* função deletar */}
      </div>
    </div>
  );
}

export default  Register;