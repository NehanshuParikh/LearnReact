import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import ThemeComponent from './Component/ThemeComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <ThemeComponent />
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
)
