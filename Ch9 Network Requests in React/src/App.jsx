import { useEffect, useState } from "react"

function App() {
  
  const [title, setTitle] = useState()

  const getData = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const task = await response.json()
    console.log(task)
    setTitle(task.title)
  }

  useEffect(()=> {getData()},[])


  return <h1>{title}</h1>

}

export default App