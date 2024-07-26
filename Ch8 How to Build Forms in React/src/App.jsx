import { useState } from "react";

function App() {

  const [userName, setuserName] = useState()

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (userNameError) {
      alert("From Unable to submit: Fill The form Correctly")
    } else {
      alert("Form Submitted Successfully")
    }
  }

  const [userNameError, setuserNameError] = useState()

  const handleUserName = (e)=>{
    const value = e.target.value
    setuserName(value)

    if (value.length < 8) {
      setuserNameError('Username should have 8 characters')
    } else {
      setuserNameError()
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={userName} onChange={handleUserName} />
      <h1>Username: {userName}</h1>
      <p>{userNameError}</p>
      <button>Submit</button>
    </form>
    </>
  )

}

export default App