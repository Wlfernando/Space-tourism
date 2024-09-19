import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from '@Components/RootLayout'
import Home from '@Components/Mains/Home/Home'
import { destination, place } from './utils/routes'
import Destination from '@Components/Mains/Destination/Destination'
import { LoadPlace, loadDestination } from './Loader/Loader'

const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  children: [{
    index: true,
    element: <Home />
  },{
    path: destination,
    element: <Outlet />,
    loader: loadDestination,
    children: [{
      loader: LoadPlace,
      path: place,
      element: <Destination />,
    }]
    
  }]
}])

export default function App() {
  return <RouterProvider router={router} />
}
