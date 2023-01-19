import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Video from "./components/Video";
import MiApi from "./components/miApi";


const App = () => {

  // const [champs, setChamps] = useState([]);
  // const [search, setSearch] = useState('')

  // const getChamps = async () => {
  //   console.log('***********')
  //   const respuesta = await fetch('http://ddragon.leagueoflegends.com/cdn/13.1.1/data/es_MX/champion.json');
  //   const dataRes = await respuesta.json();

  //   //? como la api trae los valores en objetos, creo un arreglo vacío (arrayChamps) antes de recorrerlo con 'Object.keys'
  //   const arrayChamps = [];

  //   const mappedResults = Object.keys(dataRes.data).map(key => {
  //     const value = dataRes.data[key];
  //     arrayChamps.push(value)
  //     //! Valores (nombre, apodo, estadisticas, roles)
  //     // console.log(value.name)
  //     // console.log(value.title)
  //     // console.log('Ataque: ' + value.info.attack)
  //     // console.log('Defensa: ' + value.info.defense)
  //     // console.log('Magia: ' + value.info.magic)
  //     // console.log('Dificultad: ' + value.info.difficulty)
  //     // console.log('Roles:');
  //     // for (const rol of value.tags) {
  //     //   console.log(rol)
  //     // }
  //     // console.log('***********')
  //   });


  //   console.log(arrayChamps);


  //   setChamps(arrayChamps);
  //   const ordenado = [];
  //   for (const champ of arrayChamps) {
  //     ordenado.push(champ)
  //   }
    
  //   const arrayOrdenado = ordenado.sort((a, b) => {
  //     const nombreA = a.name;
  //     const nombreB = b.name;

  //     if (nombreA > nombreB) {
  //       return -1;

  //     }
  //     if (nombreA < nombreB) {
  //       return 1;
  //     }
  //     return 0;
  //   });

  //   console.log(arrayOrdenado)

  // }




  // useEffect(() => {
  //   getChamps()
  // }, []);

  return (
    <>
      {/* HEADER COMPONENT */}
      <Header></Header>

      {/* VIDEO COMPONENT */}
      <Video></Video>

      {/* TABLE COMPONENT AND FORM */}
      {/* <div className="table-container">
        <section className="form-container">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search"
              placeholder="Aatrox" aria-label="Search" onChange={(e) => setSearch(e.target.value)} value={search}>
            </input>
            <button className="button-52" role="button" type="submit">Buscar Campeón</button>
            <button>Holage</button>
          </form>
        </section>
        <section className="contenedor-tablita">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Ataque</th>
                <th scope="col">Defensa</th>
                <th scope="col">Magia</th>
                <th scope="col">Dificultad</th>
                <th scope="col">Imágen</th>
              </tr>
            </thead>
            <tbody>
              {champs
                .filter((elem) => elem.name.toLowerCase().includes(search.toLocaleLowerCase()))
                .map((item) => {
                  return <tr key={item.id}>
                    <td className="td"><b>{item.name}</b></td>
                    <td className="td">{item.title[0].toUpperCase() + item.title.substring(1)}</td>
                    <td className="td">{item.info.attack}</td>
                    <td className="td">{item.info.defense}</td>
                    <td className="td">{item.info.magic}</td>
                    <td className="td">{item.info.difficulty}</td>
                    <td className="td">
                      <a href={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${item.id}_0.jpg`} target="_blank" rel="noopener noreferrer">
                        <img src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${item.id}.png`} className="card-img-top" alt="..."></img>
                      </a>
                    </td>
                  </tr>
                })}
            </tbody>
          </table>
        </section>
      </div> */}
      <MiApi></MiApi>

      {/* FOOTER */}
      <Footer></Footer>

    </>

  )
}

export default App;