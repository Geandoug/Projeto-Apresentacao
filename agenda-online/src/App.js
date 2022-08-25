import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import AddRegister from "./Components/AddRegister";
import Register from "./Components/Register";
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc, } from "firebase/firestore";
import { db } from "./lib/firebase";




function App() {
  const [registers, setRegisters] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "registers"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let registersArray = [];
      querySnapshot.forEach((doc) => {
        registersArray.push({ ...doc.data(), id: doc.id });
      });
      setRegisters(registersArray);
    });
    return () => unsub();
  }, []);// função com hook de efeito para atualização em tempo real do banco de dados.

  const handleEdit = async (register, input) => {
    await updateDoc(doc(db, "registers", register.id), { input: input });// funçãp para atualizar o banco de dados.
  };
  const toggleDone = async (register) => {
    await updateDoc(doc(db, "registers", register.id), { completed: !register.completed });//função que marca o texto dentro do input
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "registers", id));// fução deletar
  };

  return (
    <>
      <div className="App">
        <header>
          <div>
            <Header/>
          </div>
          <div className="btn-login" >
            <div>
              {/* <button>Home</button>
              <button>Sobre</button> */}
              {/* <buttonon>Login</buttonon>    alterado no css para centralizar o botao   */}
              {/* <button>Galeria</button>
              <button>Contato</button> */}
            </div>
          </div>
        </header>
        <section>
          <div>
            <AddRegister />
          </div>
        </section>
        <body>
          <div className="container">
            {registers.map((register) => (
              <Register
                key={register.id}
                register={register}
                toggleDone={toggleDone}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ))}
          </div>
        </body>
      </div>
    </>
  );
}
export default App;
