import { useEffect, useState } from "react";

const App = () => {

  const [datos, setDatos] = useState({});

  const getData = async() => {
    //const response = await fetch('https://randomuser.me/api/');
    const response = await fetch('https://rickandmortyapi.com/api/character/?page=13');
    const data = await response.json();
    console.log(data.results[0])
    setDatos(data.results[0]);
  }



  //! El useEffect tiene como prioridad ser una función 'limpiadora', también se ejecuta
  //! al estar pendiente y escuchar ciertos componentes, pero principalmente sirve para
  //! la utilización de fetch y conección con apis ya que al crearse, SIEMPRE se ejecuta
  //! al menos una vez
  useEffect(() => {
    console.log("useEffect");
    getData();
  }, [])

  return (
    <div>
      <h1>Hola Señor: {datos.name}</h1>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  )
}

export default App;