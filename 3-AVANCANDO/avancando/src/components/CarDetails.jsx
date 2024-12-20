

const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h3>Detalhes do carro:
            <ul>
                <li>Marca: {brand}</li>
                <li>Kilometragem: {km}</li>
                <li>Cor: {color}</li>
            </ul>
        </h3>
    </div>
  )
}

export default CarDetails