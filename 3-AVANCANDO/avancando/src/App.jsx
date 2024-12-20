// não é necessário

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


import "./App.css";

// importando uma imagem do src
import day from "./assets/img1.jpg";

import CarDetails from "./components/CarDetails";

// conditional render
import ConditionalRender from "./components/ConditionalRender";

// importando hook useState, como componente
import Data from "./components/Data";

// renderização de lista
import ListRender from "./components/ListRender";

// props
import ShowUserName from "./components/ShowUserName";

// fragments
import Fragment from "./components/Fragment";

// children
import Container from "./components/Container";

// prop passando função
import ExecuteFunction from "./components/ExecuteFunction";

// lift state
import { useState } from "react";
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

// renderização de listas com componente
const cars = [
  {id:1, brand:"Ford", color: "Preto", km: 12000 },
  {id:2, brand:"Peugeot", color: "Prata", km: 2000 },
  {id:3, brand:"Hyundai", color: "Cinza", km: 120000 },
];




function App() {

// prop passando função
function showMessage () {
  console.log("Evento/Função do componente pai")
}

// state lift
const [message, setMessage] = useState ("");
const handleMessage = (msg) => {
  setMessage(msg);
}


  return (
    <div className="App" style={{paddingBottom: "500px"}}>
      <h1>Avançando em REACT</h1>
      {/* inserindo imagem em public */}
      <img src="/city.jpg" alt="cidade a noite" />
      {/* inserindo imagem importada de src */}
      <img src={day} alt="amanhecer no campo" />
      {/* hook  use State no componenete */}
      <Data/>
      {/* renderização de lista */}
      <ListRender/>
      {/* render condicional */}
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name="Andre"/>
      {/* desestruturando props */}
      <CarDetails brand="VW" km={999} color="Azul" />
      {/* reaproveitando componentes */}
      <CarDetails  km={0} color="Verde" brand="Fiat" />
      <CarDetails  km={50000} brand="Chevrolet"  color="Branco" />
      {/* renderização de listas com componente */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
      ))}
      {/* fragments */}
      <Fragment/>
      {/* children */}
      <Container>
        <h3>O conteúdo do container é: XXXXXXX</h3>
      </Container>
      <Container>
        <h3>O conteúdo do container é: XXXXXXX</h3>
        <p>Só que agora tambem tem o: YYYYYYY</p>
      </Container>
      {/* prop passando função */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
