import { MdMailOutline } from 'react-icons/md';
import { BsGeoAlt } from 'react-icons/bs';
import { nameNavItem } from '@/constants/constants';
import { LuPhoneCall } from 'react-icons/lu';
import { LiaCopyright } from 'react-icons/lia';

const Footer = () => {
  const services = [
    '3-НДФЛ',
    'Бухгалетрское сопровождение',
    'Регистрация ИП и ООО',
    'Заполнение деклараций',
    'Прочие услуги',
  ];
  const navItems = Object.values(nameNavItem);
  return (
    <footer className="bg-gray-800 md:px-[120px] sm:px-16 px-4 flex flex-col gap-8 pt-14 pb-8 text-white">
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col flex-1 align-baseline justify-center">
          <h2 className="text-5xl">Мой налог</h2>
        </div>
        <div className="flex flex-col flex-1 gap-3">
          <h3 className="text-lime-500 text-sm font-bold">Наши услуги</h3>
          <ul className="flex flex-col gap-1">
            {services.map((service, idx) => (
              <li className="text-sm font-light" key={idx}>
                {service}
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex flex-col gap-3 flex-1">
          {navItems.map((service, idx) => (
            <li
              className="font-bold text-sm uppercase hover:text-sky-700 transition-colors cursor-pointer"
              key={idx}
            >
              {service}
            </li>
          ))}
        </ul>
        <div className="flex flex-col flex-1 gap-2">
          <div className="flex gap-1">
            <div className="pt-1">
              <LuPhoneCall style={{ color: '#6CAC3D' }} />
            </div>
            <div className="flex flex-col text-xs lg:text-base gap-1">
              <div>
                <a className="flex font-semibold" href="tel:+79220987868">
                  <span>+7 (922) 098-78-68</span>
                </a>
              </div>
              <div>
                <span className="block">09:00 - 18:00</span>
                <span className="block">понедельник - пятница</span>
              </div>
              <button className="text-lime-500 text-sm underline text-left">
                Заказать звонок
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <MdMailOutline style={{ color: '#6CAC3D' }} />
            <a href="mailto:">Электронная почта</a>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <BsGeoAlt style={{ color: '#6CAC3D' }} />
            <span className="block">Адрес</span>
          </div>
        </div>
      </div>
      <div className="m-auto text-lime-500 flex gap-2 items-center">
        <LiaCopyright style={{ color: '#6CAC3D' }} />
        <a href="#">2024 МОЙ НАЛОГ</a>
      </div>
    </footer>
  );
};

export default Footer;
