export type Screenshot = {
  src: string;
  width: number;
  height: number;
  alt: { ru: string; en: string };
  caption: { ru: string; en: string };
};

export const engagements = {
  manilov: { ru: 'Разработка для ИП Манилов Тимур Викторович', en: 'Developed for Timur Viktorovich Manilov, Sole Proprietor' },
  pushmobile: { ru: 'Разработка для ООО «Pushmobile»', en: 'Developed for Pushmobile LLC' },
  freelance: { ru: 'Частный фриланс', en: 'Independent freelance project' },
} as const;

export type Project = {
  slug: string;
  name: string;
  category: 'Приложения' | 'Веб-сайты';
  kind: string;
  subtitle: string;
  description: string;
  contribution: string;
  engagement: keyof typeof engagements;
  website?: string;
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
    engagement: 'manilov',
    subtitle: 'Магазин в телефоне. Управление — в браузере.',
    description: 'Цветочный магазин в телефоне: букеты, категории и корзина. За приложением — API и инструменты управления магазином.',
    contribution: 'Восстановил приложение, заброшенное на несколько лет, и запустил его на iOS и Android. Затем развивал функциональность и занимался публикацией в App Store и Google Play.',
    stack: ['Flutter', 'Dart', 'iOS', 'Android'],
    color: 'rose', mark: 'a.', nodes: ['Приложение', 'API магазина', 'Админка'],
    context: 'Помочь покупателю выбрать букет в приложении, а сотрудникам — работать с каталогом и заказами через административную панель. Мобильную и внутреннюю части связывает серверный API.',
    screenshots: [{ src: 'projects/amelia/01-catalog.webp', width: 562, height: 1280, alt: { ru: 'Amelia: каталог букетов с ценами и категориями', en: 'Amelia: bouquet catalogue with prices and categories' }, caption: { ru: 'Мобильное приложение — каталог букетов', en: 'Mobile app — bouquet catalogue' } }],
    system: [
      { title: 'Восстановление проекта', text: 'Разобрал зависимости после незавершённого рефакторинга, заменил несовместимые библиотеки и исправил типизацию.' },
      { title: 'iOS и Android', text: 'Восстановил сборку и запуск Flutter-приложения на обеих платформах.' },
      { title: 'Развитие и публикации', text: 'Добавлял новые функции и сопровождал публикации приложения в App Store и Google Play.' },
    ],
  },
  {
    slug: 'vratarnitsa', name: 'Вратарница', category: 'Приложения', kind: 'Сайт и мобильный сервис прихода',
    engagement: 'manilov',
    subtitle: 'Сайт, приложение и управление в одной системе.',
    description: 'Цифровой сервис прихода: информация о храме, молитвослов, подача записок и пожертвования. Сайт и мобильный интерфейс связаны с общей системой.',
    contribution: 'Самостоятельно разработал сайт, административную панель, серверную часть и мобильное приложение. Опубликовал приложение в App Store и Google Play, подключил онлайн-оплату и подписки на пожертвования.',
    stack: ['Nuxt', 'Vue', 'Flutter', 'Capacitor', 'Node.js', 'TypeScript', 'MySQL'],
    color: 'sand', mark: 'В', nodes: ['Сайт и клиент', 'Серверный API', 'Управление'],
    context: 'Сделать информацию и сервисы прихода доступными с компьютера и телефона. Посетитель может познакомиться с храмом и перейти к нужному действию; сервер и административная панель связывают интерфейсы с внутренней работой продукта.',
    screenshots: [
      { src: 'projects/vratarnitsa/01-desktop.webp', width: 1680, height: 868, alt: { ru: 'Вратарница: сайт храма с основными сервисами', en: 'Vratarnitsa: parish website and its main services' }, caption: { ru: 'Главная страница — версия для компьютера', en: 'Home page — desktop layout' } },
      { src: 'projects/vratarnitsa/02-mobile.webp', width: 358, height: 775, alt: { ru: 'Вратарница: мобильная версия сайта с навигацией', en: 'Vratarnitsa: mobile layout and navigation' }, caption: { ru: 'Мобильная версия — те же сервисы на узком экране', en: 'Mobile layout — the same services on a smaller screen' } },
    ],
    system: [
      { title: 'Полный цикл разработки', text: 'Без участия других разработчиков создал сайт, административную панель, серверный API и мобильное приложение.' },
      { title: 'Мобильный релиз', text: 'Довёл приложение до публикации в App Store и Google Play. В проекте использовались Flutter и Capacitor на разных этапах развития.' },
      { title: 'Платежи и подписки', text: 'Интегрировал онлайн-оплату и систему подписок на пожертвования.' },
    ],
  },
  {
    slug: 'save', name: 'Сэйв', category: 'Приложения', kind: 'Сервис охранного предприятия',
    engagement: 'pushmobile',
    subtitle: 'Связь клиента с сервисом — в приложении.',
    description: 'Приложение охранного сервиса: доступ по PIN-коду, объекты, события и связь с компанией. Для сотрудников — административная панель.',
    contribution: 'Спроектировал дизайн и разработал мобильное приложение на Flutter. Спроектировал серверную чат-систему со службой поддержки и интегрировал её в приложение.',
    stack: ['Flutter', 'Dart', 'Node.js', 'TypeScript', 'Socket.IO'],
    color: 'blue', mark: 'S', nodes: ['Клиент', 'API и чат', 'Оператор'],
    screenshots: [{ src: 'projects/save/01-sign-in.webp', width: 562, height: 1280, alt: { ru: 'Сэйв.info: экран входа по PIN-коду', en: 'Save.info: PIN sign-in screen' }, caption: { ru: 'Мобильное приложение — вход по PIN-коду', en: 'Mobile app — PIN sign-in' } }],
    context: 'Приложение связывает клиента с охранным сервисом. За мобильным интерфейсом стоят серверные сценарии, работа с объектами и инструменты для сотрудников.',
    system: [
      { title: 'Дизайн приложения', text: 'Самостоятельно спроектировал визуальную часть мобильного приложения.' },
      { title: 'Разработка на Flutter', text: 'Реализовал мобильный клиент на Flutter и связал его с серверной частью.' },
      { title: 'Чат поддержки', text: 'Спроектировал серверную чат-систему на Node.js и TypeScript с обменом сообщениями через Socket.IO и внедрил её в приложение.' },
    ],
  },
  {
    slug: 'godendo', name: 'ГоденДо', category: 'Приложения', kind: 'Каталог скидок поблизости',
    engagement: 'pushmobile',
    subtitle: 'Предложения магазинов — в одном приложении.',
    description: 'Мобильный каталог товаров со скидками: категории, поиск, цены и расстояние до магазина. Рядом — избранное и список покупок.',
    contribution: 'Спроектировал дизайн, разработал мобильное приложение на Flutter и интегрировал серверную часть.',
    stack: ['Flutter', 'Dart'],
    color: 'mint', mark: 'Г', nodes: ['Предложения', 'Магазины', 'Покупатель'],
    context: 'Помочь человеку увидеть предложения магазинов поблизости и выбрать, куда пойти за покупками. В карточках видны товар, скидка, цена, магазин и расстояние; категории и поиск помогают ориентироваться в каталоге.',
    screenshots: [{ src: 'projects/godendo/01-discounts.webp', width: 540, height: 1204, alt: { ru: 'ГоденДо: товары со скидками, цены и расстояния до магазинов', en: 'GodenDo: discounted products, prices, and distances to stores' }, caption: { ru: 'Мобильное приложение — предложения магазинов', en: 'Mobile app — offers from nearby stores' } }],
    system: [
      { title: 'Дизайн', text: 'Спроектировал интерфейс мобильного каталога товаров и предложений магазинов.' },
      { title: 'Мобильное приложение', text: 'Реализовал дизайн и пользовательские сценарии на Flutter.' },
      { title: 'Интеграция', text: 'Подключил мобильное приложение к серверной части проекта.' },
    ],
  },
  {
    slug: 'ice-and-flame', name: 'Лёд и пламя', category: 'Веб-сайты', kind: 'Сайт настольной игры',
    engagement: 'freelance',
    subtitle: 'Показать игру ещё до первой партии.',
    description: 'Лендинг обучающей настольной игры «Градус судьбы»: механика, фотографии и форматы участия.',
    contribution: 'Полностью разработал лендинг для презентации обучающей настольной игры: визуальную часть, вёрстку и адаптацию для компьютеров и телефонов.',
    stack: ['Astro', 'TypeScript', 'Tailwind CSS'],
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
    context: 'Познакомить посетителя с обучающей настольной игрой, её механикой и форматами участия через небольшой презентационный сайт.',
    system: [
      { title: 'Визуальный рассказ', text: 'Лёд и огонь задают композицию. Механика, роли и галерея постепенно раскрывают продукт.' },
      { title: 'Статическая сборка', text: 'Astro формирует готовые страницы. Типизированные данные и компоненты помогают поддерживать содержимое сайта.' },
      { title: 'Адаптивная вёрстка', text: 'Разработал отображение для компьютеров и телефонов. Лендинг работает без серверной части.' },
    ],
  },
  {
    slug: 'alean', name: 'Alean', category: 'Веб-сайты', kind: 'Курортная недвижимость',
    engagement: 'freelance',
    subtitle: 'Большой курортный проект — в понятной истории.',
    description: 'Сайт Alean Resort Montvert: комплекс, инфраструктура, галерея и обратная связь.',
    contribution: 'Разработал визуальную и серверную части сайта, формы обратной связи и анимации.',
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
    engagement: 'freelance',
    subtitle: 'От знакомства с подходом — к обращению.',
    description: 'Англоязычный сайт с направлениями работы, страницами услуг и формами обращений.',
    contribution: 'Разработал визуальную и серверную части сайта, а также административную панель для работы с обращениями.',
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
  {
    slug: 'horosho', name: 'HOROSHO', category: 'Веб-сайты', kind: 'Архитектура и дизайн интерьеров',
    engagement: 'manilov',
    website: 'https://horoshodesign.ru/',
    subtitle: 'Новый визуальный язык для действующего сайта.',
    description: 'Сайт архитектурного бюро и студии интерьеров: проекты, направления работы и услуги.',
    contribution: 'Выполнил редизайн действующего сайта, перевёл интерфейс на новую дизайн-систему и заново реализовал адаптивную вёрстку.',
    stack: ['Nuxt', 'Vue', 'HTML', 'CSS'],
    color: 'sand', mark: 'H', nodes: ['Проекты', 'Услуги', 'Обращение'],
    context: 'Обновить представление архитектурного бюро и его проектов, объединив страницы в единую визуальную систему для компьютеров и телефонов.',
    screenshots: [
      { src: 'projects/horosho/01-desktop.webp', width: 1440, height: 1000, alt: { ru: 'HOROSHO: главная страница архитектурного бюро', en: 'HOROSHO: architecture and interior design studio home page' }, caption: { ru: 'Действующий сайт — версия для компьютера', en: 'Live website — desktop layout' } },
      { src: 'projects/horosho/02-mobile.webp', width: 390, height: 844, alt: { ru: 'HOROSHO: мобильная версия сайта архитектурного бюро', en: 'HOROSHO: mobile architecture studio website' }, caption: { ru: 'Действующий сайт — мобильная версия', en: 'Live website — mobile layout' } },
    ],
    system: [
      { title: 'Редизайн продукта', text: 'Обновил визуальную подачу существующего сайта архитектурного бюро.' },
      { title: 'Дизайн-система', text: 'Привёл интерфейс к новой дизайн-системе с согласованной типографикой, компонентами и оформлением страниц.' },
      { title: 'Адаптивная вёрстка', text: 'Заново реализовал вёрстку для компьютеров и мобильных устройств.' },
    ],
  },
  {
    slug: 'bestphone', name: 'Bestphone', category: 'Веб-сайты', kind: 'Интернет-магазин электроники',
    engagement: 'manilov',
    website: 'https://bestphone.ru/',
    subtitle: 'Новый интерфейс поверх действующего магазина.',
    description: 'Интернет-магазин смартфонов и электроники: каталог устройств, категории товаров и услуги магазина.',
    contribution: 'Выполнил редизайн магазина, перевёл интерфейс на новую дизайн-систему и переработал адаптивную вёрстку. Интегрировал существующую серверную логику в новый интерфейс.',
    stack: ['1С-Битрикс', 'PHP', 'JavaScript', 'HTML', 'CSS'],
    color: 'blue', mark: 'B', nodes: ['Новый интерфейс', 'Интеграция', 'Действующий сервер'],
    context: 'Обновить визуальную часть действующего интернет-магазина и связать новый интерфейс с существующей серверной частью.',
    screenshots: [
      { src: 'projects/bestphone/01-desktop.webp', width: 1440, height: 1000, alt: { ru: 'Bestphone: главная страница интернет-магазина электроники', en: 'Bestphone: electronics store home page' }, caption: { ru: 'Действующий сайт — версия для компьютера', en: 'Live website — desktop layout' } },
      { src: 'projects/bestphone/02-mobile.webp', width: 390, height: 844, alt: { ru: 'Bestphone: мобильная версия интернет-магазина электроники', en: 'Bestphone: mobile electronics store layout' }, caption: { ru: 'Действующий сайт — мобильная версия', en: 'Live website — mobile layout' } },
    ],
    system: [
      { title: 'Обновление интерфейса', text: 'Переработал визуальную часть магазина и перенёс её на новую дизайн-систему.' },
      { title: 'Адаптивная вёрстка', text: 'Заново реализовал вёрстку и её отображение на компьютерах и телефонах.' },
      { title: 'Интеграция с сервером', text: 'Связал новый фронтенд с существующими компонентами и серверной логикой магазина на 1С-Битрикс.' },
    ],
  },
];

type ProjectText = Pick<Project, 'name' | 'kind' | 'description' | 'contribution' | 'context' | 'nodes' | 'system'>;
export const projectEnglish: Record<string, ProjectText> = {
  horosho: {
    name: 'HOROSHO', kind: 'Architecture & interior design',
    description: 'An architecture and interior design studio website presenting its projects, services, and areas of expertise.',
    contribution: 'Redesigned the existing website, moved the interface to a new design system, and rebuilt its responsive layouts.',
    context: 'Refresh the studio’s presentation and bring its pages into a consistent visual system for desktop and mobile.',
    nodes: ['Projects', 'Services', 'Enquiries'],
    system: [
      { title: 'Product redesign', text: 'Updated the visual presentation of the existing architecture studio website.' },
      { title: 'Design system', text: 'Applied a new design system with consistent typography, components, and page styling.' },
      { title: 'Responsive implementation', text: 'Rebuilt the layouts for desktop and mobile devices.' },
    ],
  },
  bestphone: {
    name: 'Bestphone', kind: 'Electronics store',
    description: 'An online smartphone and electronics store with product categories, a device catalogue, and store services.',
    contribution: 'Redesigned the store, introduced a new design system, and rebuilt its responsive layouts. Integrated the existing backend logic with the new frontend.',
    context: 'Refresh an established online store’s visual experience and connect the new interface to its existing backend.',
    nodes: ['New frontend', 'Integration', 'Existing backend'],
    system: [
      { title: 'Interface refresh', text: 'Reworked the store’s visual presentation and moved it to a new design system.' },
      { title: 'Responsive layouts', text: 'Rebuilt the layouts for desktop and mobile screens.' },
      { title: 'Backend integration', text: 'Connected the new frontend to the store’s existing 1C-Bitrix components and backend logic.' },
    ],
  },
  godendo: {
    name: 'GodenDo', kind: 'Local deals catalogue',
    description: 'A mobile catalogue of discounted products, with search, categories, prices, and store distances, plus favourites and a shopping list.',
    contribution: 'Designed the interface, built the Flutter mobile app, and integrated it with the project’s backend.',
    context: 'Help people discover offers from nearby stores and decide where to shop. Product cards show the discount, price, store, and distance, while search and categories make the catalogue easier to explore.',
    nodes: ['Offers', 'Stores', 'Shopper'],
    system: [
      { title: 'Interface design', text: 'Designed the mobile catalogue interface for products and store offers.' },
      { title: 'Mobile development', text: 'Implemented the design and user workflows in Flutter.' },
      { title: 'Integration', text: 'Connected the mobile app to the project’s backend.' },
    ],
  },
  amelia: {
    name: 'Amelia', kind: 'Mobile flower shop',
    description: 'A flower shop on your phone: bouquets, categories, and a basket, backed by an API and store management tools.',
    contribution: 'Revived an app that had been abandoned for several years and got it running on iOS and Android. Continued adding features and handling releases on the App Store and Google Play.',
    context: 'Help customers choose a bouquet in the app while staff manage products and orders in a separate dashboard. The backend connects the mobile storefront with the store’s internal tools.',
    nodes: ['Shopping app', 'Store API', 'Dashboard'],
    system: [
      { title: 'Project recovery', text: 'Reviewed dependencies left by an unfinished refactor, replaced incompatible libraries, and fixed typing issues.' },
      { title: 'iOS and Android', text: 'Restored the Flutter app’s builds and launch on both platforms.' },
      { title: 'Development and releases', text: 'Added features and handled releases on the App Store and Google Play.' },
    ],
  },
  vratarnitsa: {
    name: 'Vratarnitsa', kind: 'Parish website & mobile services',
    description: 'Parish information, a prayer book, prayer requests, and donations, brought together in web and mobile interfaces.',
    contribution: 'Independently built the website, administration dashboard, backend, and mobile app. Published the app on the App Store and Google Play, and integrated online payments and recurring donations.',
    context: 'Make parish information and services accessible on desktop and mobile. Visitors can learn about the church and access the services they need, while the backend and administration dashboard support the product’s day-to-day operation.',
    nodes: ['Web & mobile', 'Backend API', 'Management'],
    system: [
      { title: 'End-to-end development', text: 'Built the website, administration dashboard, backend API, and mobile app without other developers.' },
      { title: 'Mobile release', text: 'Took the app through publication on the App Store and Google Play. Flutter and Capacitor were used at different stages of the project.' },
      { title: 'Payments and subscriptions', text: 'Integrated online payments and recurring donation subscriptions.' },
    ],
  },
  save: {
    name: 'Save', kind: 'Security service software',
    description: 'A security service app with PIN access, protected sites, events, and messaging, supported by an administration dashboard.',
    contribution: 'Designed and built the Flutter mobile app. Designed the server-side support chat system and integrated it into the app.',
    context: 'The application connects customers with a security service. Behind the mobile interface are server-side workflows, protected-site records, and staff tools.',
    nodes: ['Customer', 'API & chat', 'Operator'],
    system: [
      { title: 'App design', text: 'Personally designed the mobile application’s interface.' },
      { title: 'Flutter development', text: 'Built the mobile client in Flutter and connected it to the backend.' },
      { title: 'Support chat', text: 'Designed the Node.js and TypeScript support chat system using Socket.IO and integrated it into the app.' },
    ],
  },
  'ice-and-flame': {
    name: 'Ice and Flame', kind: 'Board game website',
    description: 'A landing page introducing an educational board game, its mechanics, photographs, and participation formats.',
    contribution: 'Built the entire landing page for the educational board game, including the visual presentation and responsive desktop and mobile layouts.',
    context: 'Introduce an educational board game, its mechanics, and participation formats through a compact presentation website.',
    nodes: ['Introduction', 'Game formats', 'Enquiry'],
    system: [
      { title: 'A visual story', text: 'Ice and fire shape the visual direction. Mechanics, roles, and a photo gallery gradually introduce the product.' },
      { title: 'Static website', text: 'Astro generates the pages, while typed data and reusable components make the content easier to maintain.' },
      { title: 'Responsive layout', text: 'Built desktop and mobile layouts. The landing page runs without a backend.' },
    ],
  },
  alean: {
    name: 'Alean', kind: 'Resort property website',
    description: 'A website for Alean Resort Montvert, presenting the development, its amenities, and ways to get in touch.',
    contribution: 'Developed the website’s frontend and backend, enquiry forms, and animations.',
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
    contribution: 'Developed the website’s frontend, backend, and an administration dashboard for managing enquiries.',
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
