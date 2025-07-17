import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const container = document.createElement('div')
container.id = 'my-widget-root'
document.body.appendChild(container)

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
