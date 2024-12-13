import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// importando componentes
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'
import MyComponents from './components/MyComponents'
import Events from './components/Events'

function App() {
  // comentario fora do JSX

  return (
    // coment'ario fora do jsx
    <div className="App">
      {/* coment'ario no jsx */}
      <h1>Fundamentos do REACT</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponents/>
      <Events/>
    </div>
  )
}

export default App
