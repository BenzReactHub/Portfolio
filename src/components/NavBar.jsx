/* eslint-disable react/prop-types */
import { createContext, useContext, useRef, useState } from 'react';
import LogoSvg from '../assets/logo.svg';
import MenuSvg from '../assets/nav-menu.svg';
import CancelSvg from '../assets/cancel.svg';

function NavBar() {
  return (
    <Nav>
      <Nav.Item url="#projects" text="Projects" />
      <Nav.Item url="#about" text="About" />
      <Nav.Logo styles="hidden sm:block" />
      <Nav.Item url="#blog" text="Blog" />
      <Nav.Item url="#github" text="Github" />
      <Nav.Cancel styles="sm:hidden" />
    </Nav>
  );
}

const NavContext = createContext();

function Nav({ children }) {
  const [isToggle, setIsToggle] = useState(false);
  const activeLinkRef = useRef(null);  

  const close = () => setIsToggle(false);
  function handleToggle() {
    setIsToggle((toggle) => !toggle);
  }

  function handleClick(e) {
    e.preventDefault();
    // console.log(e.currentTarget)
    // console.log(e.target)
    // console.log(activeLinkRef.current)
    if (e.target.tagName.toLowerCase() !== 'a') return;
    // 移除之前的活動狀態
    if (activeLinkRef.current) {
      activeLinkRef.current.classList.remove('sm:text-[#00619A]');
      activeLinkRef.current.classList.remove('sm:bg-[#E6EEF5]');
    }

    const btn = e.target.parentNode;
    activeLinkRef.current = btn;
    activeLinkRef.current.classList.add('sm:text-[#00619A]');
    activeLinkRef.current.classList.add('sm:bg-[#E6EEF5]');
    const id = e.target.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <NavContext.Provider value={{ isToggle, close, toggle: handleToggle }}>
      <nav>
        <ul className="bg-primary rounded-lg p-2 text-lg sm:rounded-full sm:p-3 md:p-4">
          <ul className="flex justify-between">
            <li className="sm:hidden">
              <Nav.Logo />
            </li>
            <li className="sm:hidden">
              <Nav.Menu />
            </li>
          </ul>
          <ul
            onClick={(e) => handleClick(e)}
            className="hidden sm:flex sm:items-center sm:justify-around"
          >
            {children}
          </ul>
          <ul
            className={`duration-350 transition-all delay-500 sm:hidden ${
              isToggle
                ? 'duration-800 max-h-[20rem] opacity-100 ease-in'
                : 'duration-800 invisible max-h-0 opacity-0 ease-out'
            }`}
          >
            {children}
          </ul>
        </ul>
      </nav>
    </NavContext.Provider>
  );
}

function Logo({ styles }) {
  return (
    <img
      className={`animate-spin-slow ${styles} sm:h-[3.5rem] md:h-[4rem]`}
      src={LogoSvg}
      alt="Logo"
    />
  );
}

function Menu() {
  const { toggle } = useContext(NavContext);
  return <img src={MenuSvg} onClick={toggle} alt="Nav Menu" />;
}

function Item({ text, url }) {
  const { close } = useContext(NavContext);
  return (
    <li
      onClick={close}
      className="cursor-pointer border-b-2 px-1 py-3 font-black text-white sm:rounded-full sm:border-none sm:px-3 sm:py-3 sm:text-2xl sm:hover:bg-[#E6EEF5] sm:hover:text-[#00619A] md:px-5 lg:px-6 lg:text-3xl"
    >
      <a href={url}>{text}</a>
    </li>
  );
}

function Cancel({ styles }) {
  const { toggle } = useContext(NavContext);
  return (
    <img
      className={`px-1 py-3 hover:animate-spin-click ${styles}`}
      src={CancelSvg}
      onClick={toggle}
      alt="Cancel"
    />
  );
}

Nav.Logo = Logo;
Nav.Menu = Menu;
Nav.Item = Item;
Nav.Cancel = Cancel;

export default NavBar;
