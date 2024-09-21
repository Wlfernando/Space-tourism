import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from '@Components/RootLayout'
import Home from '@Components/Mains/Home/Home'
import { place, squad, tech } from './utils/routes'
import Destination from '@Components/Mains/Destination/Destination'
import { loadPlace, loadSquad, loadTech } from './Loader/Loader'
import Crew from '@Components/Mains/Crew/Crew'
import Technology from '@Components/Mains/Technology/Technology'

const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  children: [{
    index: true,
    element: <Home />
  },{
    path: place,
    loader: loadPlace,
    element: <Destination />,
  },{
    path: squad,
    loader: loadSquad,
    element: <Crew />
  },{
    path: tech,
    loader: loadTech,
    element: <Technology />
  }]
}])

export default function App() {
  return <RouterProvider router={router} />
}
