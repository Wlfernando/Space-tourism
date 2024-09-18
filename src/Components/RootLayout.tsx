import { Outlet } from "react-router-dom"
import Header from "./Header/Header"

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <footer >
        <p style={{color: 'var(--blue-300)', textAlign: 'center'}}>&copy; 2024. Fernando A. Malfavón</p>
      </footer>
    </>
  )
}