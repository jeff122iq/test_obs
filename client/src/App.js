import './App.css';
import {useEffect, useState} from "react";
import Axios from "axios"

function App() {
  const [athletes, setAthletes] = useState([])

  useEffect(async () => {
    try {
      const response = await Axios.get("http://localhost:5000/athletes")
      const result = response.data.response
      setAthletes((prev) => [...prev, ...result])
    } catch (e) {
      console.log(e)
    }
  }, [])
  console.log(athletes)
  return (
    <div className="App">
      {/*<ul>*/}
      {/*{athletes.map((item, idx) => {*/}
      {/*  return (*/}
      {/*    <div>*/}
      {/*      <h1>{item.city} {item.year}</h1>*/}
      {/*      <h3>{item.names} </h3>*/}
      {/*    </div>*/}
      {/*  )*/}
      {/*})}*/}
      {/*</ul>*/}
    </div>
  );
}

export default App;
