import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Video from "./components/Video";
import MiApi from "./components/MiApi";



const App = () => {

  const [champs, setChamps] = useState([]);
  const [search, setSearch] = useState('');


  return (
    <>
      {/* HEADER COMPONENT */}
      <Header></Header>

      {/* VIDEO COMPONENT */}
      <Video></Video>

      {/* TABLE COMPONENT AND FORM */}      
      <MiApi champs={champs} setChamps={setChamps} search={search} setSearch={setSearch}></MiApi>

      {/* FOOTER */}
      <Footer></Footer>

    </>

  )
}

export default App;