({
    block: 'b-page',
    title: 'Резюме',
    head: [
        { elem: 'css', url: '_development.css', ie: false },
        { elem: 'css', url: '_development.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_development.js' }
    ],
    content: [{
        block: 'b-header',
        content: {
            block: 'b-menu',
            js: true,
            content: [{
                elem: 'item',
                mods: {
                    type: 'main'
                },
                content: {
                    block: 'b-link',
                    content: 'Главная',
                    url: '/pages-desktop/index/index.html'
                }
            },{
                elem: 'item',
                mods: {
                        type: 'main'
                    },
                attrs: {
                    id: 'general'
                },
                content: [{
                    block: 'b-link',
                    content: 'Общие вопросы',
                    url: '/pages-desktop/general/general.html'
                },{
                    block: 'b-menu',
                    attrs: {
                        id: 'general-expand'
                    },
                    mods: {
                        type: 'expand'
                    },
                    content: [{
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            content: 'О себе',
                            url: '/pages-desktop/general/general.html#1'
                        }
                    },{
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            content: 'Образование',
                            url: '/pages-desktop/general/general.html#2'
                        }
                    },{
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            content: 'Яшкола',
                            url: '/pages-desktop/general/general.html#3'
                        }
                    }]
                }]
            },{
                elem: 'item',
                mods: {
                        type: 'main'
                    },
                attrs: {
                    id: 'development'
                },
                content: [{
                    block: 'b-link',
                    content: 'Опыт разработки',
                    url: '/pages-desktop/development/development.html'
                },{
                    block: 'b-menu',
                    attrs: {
                        id: 'development-expand'
                    },
                    mods: {
                        type: 'expand'
                    },
                    content: [{
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            content: 'Языки программирования',
                            url: '#1'
                        }
                    },{
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            content: 'Workflow',
                            url: '#2'
                        }
                    },{
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            content: 'Работа в команде',
                            url: '#3'
                        }
                    }]
                }]
            }]
        }
    },{
        block: 'b-info',
        content: [{
            elem: 'question',
            name: '1',
            content: 'Расскажите нам о вашем опыте разработки. Ничего не упускайте: это может быть как серьезный интерфейс, так и просто домашняя страничка'
        },{
            elem: 'answer',
            content: 'Различные мелкие проекты, по типу сайтов-визиток и магазинов.'
        }]
    },{
        block: 'b-info',
        content: [{
            elem: 'question',
            content: 'Какие языки программирования, фреймворки и технологии вы использовали? Сложились ли у вас личные предпочтения?'
        },{
            elem: 'answer',
            content: 'HTML, CSS, BEM, JavaScript, PHP - это то что касается web. Я активно изучаю JavaScript потому, что считаю его универсальным и перспективным, так как его можно использовать и для клиентской части и для серверной'
        }]
    },{
        block: 'b-info',
        content: [{
            elem: 'question',
            name: '2',
            content: 'С какими редакторами и средами разработки вы знакомы? Чем обычно пользуетесь?'
        },{
            elem: 'answer',
            content: 'WebStorm, Sublime Text 2 немного знаком с Vim. Обычно пользуюусь Sublime Text 2'
        }]
    },{
        block: 'b-info',
        content: [{
            elem: 'question',
            content: 'С какими ОС приходилось сталкиваться? Для каких целей вы их применяли?'
        },{
            elem: 'answer',
            content: 'Windows, Linux. Windows в основном для развлечения, а Linux для разработки, так как при помощи Linux\'овой консоли работать в сети на много удобнее и проще'
        }]
    },{
        block: 'b-info',
        content: [{
            elem: 'question',
            content: 'Приходилось ли вам работать с системами контроля версий? С какими? Какая из них вам нравится больше всего?'
        },{
            elem: 'answer',
            content: 'Приходилось работать с Git'
        }]
    },{
        block: 'b-info',
        content: [{
            elem: 'question',
            name: '3',
            content: 'Использовали ли вы системы постановки и ведения задач?'
        },{
            elem: 'answer',
            content: 'Да, МегаПлан.'
        }]
    },{
        block: 'b-info',
        content: [{
            elem: 'question',
            content: 'Какие полезные для фронтенд-разработчика ресурсы вы используете и готовы посоветовать?'
        },{
            elem: 'answer',
            content: 'caniuse.com, htmlbook.ru, bem.info, jvascript.ru, '
        }]
    },{
        block: 'b-info',
        content: [{
            elem: 'question',
            content: 'Где вы работали раньше? Что именно делали? Есть ли у вас опыт работы в команде?'
        },{
            elem: 'answer',
            content: 'Да, я работаю в web-студии Tadatuta'
        }]
    }]
})
