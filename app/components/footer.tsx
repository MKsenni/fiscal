import { MdMailOutline } from 'react-icons/md';
import { BsGeoAlt } from 'react-icons/bs';
import { nameNavItems } from '@/constants/constants';
import { LuPhoneCall } from 'react-icons/lu';
import { LiaCopyright } from 'react-icons/lia';
import { SlSocialVkontakte } from 'react-icons/sl';
import { SiViber, SiWhatsapp } from 'react-icons/si';

const Footer = () => {
  const services = [
    '3-НДФЛ',
    'Бухгалетрское сопровождение',
    'Регистрация ИП и ООО',
    'Заполнение деклараций',
    'Прочие услуги',
  ];
  const navItems = Object.values(nameNavItems);
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
              className="font-bold text-sm uppercase hover:text-sky-800 transition-colors cursor-pointer"
              key={idx}
            >
              {service}
            </li>
          ))}
        </ul>
        <div id="contacts" className="flex flex-col flex-1 gap-2">
          <div className="flex gap-1">
            <div className="pt-1 shrink-0">
              <LuPhoneCall style={{ color: '#6CAC3D' }} />
            </div>
            <div className="flex flex-col text-xs lg:text-base gap-1">
              <div>
                <a
                  className="flex font-semibold"
                  href="tel:+79220987868"
                  target="_blank"
                >
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
            <MdMailOutline style={{ color: '#6CAC3D', flexShrink: 0 }} />
            <a href="mailto:Finexo72@mail.ru" target="_blank">
              Finexo72@mail.ru
            </a>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <BsGeoAlt style={{ color: '#6CAC3D', flexShrink: 0 }} />
            <a
              href="https://yandex.ru/maps/-/CDBtbVIN"
              target="_blank"
              className="block"
            >
              625001 Тюмень, Ямская улица, 96А корпус 1, офис 500
            </a>
          </div>
          <div className="flex flex-row gap-3 items-center pl-5">
            <a href="https://vk.com/id734428076" target="_blank">
              <SlSocialVkontakte style={{ color: '#6CAC3D' }} />
            </a>
            <a href="https://vk.com/id734428076" target="_blank">
              <SiViber style={{ color: '#6CAC3D' }} />
            </a>
            <a href="https://vk.com/id734428076" target="_blank">
              <SiWhatsapp style={{ color: '#6CAC3D' }} />
            </a>
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
