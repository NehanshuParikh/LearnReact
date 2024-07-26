import { useState } from "react";

function App() {

    const [loggedin, setloggedin] = useState(true)
    const loginText = <h1>User Logged in Successfully</h1>
    const logoutText = <h1>User Logged out Successfully</h1>


    return (
      <>
        {loggedin ? loginText : logoutText}
        {loggedin ? <button onClick={()=> setloggedin(false)}>Logout Yourself</button> : <button onClick={()=> setloggedin(true)}>Login Yourself</button> }
      </>
    )
 

}


export default App
