import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
const ThemeComponent = () => {

   const { theme, ToggleTheme } = useContext(ThemeContext)
  return (
    <div style={{ width:'100vw', height:'100vh', backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white'}}>
        ThemeComponent
        <button onClick={ToggleTheme}>Change The Theme</button>    
    </div>
  )
}

export default ThemeComponent