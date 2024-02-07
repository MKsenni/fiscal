'use client';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import Image from 'next/image';

type navItem = {
  name: string;
  link?: string | '';
  close: () => void;
};

function NavLink({
  name,
  link,
  close,
}: {
  name: string;
  link?: string;
  close: () => void;
}) {
  return (
    <li className="nav-item">
      {link && (
        <Link
          className="px-3 py-2 flex items-center uppercase leading-snug text-slate-900 hover:text-sky-700"
          href={link}
          onClick={close}
        >
          <span className="ml-2">{name}</span>
        </Link>
      )}
    </li>
  );
}

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    window.scrollY > 5 ? setIsSticky(true) : setIsSticky(false);
  };
  const scrollStyle = isSticky
    ? "bg-white/75 py-2 fixed top-0 w-full"
    : "bg-white py-5";

  const [navbarOpen, setNavbarOpen] = useState(false);
  const closeOnClick = () => setNavbarOpen(false);
  const navItems: navItem[] = [
    { name: 'Партнеры', link: '/catalog', close: closeOnClick },
    { name: 'Услуги', link: '/catalog', close: closeOnClick },
    { name: 'Цены', link: '/about', close: closeOnClick },
    { name: 'Акции', link: '/account', close: closeOnClick },
    { name: 'Контакты', link: '/login', close: closeOnClick },
  ];

  return (
    <header className={`${scrollStyle} transition-colors z-50 shadow-[0_6px_9px_0px_rgba(0,0,0,0.25)]`}>
      <nav className="mx-auto flex items-center justify-between px-6 lg:px-8 gap-3"
        aria-label="Global">
          <div className="w-12 h-12 hover:rotate-90 transition-transform">
          <Link href="/" title="welcome page">
            SOME ICON
          </Link>
        </div>
        <button
              className="cursor-pointer leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Image src="/menu.svg" width={50} height={50} alt="menu" className="inline-block" />
            </button>
            <div className={'md:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')} data-testid="nav">
            <ul className="flex flex-col md:flex-row list-none md:ml-auto font-serif">
              {navItems.map((item) => {
                return (
                  (
                    <NavLink
                      key={item.name}
                      link={item.link}
                      name={item.name}
                      close={item.close}
                    />
                  )
                );
              })}
            </ul>
          </div>
          <div className='flex flex-col text-center text-xs lg:text-base'>
            <div>
              <a className='flex font-semibold' href="tel:+79220987868">
                <Image src='/Vector.svg' width={20} height={20} alt="number"/>
                <span>+7 (922) 098-78-68</span>
              </a>
            </div>
            <div>
              <span className='block'>09:00 - 18:00</span>
              <span className='block'>понедельник - пятница</span>
            </div>
          </div>
          <button className='text-green-500 py-1 px-5 border-spacing-1 border-2 rounded border-green-500 hover:bg-green-500 hover:text-white transition'>Заказать звонок</button>
      </nav>
    </header>
  )
}

export default Header