import { NavLink } from "react-router-dom";
import './Nav.css'

export default function Nav({
  links,
  classMod,
  active = false,
}: {
  links: readonly string[][],
  classMod: string;
  active?: boolean;
}) {
  return (
    <>
    <nav className={`nav nav_type_${classMod}${active ? ` nav_active` : ''}`}>
      <ol className='nav__list'>
        {links.map(([link, text]) =>
          <li key={link} className="nav__item" >
            <NavLink className='nav__anchor' to={link} >{text}</NavLink>
          </li>
        )}
      </ol>
    </nav>
    </>
  )
}