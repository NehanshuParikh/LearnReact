import { useState } from "react";

function App() {

  const [count, setcount] = useState(0)
  const [username, setusername] = useState('Default User')

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=> setcount(count + 1) } >Increment</button>
      <ChildComponent username={username} setusername={setusername} />
    </>
  )


}

function ChildComponent({username, setusername}) {
  return (
    <>
      <h1>Hello {username}</h1>
      <button onClick={()=> setusername('Nehanshu')}>Change user</button>
    </>
  )
}

export default App
