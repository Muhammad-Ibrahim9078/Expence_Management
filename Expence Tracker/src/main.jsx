import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Income from './pages/Income.jsx'
import Expense from './pages/Expense.jsx'
import Sidebar from './components/Sidebar.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />, // Layout ke andar pages render honge
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/income", element: <Income /> },
      { path: "/expence", element: <Expense /> },
    ]
  },
  {
    path: "/app",
    element: <App /> 
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)