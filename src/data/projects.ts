export type Screenshot = {
  src: string;
  width: number;
  height: number;
  alt: { ru: string; en: string };
  caption: { ru: string; en: string };
};

export type Project = {
  slug: string;
  name: string;
  category: 'Приложения' | 'Веб-сайты';
  kind: string;
  subtitle: string;
  description: string;
  stack: string[];
  color: string;
  mark: string;
  nodes: [string, string, string];
  context: string;
  system: { title: string; text: string }[];
  screenshots?: Screenshot[];
};

// Only projects explicitly selected with the owner belong in this public dataset.
// Figures, employment claims and outcomes must be confirmed before adding them.
export const projects: Project[] = [
  {
    slug: 'amelia', name: 'Amelia', category: 'Приложения', kind: 'Мобильный цветочный магазин',
    subtitle: 'Магазин в телефоне. Управление — в браузере.',
    description: 'Цветочный магазин в телефоне: букеты, категории и корзина. За приложением — API и инструменты управления магазином.',
    stack: ['Flutter', 'TypeScript', 'Express', 'Prisma', 'Vue'],
    color: 'rose', mark: 'a.', nodes: ['Приложение', 'API магазина', 'Админка'],
    context: 'Помочь покупателю выбрать букет в приложении, а сотрудникам — работать с каталогом и заказами через административную панель. Мобильную и внутреннюю части связывает серверный API.',
    screenshots: [{ src: 'projects/amelia/01-catalog.webp', width: 562, height: 1280, alt: { ru: 'Amelia: каталог букетов с ценами и категориями', en: 'Amelia: bouquet catalogue with prices and categories' }, caption: { ru: 'Мобильное приложение — каталог букетов', en: 'Mobile app — bouquet catalogue' } }],
    system: [
      { title: 'Мобильный клиент', text: 'Flutter-приложение — пользовательская часть магазина для мобильных устройств.' },
      { title: 'Серверная часть', text: 'API на Express и TypeScript. Prisma связывает серверную модель с базой данных.' },
      { title: 'Управление магазином', text: 'Отдельное веб-приложение на Vue для административных сценариев.' },
    ],
  },
  {
    slug: 'vratarnitsa', name: 'Вратарница', category: 'Приложения', kind: 'Сайт и мобильный сервис прихода',
    subtitle: 'Сайт, приложение и управление в одной системе.',
    description: 'Цифровой сервис прихода: информация о храме, молитвослов, подача записок и пожертвования. Сайт и мобильный интерфейс связаны с общей системой.',
    stack: ['Nuxt', 'Vue', 'Node.js', 'TypeScript', 'MySQL'],
    color: 'sand', mark: 'В', nodes: ['Сайт и клиент', 'Серверный API', 'Управление'],
    context: 'Сделать информацию и сервисы прихода доступными с компьютера и телефона. Посетитель может познакомиться с храмом и перейти к нужному действию; сервер и административная панель связывают интерфейсы с внутренней работой продукта.',
    screenshots: [
      { src: 'projects/vratarnitsa/01-desktop.webp', width: 1680, height: 868, alt: { ru: 'Вратарница: сайт храма с основными сервисами', en: 'Vratarnitsa: parish website and its main services' }, caption: { ru: 'Главная страница — версия для компьютера', en: 'Home page — desktop layout' } },
      { src: 'projects/vratarnitsa/02-mobile.webp', width: 358, height: 775, alt: { ru: 'Вратарница: мобильная версия сайта с навигацией', en: 'Vratarnitsa: mobile layout and navigation' }, caption: { ru: 'Мобильная версия — те же сервисы на узком экране', en: 'Mobile layout — the same services on a smaller screen' } },
    ],
    system: [
      { title: 'Веб-интерфейс', text: 'Nuxt и Vue используются для пользовательской части продукта.' },
      { title: 'Мобильное направление', text: 'В проекте есть мобильные клиенты на Flutter и Capacitor — разные этапы развития продукта.' },
      { title: 'Общий сервер', text: 'Node.js, Express и TypeScript; MySQL и Sequelize для работы с данными. Административная панель работает с API.' },
    ],
  },
  {
    slug: 'save', name: 'Сэйв', category: 'Приложения', kind: 'Сервис охранного предприятия',
    subtitle: 'Связь клиента с сервисом — в приложении.',
    description: 'Приложение охранного сервиса: доступ по PIN-коду, объекты, события и связь с компанией. Для сотрудников — административная панель.',
    stack: ['Flutter', 'PHP', 'Node.js', 'Socket.IO', 'Nuxt'],
    color: 'blue', mark: 'S', nodes: ['Клиент', 'API и чат', 'Оператор'],
    screenshots: [{ src: 'projects/save/01-sign-in.webp', width: 562, height: 1280, alt: { ru: 'Сэйв.info: экран входа по PIN-коду', en: 'Save.info: PIN sign-in screen' }, caption: { ru: 'Мобильное приложение — вход по PIN-коду', en: 'Mobile app — PIN sign-in' } }],
    context: 'Приложение связывает клиента с охранным сервисом. За мобильным интерфейсом стоят серверные сценарии, работа с объектами и инструменты для сотрудников.',
    system: [
      { title: 'Приложение клиента', text: 'Flutter-клиент с уведомлениями и интеграцией с серверной частью.' },
      { title: 'Серверное развитие', text: 'В системе сочетаются PHP API и отдельный сервис чата на Node.js и TypeScript.' },
      { title: 'Инструменты сотрудников', text: 'Веб-панель на Nuxt и обмен сообщениями через Socket.IO.' },
    ],
  },
  {
    slug: 'godendo', name: 'ГоденДо', category: 'Приложения', kind: 'Каталог скидок поблизости',
    subtitle: 'Предложения магазинов — в одном приложении.',
    description: 'Мобильный каталог товаров со скидками: категории, поиск, цены и расстояние до магазина. Рядом — избранное и список покупок.',
    stack: ['Flutter', 'Dart', 'Nuxt', 'Vue'],
    color: 'mint', mark: 'Г', nodes: ['Предложения', 'Магазины', 'Покупатель'],
    context: 'Помочь человеку увидеть предложения магазинов поблизости и выбрать, куда пойти за покупками. В карточках видны товар, скидка, цена, магазин и расстояние; категории и поиск помогают ориентироваться в каталоге.',
    screenshots: [{ src: 'projects/godendo/01-discounts.webp', width: 540, height: 1204, alt: { ru: 'ГоденДо: товары со скидками, цены и расстояния до магазинов', en: 'GodenDo: discounted products, prices, and distances to stores' }, caption: { ru: 'Мобильное приложение — предложения магазинов', en: 'Mobile app — offers from nearby stores' } }],
    system: [
      { title: 'Каталог на телефоне', text: 'Flutter-приложение с товарами, магазинами и категориями. На первом экране — предложения со скидками.' },
      { title: 'Выбор и планирование', text: 'Карточки показывают цену и магазин. В исходниках предусмотрены избранное, список покупок и работа с геолокацией.' },
      { title: 'Административная часть', text: 'Веб-панель на Nuxt и Vue для работы с каталогом, товарами и магазинами.' },
    ],
  },
  {
    slug: 'ice-and-flame', name: 'Лёд и пламя', category: 'Веб-сайты', kind: 'Сайт настольной игры',
    subtitle: 'Показать игру ещё до первой партии.',
    description: 'Презентационный сайт «Градус судьбы»: механика игры, фотографии, форматы участия и заявка.',
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'PHP'],
    color: 'ember', mark: '↟', nodes: ['Знакомство', 'Формат игры', 'Заявка'],
    screenshots: [{
      src: 'projects/ice-and-flame/01-home.webp', width: 1440, height: 1050,
      alt: { ru: 'Первый экран сайта «Лёд и пламя» с образами льда и огня', en: 'Ice and Flame website hero with ice and fire imagery' },
      caption: { ru: 'Главная страница — снимок локальной сборки', en: 'Home page — captured from the local build' },
    }, {
      src: 'projects/ice-and-flame/02-mobile.webp', width: 390, height: 844,
      alt: { ru: 'Лёд и пламя: мобильный первый экран сайта игры', en: 'Ice and Flame: mobile home page' },
      caption: { ru: 'Главная страница — мобильная версия', en: 'Home page — mobile layout' },
    }],
    context: 'Сайт знакомит с командной игрой «Градус судьбы: Лёд и Пламя». Посетитель видит механику, роли и живые фотографии, выбирает подходящий формат и может оставить заявку.',
    system: [
      { title: 'Визуальный рассказ', text: 'Лёд и огонь задают композицию. Механика, роли и галерея постепенно раскрывают продукт.' },
      { title: 'Статическая сборка', text: 'Astro формирует готовые страницы. Типизированные данные и компоненты помогают поддерживать содержимое сайта.' },
      { title: 'Обратная связь', text: 'Форма заявки связана с PHP-обработчиком. Мобильная композиция адаптирована под узкий экран.' },
    ],
  },
  {
    slug: 'alean', name: 'Alean', category: 'Веб-сайты', kind: 'Курортная недвижимость',
    subtitle: 'Большой курортный проект — в понятной истории.',
    description: 'Сайт Alean Resort Montvert: комплекс, инфраструктура, галерея и обратная связь.',
    stack: ['Nuxt', 'Vue', 'Pinia', 'PHP'],
    color: 'mint', mark: 'A', nodes: ['Комплекс', 'Инфраструктура', 'Обратная связь'],
    screenshots: [
      { src: 'projects/alean/01-desktop.webp', width: 1440, height: 1000, alt: { ru: 'Alean Resort Montvert: первый экран сайта курортного комплекса', en: 'Alean Resort Montvert: resort website home page' }, caption: { ru: 'Главная страница — версия для компьютера', en: 'Home page — desktop layout' } },
      { src: 'projects/alean/02-mobile.webp', width: 390, height: 844, alt: { ru: 'Alean Resort Montvert: мобильный экран сайта', en: 'Alean Resort Montvert: mobile website layout' }, caption: { ru: 'Главная страница — мобильная версия', en: 'Home page — mobile layout' } },
    ],
    context: 'Сайт представляет курортный комплекс Alean Resort Montvert. Разделы о территории и инфраструктуре помогают посетителю познакомиться с объектом и перейти к обращению.',
    system: [
      { title: 'Презентация объекта', text: 'Страница объединяет описание комплекса, его территории и инфраструктуры.' },
      { title: 'Интерактивные элементы', text: 'Vue и Nuxt, состояние на Pinia, просмотр изображений и формы обратной связи.' },
      { title: 'Обработка обращений', text: 'Клиентские формы связаны с серверной отправкой почты на PHP.' },
    ],
  },
  {
    slug: 'united-mission', name: 'UnitedMission', category: 'Веб-сайты', kind: 'Консультационные услуги',
    subtitle: 'От знакомства с подходом — к обращению.',
    description: 'Англоязычный сайт с направлениями работы, страницами услуг и формами обращений.',
    stack: ['Nuxt', 'TypeScript', 'Node.js', 'MySQL'],
    color: 'violet', mark: 'UM', nodes: ['Услуги', 'Формы', 'Обработка обращений'],
    screenshots: [
      { src: 'projects/united-mission/01-desktop.webp', width: 1440, height: 1000, alt: { ru: 'UnitedMission: главная страница сайта консультационных услуг', en: 'UnitedMission: consultancy website home page' }, caption: { ru: 'Главная страница — версия для компьютера', en: 'Home page — desktop layout' } },
      { src: 'projects/united-mission/02-mobile.webp', width: 390, height: 844, alt: { ru: 'UnitedMission: мобильная версия главной страницы', en: 'UnitedMission: mobile home page' }, caption: { ru: 'Главная страница — мобильная версия', en: 'Home page — mobile layout' } },
    ],
    context: 'Сайт представляет консультационные услуги для частных клиентов и организаций. Посетитель знакомится с подходом, изучает направления работы и выбирает способ обращения.',
    system: [
      { title: 'Содержательная структура', text: 'Главная, биография, отдельные страницы услуг и форма первичного обращения.' },
      { title: 'Серверные сценарии', text: 'Серверная часть обрабатывает формы и хранит обращения. Предусмотрен административный интерфейс.' },
      { title: 'Поддержка продукта', text: 'TypeScript, проверка входных данных, тесты серверных сценариев и поисковые метаданные.' },
    ],
  },
];

type ProjectText = Pick<Project, 'name' | 'kind' | 'description' | 'context' | 'nodes' | 'system'>;
export const projectEnglish: Record<string, ProjectText> = {
  godendo: {
    name: 'GodenDo', kind: 'Local deals catalogue',
    description: 'A mobile catalogue of discounted products, with search, categories, prices, and store distances, plus favourites and a shopping list.',
    context: 'Help people discover offers from nearby stores and decide where to shop. Product cards show the discount, price, store, and distance, while search and categories make the catalogue easier to explore.',
    nodes: ['Offers', 'Stores', 'Shopper'],
    system: [
      { title: 'Mobile catalogue', text: 'A Flutter app with products, stores, and categories. The home screen highlights discounted offers.' },
      { title: 'Choosing and planning', text: 'Cards show prices and stores. The codebase also includes favourites, a shopping list, and geolocation support.' },
      { title: 'Administration', text: 'A Nuxt and Vue dashboard for working with the catalogue, products, and stores.' },
    ],
  },
  amelia: {
    name: 'Amelia', kind: 'Mobile flower shop',
    description: 'A flower shop on your phone: bouquets, categories, and a basket, backed by an API and store management tools.',
    context: 'Help customers choose a bouquet in the app while staff manage products and orders in a separate dashboard. The backend connects the mobile storefront with the store’s internal tools.',
    nodes: ['Shopping app', 'Store API', 'Dashboard'],
    system: [
      { title: 'Customer app', text: 'A Flutter application gives customers a mobile interface to the store.' },
      { title: 'Backend', text: 'An Express API written in TypeScript, with Prisma connecting the data model to the database.' },
      { title: 'Store management', text: 'A separate Vue web application supports administrative workflows.' },
    ],
  },
  vratarnitsa: {
    name: 'Vratarnitsa', kind: 'Parish website & mobile services',
    description: 'Parish information, a prayer book, prayer requests, and donations, brought together in web and mobile interfaces.',
    context: 'Make parish information and services accessible on desktop and mobile. Visitors can learn about the church and access the services they need, while the backend and administration dashboard support the product’s day-to-day operation.',
    nodes: ['Web & mobile', 'Backend API', 'Management'],
    system: [
      { title: 'Web interface', text: 'Nuxt and Vue power the customer-facing web experience.' },
      { title: 'Mobile development', text: 'The project includes Flutter and Capacitor clients from different stages of its development.' },
      { title: 'Shared backend', text: 'Node.js, Express, and TypeScript, with MySQL and Sequelize for data storage. The administration dashboard connects to the API.' },
    ],
  },
  save: {
    name: 'Save', kind: 'Security service software',
    description: 'A security service app with PIN access, protected sites, events, and messaging, supported by an administration dashboard.',
    context: 'The application connects customers with a security service. Behind the mobile interface are server-side workflows, protected-site records, and staff tools.',
    nodes: ['Customer', 'API & chat', 'Operator'],
    system: [
      { title: 'Customer application', text: 'A Flutter client with notifications and backend integration.' },
      { title: 'Backend evolution', text: 'The system combines a PHP API with a separate chat service built with Node.js and TypeScript.' },
      { title: 'Staff tools', text: 'A Nuxt dashboard and real-time messaging through Socket.IO.' },
    ],
  },
  'ice-and-flame': {
    name: 'Ice and Flame', kind: 'Board game website',
    description: 'A website introducing the game: how it works, photos, participation formats, and an enquiry form.',
    context: 'The website introduces the team-based board game Ice and Flame. Visitors discover its mechanics and roles, see photographs of the game in use, explore the available formats, and make an enquiry.',
    nodes: ['Introduction', 'Game formats', 'Enquiry'],
    system: [
      { title: 'A visual story', text: 'Ice and fire shape the visual direction. Mechanics, roles, and a photo gallery gradually introduce the product.' },
      { title: 'Static website', text: 'Astro generates the pages, while typed data and reusable components make the content easier to maintain.' },
      { title: 'Enquiries', text: 'The form connects to a PHP handler. The layout adapts to mobile screens.' },
    ],
  },
  alean: {
    name: 'Alean', kind: 'Resort property website',
    description: 'A website for Alean Resort Montvert, presenting the development, its amenities, and ways to get in touch.',
    context: 'The website presents Alean Resort Montvert. Sections about the development and its amenities help visitors explore the property before making an enquiry.',
    nodes: ['Development', 'Amenities', 'Enquiry'],
    system: [
      { title: 'Property presentation', text: 'The page brings together information about the development, its grounds, and its amenities.' },
      { title: 'Interactive features', text: 'Vue and Nuxt, Pinia state management, image viewing, and enquiry forms.' },
      { title: 'Handling enquiries', text: 'The forms connect to server-side email delivery using PHP.' },
    ],
  },
  'united-mission': {
    name: 'UnitedMission', kind: 'Consultancy website',
    description: 'An English-language website with service pages and enquiry forms.',
    context: 'The website presents consultancy services for individuals and organisations. Visitors explore the approach and service areas, then choose how to get in touch.',
    nodes: ['Services', 'Forms', 'Enquiry handling'],
    system: [
      { title: 'Content structure', text: 'A home page, biography, individual service pages, and an initial enquiry form.' },
      { title: 'Server-side workflows', text: 'The backend processes forms and stores enquiries, with an administrative interface.' },
      { title: 'Maintainability', text: 'TypeScript, input validation, server-side workflow tests, and search metadata.' },
    ],
  },
};

export const experimentEnglish = [
  { name: 'VPN platform', description: 'Subscription and server infrastructure management. Domain modelling, integrations, and background job queues.' },
  { name: 'Crypto bot', description: 'Experiments with exchange APIs, technical indicators, and market data processing.' },
  { name: 'Trade v2', description: 'A platform for exploring trading workflows, with domain rules, risk limits, and testing.' },
];

export const experiments = [
  { number: '01', name: 'VPN-платформа', description: 'Управление подписками и серверной инфраструктурой. Доменная модель, интеграции, очереди задач.', tags: 'Node.js / TypeScript / PostgreSQL / Redis' },
  { number: '02', name: 'Crypto bot', description: 'Эксперименты с биржевыми API, техническими индикаторами и обработкой рыночных данных.', tags: 'TypeScript / API / WebSocket' },
  { number: '03', name: 'Trade v2', description: 'Платформа для исследования торговых сценариев: доменные правила, ограничения риска и тестирование.', tags: 'NestJS / TypeScript / Tests' },
];
