import React from "react";

const ConditionalRender = () => {
  const x = 5;
  const name = "André";
  return (
    <div>
      {/* render condicional */}
      <h3>Se X for maior que 2 irá exibir</h3>
      {x > 2 && <p>X é {x}</p>}
      <h3>Render ternário</h3>
      {name === "João" ? (
        <div>
          <p>Olá João</p>
        </div>
      ) : (
        <div>
            <p>Nome não encontrado. É {name} e não João</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
