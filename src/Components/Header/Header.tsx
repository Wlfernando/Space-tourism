import Nav from "@Nav"
import './Header.css'
import Button from "@Components/Button/Button";
import { useEffect, useState } from "react";
import { linksNav } from "../../utils/routes";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [active, setActive] = useState<boolean>(false);
  const { key, pathname } = useLocation();
  const [path, setPath] = useState('');

  useEffect(() => {
    const nav = pathname.split('/')[1];

    if (path !== nav) {
      setPath(nav);
      setTimeout(setActive, 200, false);
    }
  }, [key])

  return (
    <>
      <header className="header">
        <svg className="header__logo" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/>
            <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
          </g>
        </svg>
        <hr className="header__line" />
        <Button hamburger active={active} onClick={() => setActive(!active)} />
        <Nav classMod='navigation' active={active} links={linksNav} />
      </header>
    </>
  )
}
