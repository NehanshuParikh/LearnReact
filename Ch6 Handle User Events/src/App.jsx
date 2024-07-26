import { useState } from "react";

function App() {

  const [isParagraphVisible, setisParagraphVisible] = useState(true)

  function changeVisibility() {
    setisParagraphVisible(!isParagraphVisible)
  }

  return (
    <>

      {isParagraphVisible && (
        <p>On clicling the button this paragraph will hide and show accordingly</p>
      )}

      <button onClick={changeVisibility}>Change Visibility</button>
    
    </>
  )

}

export default App