import React from 'react'
import ReactDOM from 'react-dom/client'
import GeneralInformation from './GeneralInformation'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GeneralInformation />
  <App />
  </React.StrictMode>,
)


//Local:   http://localhost:5173/
//npm run dev -> think this runs the server