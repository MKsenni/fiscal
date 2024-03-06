import {
  contentServicesListIP,
  contentServicesListLTD,
} from '@/constants/constants';
import Subtitle from '../subtitle';
import Package from './package';
import { ServicesPackagesType } from '@/types/types';

const Packages = () => {
  const services: ServicesPackagesType[] = [
    contentServicesListIP,
    contentServicesListLTD,
  ];

  return (
    <section className="md:px-[120px] sm:px-16 px-4 my-[70px] flex flex-col gap-12">
      <Subtitle name={'Пакетные услуги'} />
      <ul className="flex flex-wrap gap-5 justify-center over">
        {services.map((service, idx) => (
          <Package
            key={idx}
            subtitle={service.subtitle}
            description={service.description}
            services={service.services}
          />
        ))}
      </ul>
    </section>
  );
};

export default Packages;
