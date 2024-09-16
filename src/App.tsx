import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from '@Components/RootLayout'
import Home from '@Components/Mains/Home/Home'

const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  children: [{
    index: true,
    element: <Home />
  }]
}])

export default function App() {
  return <RouterProvider router={router} />
}
