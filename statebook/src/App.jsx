import {useState} from 'react'
import './App.css'
import Home from './Home/Home'
import Navbar from './Home/Navbar'

function App() {
  
const [count, setCount] = useState(0)
  return (
    <>
      <h2 className="text-center">Introduction to State</h2>
      <Navbar setCount={setCount} />
      <h2 className='container bg-light p-2 rounded'>count here :{count}</h2>
      <button className="btn btn-primary mx-2" onClick={()=> setCount(count + 1)}>increase</button>
      <button className="btn btn-success mx-2" onClick={()=> setCount(count - 1)}>decrease</button>
      <button className="btn btn-danger mx-2" onClick={()=> setCount(0)}>reset</button>
      <Home appCount={count} setCount={setCount}/>
    </>
  )
}

export default App
