import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ResultsContextProvider from './contexts/ResultsContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <ResultsContextProvider>
 <Router>
    <App />
  </Router>,
  </ResultsContextProvider>
)
