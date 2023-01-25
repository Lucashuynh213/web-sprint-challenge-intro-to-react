import React, {useState , useEffect} from 'react';
import axios from "axios"
import Character from "./components/Character"
import Details from "./components/Details";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [data, setData] = useState([]);
const [currentData, setCurrentData] = useState(null)

const openDetails = name => {
  setCurrentData(name)
}
const closeDetails = () => {
  setCurrentData(null)
}
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 

useEffect(() => {
  axios.get(`https://swapi.dev/api/people/`)
    .then(res => {
      console.log(res.data);
      setData(res.data);
    })
    .catch(err => console.error(err));
},[])
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className='Header'>CHARACTERS</h1>
      {data.map(character => {
        return <Character info={character} key={character.id} openDetails={openDetails}/>
  })}
      {
        currentData && <Details characterName={currentData} close={closeDetails}  />
      }
    </div>
  );
}



export default App;
