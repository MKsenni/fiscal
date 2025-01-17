import { ServicesPackagesType, ServicesType } from '@/types/types';

export const nameNavItems = {
  partner: 'Партнеры',
  service: 'Услуги',
  promo: 'Акции',
  contacts: 'Контакты',
};

const commonService = 'Ведение кадрового учета работников 200 руб / чел';

export const contentServicesListIP: ServicesPackagesType = {
  subtitle: 'Бухгалетрское сопровождение ИП',
  description:
    'Услуги на условиях аутсорсинга. Берем на себя комплексное сопровождение бухгалтерии, подготовку и сдачу отчетности в контролирующие органы, восстановление бухучета и другие виды работ.',
  services: [
    'ИП УСН Доходы от 4500 руб - квартал',
    'ИП УСН Доходы минус расходы от 6000 руб / квартал',
    'ИП ОСНО от 8000 руб / квартал',
    commonService,
  ],
};

export const contentServicesListLTD: ServicesPackagesType = {
  subtitle: 'Бухгалетрское сопровождение ООО',
  description:
    'Услуги по комплексному бухгалтерскому обслуживанию представляют собой весь комплекс работ по бухгалтерскому и налоговому учету предприятия. Кроме того, наши специалисты представят ваши интересы в налоговой инспекции, фондах, государственных структурах.',
  services: [
    'ООО УСН Доходы от 3000 руб - месяц',
    'ООО УСН Доходы минус расходы от 5000 руб / месяц',
    'ООО ОСНО от 10000 руб / месяц',
    commonService,
  ],
};

export const blockService = {
  ndfl: '3 - НДФЛ',
  registration: 'Регистрация ИП и ООО',
  declaration: 'Заполнение деклараций',
  etcServices: 'Прочие услуги',
};

export const services: ServicesType = {
  ndfl: [
    { name: 'Имущественный вычет', price: '800' },
    { name: 'Социальный вычет', price: '800' },
    { name: 'Вычет по ИИС', price: '800' },
    { name: 'Строительство дома', price: '1000' },
    { name: 'Продажа имущества (кроме недвижимого имущества)', price: '700' },
    { name: 'Продажа недвижимого имущества', price: '1000' },
    {
      name: 'За каждый дополнительно заявленный вида вычета в одном налоговом периоде',
      price: '200',
    },
    {
      name: 'Составление заявления о распределении имущественного вычета',
      price: '300',
    },
    {
      name: 'Составление пояснений об отсутствии обязанности представления декларации',
      price: 'от 600',
    },
  ],
  registration: [
    {
      name: 'Регистрация ООО с одним учредителем через сервис банка-партнера',
      price: '1000',
    },
    { name: 'Регистрация ИП с через сервис банка-партнера', price: '500' },
    {
      name: 'Заявление о государственной регистрации юридического лица в качестве ИП',
      price: '400',
    },
    { name: 'Уведомление о переходе на УСН', price: '300' },
    {
      name: 'Заявление о прекращении физическим лицом деятельности в качестве ИП',
      price: '400',
    },
  ],
  etcServices: [
    { name: 'Восстановление бухгалтерского учета', price: 'от 5000' },
    { name: 'Составление типового трудового договора', price: '600' },
    {
      name: 'Досудебное обжалование актов / решений налоговых органов',
      price: 'от 1000',
    },
    { name: 'Ответ на требования налоговых органов', price: 'от 500' },
    { name: 'Внесение изменений в ЕГРИП / ЕГРН', price: 'от 400' },
    {
      name: 'Помощь в получении банковской гарантии',
      price: '1 % от стоимости услуги',
    },
    { name: 'Услуги копирования, прокат', price: '20' },
  ],
};

export const chooseItems = [
  {
    title: 'Ответственность',
    description: 'Несем полную материальную ответственность за качество услуг',
  },
  {
    title: 'Универсальность',
    description:
      'Обслуживаем клиентов комплексно, выполняя весь спектр бухгалтерских услуг',
  },
  {
    title: 'Гарантия',
    description:
      'Гарантируем грамотное ведение учета, соблюдение сроков сдачи отчетности компании',
  },
  {
    title: 'Персонализация',
    description: 'Находим лучшие решения для оптимизации расходов',
  },
  {
    title: 'Качество',
    description:
      'Знаем все законы, нормы и правила. Тщательно следим за изменениями',
  },
];

export const promos = [
  {
    src: '/grands.jpg',
    title: '10% на заполнение декларации 3-НДФЛ для пенсионеров',
  },
  {
    src: '/new_clients.jpg',
    title: '50% на первый месяц бухгалтерского обслуживания',
  },
  {
    src: '/businessman-working-on-laptop.jpg',
    title: 'Рутокен+ЭЦП в подарок при регистрации бизнеса через Сбербанк',
  },
  { src: '/all_clients.jpg', title: 'Регистрация ООО и ИП БЕСПЛАТНО' },
];

export const calculatorBlocks = [
  {
    title: 'Организационно-правовая форма',
    items: [
      {
        desc: 'Индивидуальный предприниматель',
        checked: true,
        isIP: true,
        isOOO: true,
        isOSNO: true,
      },
      {
        desc: 'Общество с ограниченной ответственностью',
        checked: false,
        isIP: true,
        isOOO: true,
        isOSNO: true,
      },
    ],
    name: 'opf',
  },
  {
    title: 'Вид налогообложения',
    items: [
      {
        desc: 'УСН Доходы',
        checked: true,
        isIP: true,
        isOOO: true,
        isOSNO: true,
      },
      {
        desc: 'УСН Доходы минус Расходы',
        checked: false,
        isIP: true,
        isOOO: true,
        isOSNO: true,
      },
      { desc: 'ОСНО', checked: false, isIP: true, isOOO: true, isOSNO: true },
    ],
    name: 'kind',
  },
  {
    title: 'Количество сотрудников',
    items: [
      { desc: '0', checked: true, isIP: true, isOOO: false, isOSNO: false },
      { desc: '1', checked: true, isIP: false, isOOO: true, isOSNO: false },
      {
        desc: 'от 1 до 5',
        checked: true,
        isIP: false,
        isOOO: false,
        isOSNO: true,
      },
      {
        desc: '2 - 5',
        checked: false,
        isIP: false,
        isOOO: true,
        isOSNO: false,
      },
      { desc: 'до 5', checked: false, isIP: true, isOOO: false, isOSNO: false },
      {
        desc: 'свыше 5',
        checked: false,
        isIP: false,
        isOOO: false,
        isOSNO: true,
      },
      {
        desc: '5 - 10',
        checked: false,
        isIP: true,
        isOOO: true,
        isOSNO: false,
      },
      {
        desc: 'свыше 10',
        checked: false,
        isIP: true,
        isOOO: true,
        isOSNO: false,
      },
    ],
    name: 'personale',
  },
  {
    title: 'Количество операций в месяц, шт',
    items: [
      { desc: 'до 10', checked: true, isIP: true, isOOO: true, isOSNO: true },
      {
        desc: '10 - 20',
        checked: false,
        isIP: true,
        isOOO: true,
        isOSNO: true,
      },
      {
        desc: 'более 20',
        checked: false,
        isIP: true,
        isOOO: true,
        isOSNO: true,
      },
    ],
    name: 'operations',
  },
];
