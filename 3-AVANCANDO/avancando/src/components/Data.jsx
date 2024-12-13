import { useState } from "react";

const Data = () => {
    let someData = 10;

    // usando useState pra alterar o valor da variável
    const [anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            {/* o valaor da variável não muda sem useState */}
            <button onClick={() => (someData=15)}>Mudar valor</button>
        </div>
        {/* userState funciona como uma variável normal */}
        <div>
            <p>Valor: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(20)}>Mude o valor useState</button>
           
        </div>
    </div>
  )
}

export default Data