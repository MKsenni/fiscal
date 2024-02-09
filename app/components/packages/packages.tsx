import Subtitle from '../../utils/subtitle';
import Package from './package';

const Packages = () => {
  const servicesListIP = [
    'ИП УСН Доходы от 4500 руб - квартал',
    'ИП УСН Доходы минус расходы от 6000 руб / квартал',
    'ИП ОСНО от 8000 руб / квартал',
  ];
  const servicesListLTD = [
    'ООО УСН Доходы от 3000 руб - месяц',
    'ООО УСН Доходы минус расходы от 5000 руб / месяц',
    'ООО ОСНО от 10000 руб / месяц',
  ];
  const services = [
    {
      subtitle: 'Бухгалетрское сопровождение ИП',
      description:
        'Такой тип ремонта подойдет, если требкеться отремонтировать квартиру: выровнять стены, сделать стяжку полов, проложить инженерию и выполнить чистовую отделку.',
      services: servicesListIP,
    },
    {
      subtitle: 'Бухгалетрское сопровождение ООО',
      description:
        'Такой тип ремонта подойдет, если требкеться отремонтировать квартиру: выровнять стены, сделать стяжку полов, проложить инженерию и выполнить чистовую отделку.',
      services: servicesListLTD,
    },
  ];

  return (
    <div className="md:px-[120px] sm:px-16 px-4 my-[70px] flex flex-col gap-12">
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
    </div>
  );
};

export default Packages;
