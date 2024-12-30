import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Products, ProductDetail, Cart, LoginPage, RegisterPage, UserProfile, MyOrders, Checkout } from './pages/index.js'
import { Protected } from './components/index.js'
import { store } from "./store/store.js"
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/profile',
        element: (<Protected> <UserProfile /> </Protected>)
      },
      {
        path: '/orders',
        element: (<Protected> <MyOrders /> </Protected>)
      },
      {
        path: '/checkout',
        element: (<Protected> <Checkout /> </Protected>)
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <RegisterPage />
      },
      {
        path: '/product-detail/:slug',
        element: <ProductDetail />
      },
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
