import { createContext, useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({  children })=>{
    const [theme, setTheme] = useState('light')

    const ToggleTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return(
        <ThemeContext.Provider value={{ theme, ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }