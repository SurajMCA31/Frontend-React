
import './App.css'
import Home from './Home/Home';

function App() {
  //javascript code
  const userName="Jonh";

  return (
    <>
      <Home />
      <h2 style={{color:"red"}} >Intro to React</h2>
      <h3>userName:{userName}</h3>
    </>
  )
}

export default App
