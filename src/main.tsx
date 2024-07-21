import React from 'react'
import ReactDOM from 'react-dom/client'
import { DirectionProvider } from '@radix-ui/react-direction'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import '@/utils/ui/chartInit'

ReactDOM.createRoot(document.getElementById('rasamiot')!).render(
  <React.StrictMode>
    <DirectionProvider dir='rtl'>
      <HashRouter>
        <App />
      </HashRouter>
    </DirectionProvider>
  </React.StrictMode>,
)
