import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from '@Components/RootLayout'
import Home from '@Components/Mains/Home/Home'
import { place } from './utils/routes'
import Destination from '@Components/Mains/Destination/Destination'
import { LoadPlace } from './Loader/Loader'

const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  children: [{
    index: true,
    element: <Home />
  },{
    path: place,
    loader: LoadPlace,
    element: <Destination />,
  }]
}])

export default function App() {
  return <RouterProvider router={router} />
}
