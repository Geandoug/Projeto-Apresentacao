import React from "react";
import '../App.css'
import schedule from './schedule.png'

function Header() {
  return (
    <header>
      <div className="title">
        <div>
          <h1>Agenda online</h1>
        </div>
        <div className="img-title">
          <img src={schedule} alt="logo" />
        </div>
      </div>
    </header>// componente do cabeçalho da página
  );
}

export default Header;