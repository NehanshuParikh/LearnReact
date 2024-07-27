import Home from "./Section/Home"
import About from "./Section/About"
import Contact from "./Section/Contact"
import Navbar from "./Components/Navbar"
import { Routes, Route } from "react-router-dom"

function App() {
    return (
        <>
        <Routes>
            <Route exact path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/contact' Component={Contact} />
        </Routes>
        </>
    )
}

export default App