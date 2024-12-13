// não é necessário

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import "./App.css";

// importando uma imagem do src
import day from "./assets/img1.jpg";

// importando hook useState, como componente
import Data from "./components/Data";


function App() {
  return (
    <div className="App" style={{paddingBottom: "500px"}}>
      <h1>Avançando em REACT</h1>
      {/* inserindo imagem em public */}
      <img src="/city.jpg" alt="cidade a noite" />
      {/* inserindo imagem importada de src */}
      <img src={day} alt="amanhecer no campo" />
      {/* hook  use State no componenete */}
      <Data/>
    </div>
  );
}

export default App;
