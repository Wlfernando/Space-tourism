import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from '@Components/RootLayout'
import Home from '@Components/Mains/Home/Home'
import { pathDestination } from './utils/routes'
import Destination from '@Components/Mains/Destination/Destination'
import { loadDestination } from './Loader/Loader'

const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  children: [{
    index: true,
    element: <Home />
  },{
    path: pathDestination,
    element: <Destination />,
    loader: loadDestination,
  }]
}])

export default function App() {
  return <RouterProvider router={router} />
}
