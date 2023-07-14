import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './redux/store/Store'
import { Wallet } from './pages/Wallet'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/wallet",
    element: <Wallet/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
