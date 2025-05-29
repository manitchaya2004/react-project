import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme/theme.js'

import { ThemeContextProvider } from './context/contextTheme.jsx'

createRoot(document.getElementById('root')).render(
 <StrictMode>
      <ThemeContextProvider>
          <App />
      </ThemeContextProvider>
  </StrictMode>
)
