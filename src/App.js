import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import Boton from "./Componentes/Boton.jsx";
import Inputcom from "./Componentes/Inputcom.jsx";

function App() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');

  const BotonForm = () => {
    if (password === '252525') {
      return (<Boton></Boton>)
    } else {
    return (<></>)
    }
  }

  return (
    <div className="App">
      <h1 className="tituloLabel">Desafio de estados y componentes</h1>
      <Inputcom
        nombre={nombre}
        setNombre={setNombre}
        password={password}
        setPassword={setPassword}
        >

      </Inputcom>
      <BotonForm></BotonForm>


    <footer className="footerM">@Mantrel 2023</footer>
    </div>
  );
}

export default App;
