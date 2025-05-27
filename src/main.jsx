import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Routes/Router.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import LikeProvider from './context/LikesProvider.jsx'
import ThemeProvider from './context/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <LikeProvider>
        <AuthProvider>
          <RouterProvider router={router} ></RouterProvider>
        </AuthProvider>
      </LikeProvider>
    </ThemeProvider>
  </StrictMode>,
)
