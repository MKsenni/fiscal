'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '../../utils/button';
import { nameNavItems } from '@/constants/constants';

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
          className="px-3 py-2 flex items-center uppercase leading-snug text-slate-900 hover:text-sky-700 transition-colors"
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    window.scrollY > 5 ? setIsSticky(true) : setIsSticky(false);
  };
  const scrollStyle = isSticky
    ? 'bg-white/75 fixed top-0 w-full py-2'
    : 'bg-white py-3 relative';

  const [navbarOpen, setNavbarOpen] = useState(false);
  const closeOnClick = () => setNavbarOpen(false);
  const navItems: navItem[] = [
    { name: nameNavItems.partner, link: '/catalog', close: closeOnClick },
    { name: nameNavItems.service, link: '/catalog', close: closeOnClick },
    { name: nameNavItems.price, link: '/about', close: closeOnClick },
    { name: nameNavItems.promo, link: '#promos', close: closeOnClick },
    { name: nameNavItems.contacts, link: '#contacts', close: closeOnClick },
  ];

  return (
    <header
      className={`${scrollStyle} transition-all duration-300 z-50 shadow-[0_6px_9px_0px_rgba(0,0,0,0.25)]`}
    >
      <nav
        className="mx-auto flex items-center justify-between md:px-[120px] sm:px-16 px-4 gap-3"
        aria-label="Global"
      >
        <div className="w-12 h-12">
          <Link href="/" title="welcome page">
            МОЙ НАЛОГ
          </Link>
        </div>
        <button
          className="cursor-pointer leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <Image
            src="/menu.svg"
            width={50}
            height={50}
            alt="menu"
            className="inline-block"
          />
        </button>
        <div
          className={
            'md:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
          data-testid="nav"
        >
          <ul className="flex flex-col md:flex-row list-none md:ml-auto font-serif">
            {navItems.map((item) => {
              return (
                <NavLink
                  key={item.name}
                  link={item.link}
                  name={item.name}
                  close={item.close}
                />
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col text-center text-xs lg:text-base items-center shrink-0">
          <div>
            <a className="flex font-semibold" href="tel:+79220987868">
              <Image src="/Vector.svg" width={20} height={20} alt="number" />
              <span>+7 (922) 098-78-68</span>
            </a>
          </div>
          <div>
            <span className="block">пн. - пт. 08:30 - 17:00</span>
          </div>
        </div>
        <Button name={'Заказать звонок'} />
      </nav>
    </header>
  );
};

export default Header;
