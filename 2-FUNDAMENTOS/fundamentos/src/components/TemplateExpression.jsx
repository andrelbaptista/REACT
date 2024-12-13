// import React from 'react'

const TemplateExpression = () => {

    const name = "Andre Baptista";
    const data = {
        age: 55,
        job: "Programador"
    }

  return (
    <div className="App">
        <p>A soma é { 2+2}</p>
        <h3>Seja bem-vindo {name} </h3>
        <p>Sua idade é {data.age} e sua profissão é {data.job}.</p>
    </div>
  )
}

export default TemplateExpression