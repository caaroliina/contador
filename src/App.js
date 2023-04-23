import './App.css';
import "./css/Boton.css"
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks (numClicks + 1);
  };

  const ReiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='titulo'> 
        <h1> Contador </h1>
      </div>

      <div className="contenedor-contador"> 
      <Contador 
        numClicks={numClicks} />

      <Boton 
        texto = {"Click"}
        esBotonDeclick = {true}
        manejarClick = { manejarClick } />

      <Boton 
        texto = {"Reiniciar"}
        esBotonDeclick = {false}
        manejarClick = { ReiniciarContador } />

      </div>

    </div>
  );
}

export default App;
