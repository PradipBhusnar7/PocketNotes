import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import WidthProvider from './Components/Setting/WidthProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WidthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WidthProvider>
  </React.StrictMode>,
)
