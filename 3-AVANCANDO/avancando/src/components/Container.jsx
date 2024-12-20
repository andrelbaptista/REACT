

const Container = ({children}) => {
  return (
    <div>
        <h1>Conteúdo do componente pai é este</h1>
        {children}
    </div>
  )
}

export default Container