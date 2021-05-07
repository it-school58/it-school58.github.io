const COURSES = [
    {
        title: 'Курс HTML и CSS',
        className: '_html',
        links: [
            { name: 'Методичка по модулю HTML5 и CSS3', link: 'https://it-school58.github.io/webcourses/themes/html/' },
            { name: 'Домашнее задание', link: 'https://it-school58.github.io/webcourses-homework/' },
            { name: 'Видеокурс HTML5 и CSS3', link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKkmf-c43pmhzH3otzUCl8f3' }
        ],
        duration: '2,5 месяца (занятия по 2 часа 2 раза в неделю)',
        task: 'подготовка верстальщика, владеющего современными технологиями',
        project: 'одностраничный сайт с адаптивной версткой',
        themes: [
            '01 Введение (домен, хостинг, браузеры, редакторы кода)',
            '02 Структура HTML файла',
            '03 Задание цвета в CSS',
            '04 Прозрачность элементов в CSS',
            '05 Работа с текстом и шрифтами',
            '06 Единицы измерения (px, %, vh, vw, em, rem)',
            '07 CSS-селекторы',
            '08 Изображения',
            '09 Псевдоклассы и всевдоэлементы',
            '10 Блочная модель',
            '11 CSS Flexbox',
            '12 CSS Grid',
            '13 CSS Multi Columns',
            '14 Позиционирование элементов',
            '15 Вычисление значения (функция calc)',
            '16 Адаптивная верстка. Мобильная версия сайта',
            '17 Инструменты разработчика',
            '18 Списки: маркированные и нумерованные',
            '19 Ссылки. Виды ссылок',
            '20 Переходы в CSS',
            '21 Элементы формы: поля ввода и кнопки',
            '22 Трансформация в CSS',
            '23 Анимация в CSS',
            '24 Применение фильтров к элементам',
            '25 Рисование базовых SVG-фигур на HTML',
            '26 Задание контура в CSS clip-path',
            '27 Добавление видео и аудио на сайт',
            '28 Переменные в CSS',
            '29 Препроцессоры CSS',
            '30 Организация структуры проекта',
            '31 Adobe Photoshop для верстальщика',
            '32 Яндекс Карты и Google Maps для сайта',
            '33 Яндекс Метрика',
            '34 Онлайн редакторы кода',
            '35 Виджеты ВКонтакте',
            '36 Вендорные префиксы. Автопрефиксер',
            '37 Хостинг проектов GitHub',
            '38 Вёрстка по БЭМ',
            '39 Использование фреймворка Bootstrap',
            '40 Концепция Pixel Perfect'
        ]
    },
    {
        title: 'Курс JavaScript',
        className: '_js',
        links: [
            { name: 'Методичка по модулю JavaScript', link: 'https://it-school58.github.io/webcourses/themes/js/' },
            { name: 'Домашнее задание', link: 'https://it-school58.github.io/webcourses-homework/' },
            { name: 'Видеокурс JavaScript-практика (простой проект)', link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKn9lnGXEUWEXYdYp-HKGPAw' },
            { name: 'Видеокурс JavaScript-практика (модульное приложение)', link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKmKK4xAJsE31n3SACY0bi9t' },
            { name: 'Видеокурс React / Redux-практика', link: 'https://www.youtube.com/playlist?list=PL7cTIfGFrdKkQAWKDu2NdFt5Cx38B-A3i' }
        ],
        duration: '2,5 месяца (занятия по 2 часа 2 раза в неделю)',
        task: 'подготовка frontend-разработчика начального уровня',
        project: 'витрина с каталогом товаром',
        themes: [
            '01 Стандарт ECMAScript',
            '02 Подключение файлов JavaScript',
            '03 Типы данных. Переменные и константы',
            '04 Вывод сообщения пользователю',
            '05 Условные операторы',
            '06 Объектная модель представления документа (DOM)',
            '07 Выборка элементов страницы',
            '08 Методы innerText и innerHTML',
            '09 Функции',
            '10 События и обработчики событий',
            '11 Обращение к CSS свойствам и классам',
            '12 Выборка элементов формы',
            '13 Циклы for, while',
            '14 Объекты',
            '15 Массивы',
            '16 Строки',
            '17 Числа',
            '18 Классы',
            '19 Дата и время',
            '20 Локальное хранилище',
            '21 Работа с атрибутами',
            '22 Создание элементов',
            '23 Таймеры',
            '24 Обработка исключений',
            '25 Запросы к серверу',
            '26 Рисование на Canvas',
            '27 Отладка в браузере Chrome'
        ]
    }
];

const RESOURSES = {
    title: 'Сторонние ресурсы',
    links: [
        { name: 'WebReference', link: 'https://webref.ru/' },
        { name: 'Современный учебник Javascript', link: 'https://learn.javascript.ru/' },
        { name: 'MDN', link: 'https://developer.mozilla.org/ru/' },
        { name: 'w3schools', link: 'https://www.w3schools.com/' },
        { name: 'Образовательный портал "Dev Pandaren"', link: 'https://dev-pandaren.github.io/' }
    ]
};

const LIVE_PHOTOS = [
    'img/courses/01.jpg',
    'img/courses/02.jpg',
    'img/courses/03.jpg',
    'img/courses/04.jpg',
    'img/courses/05.jpg',
    'img/courses/06.jpg',
    'img/courses/07.jpg',
    'img/courses/08.jpg',
    'img/courses/09.jpg',
]

const PROJECTS = [
    { link: 'https://it-school58.github.io/webcourses-projects/2019-template/', img: 'img/projects/2019-template.jpg' },
    { link: 'https://it-school58.github.io/webcourses-projects/2018-hand-made/', img: 'img/projects/2018-hand-made.jpg' },
    { link: 'https://it-school58.github.io/webcourses-projects/2019-phone/', img: 'img/projects/2019-phone.jpg' },
    { link: 'https://it-school58.github.io/webcourses-projects/2019-lend/', img: 'img/projects/2019-lend.jpg' },
    { link: 'https://it-school58.github.io/webcourses-projects/2019-nails/', img: 'img/projects/2019-nails.jpg' },
    { link: 'https://it-school58.github.io/webcourses-projects/2018-logoped/', img: 'img/projects/2018-logoped.jpg' },
    { link: 'https://it-school58.github.io/webcourses-projects/2018-pnz-service/', img: 'img/projects/2018-pnz-service.jpg' },
    { link: 'https://it-school58.github.io/webcourses-projects/2019-game/', img: 'img/projects/2019-game.jpg' },
    { link: 'https://it-school58.github.io/webcourses-projects/2018-flat/', img: 'img/projects/2018-flat.jpg' }
];

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            courses: COURSES,
            resourses: RESOURSES,
            photos: LIVE_PHOTOS,
            projects: PROJECTS
        },
        mounted() {
            this.$nextTick(swiperInit);
        }
    })
});

const swiperInit = () => {
    new Swiper('.slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        preloadImages: false,
        autoplay: true,
        loop: true,
        lazy: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            900: {
                slidesPerView: 2
            }
        }
    });
}
