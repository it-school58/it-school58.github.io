const themeHtmlStr =
`01 Введение (домен, хостинг, браузеры, редакторы кода)
02 Структура HTML файла
03 Задание цвета в CSS 
04 Прозрачность элементов в CSS
05 Работа с текстом и шрифтами
06 Единицы измерения (px, %, vh, vw, em, rem)
07 CSS-селекторы
08 Изображения
09 Псевдоклассы и всевдоэлементы
10 Блочная модель
11 CSS Flexbox
12 CSS Grid
13 CSS Multi Columns
14 Позиционирование элементов
15 Вычисление значения (функция calc)
16 Адаптивная верстка. Мобильная версия сайта
17 Инструменты разработчика
18 Списки: маркированные и нумерованные
19 Ссылки. Виды ссылок
20 Переходы в CSS
21 Элементы формы: поля ввода и кнопки
22 Трансформация в CSS
23 Анимация в CSS 
24 Применение фильтров к элементам
25 Рисование базовых SVG-фигур на HTML
26 Задание контура в CSS clip-path
27 Добавление видео и аудио на сайт
28 Переменные в CSS
29 Препроцессоры CSS
30 Организация структуры проекта
31 Adobe Photoshop для верстальщика
32 Яндекс Карты и Google Maps для сайта
33 Яндекс Метрика
34 Онлайн редакторы кода
35 Виджеты ВКонтакте
36 Вендорные префиксы. Автопрефиксер
37 Хостинг проектов GitHub
38 Вёрстка по БЭМ
39 Использование фреймворка Bootstrap
40 Концепция Pixel Perfect`;

const themeJsStr =
`01 Стандарт ECMAScript
02 Подключение файлов JavaScript
03 Типы данных. Переменные и константы
04 Вывод сообщения пользователю
05 Условные операторы
06 Объектная модель представления документа (DOM)
07 Выборка элементов страницы
08 Методы innerText и innerHTML
09 Функции
10 События и обработчики событий
11 Обращение к CSS свойствам и классам
12 Выборка элементов формы
13 Циклы for, while
14 Объекты
15 Массивы
16 Строки
17 Числа
18 Классы
19 Дата и время
20 Локальное хранилище
21 Работа с атрибутами
22 Создание элементов
23 Таймеры
24 Обработка исключений
25 Запросы к серверу
26 Рисование на Canvas
27 Отладка в браузере Chrome`;

document.addEventListener('DOMContentLoaded', function () {
    const themeHtml = document.getElementById('courses__theme-html');
    const themeJs = document.getElementById('courses__theme-js');

    themeHtml.innerHTML = themeHtmlStr;
    themeJs.innerHTML = themeJsStr;

    new Swiper('.courses__photo', {
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
});