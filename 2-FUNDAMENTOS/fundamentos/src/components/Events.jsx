import React from 'react'

const Events = () => {
  const handleClick = (e) => {
    console.log(e);
    console.log("Executou");
  };

  // exemplo de função jsx que será adicionada no jsx
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Renderização falhou !</h1>;
    }
  };

//   retorno antecipado que e executado no jsx
return 10>2 && <p>Carregando...</p>

  return (
    <div>
      <div>
        <button onClick={() => console.log("Click no botão")}>
          Clique aqui
        </button>
      </div>
      <div>
        {/* evento com função */}
        <button onClick={handleClick}>Clique aqui - com função</button>
      </div>
      {/* adicionando a função em jsx */}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
