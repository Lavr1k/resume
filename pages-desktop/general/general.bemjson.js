({
    block: 'b-page',
    title: 'Основные вопросы',
    head: [
        { elem: 'css', url: '_general.css', ie: false },
        { elem: 'css', url: '_general.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_general.js' }
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
                            url: '#1'
                        }
                    },{
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            content: 'Образование',
                            url: '#2'
                        }
                    },{
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            content: 'Яшкола',
                            url: '#3'
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
                            url: '/pages-desktop/development/development.html#1'
                        }
                    },{
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            content: 'Workflow',
                            url: '/pages-desktop/development/development.html#2'
                        }
                    },{
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            content: 'Работа в команде',
                            url: '/pages-desktop/development/development.html#3'
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
            content: 'Фамилия, имя, отчество'
        },{
            elem: 'answer',
            content: 'Лавриненко Александр Александрович'
        }]
    },{
        block: 'b-info',
        content: [{
            elem: 'question',
            content: 'Год рождения'
        },{
            elem: 'answer',
            content: '1989 год рождения'
        }]
    },{
        block: 'b-info',
        content: [{
            elem: 'question',
            content: 'Город проживания'
        },{
            elem: 'answer',
            content: 'Симферополь'
        }]
    },{
        block: 'b-info',
        content: [{
            elem: 'question',
            name: '2',
            content: 'Вуз, факультет, специальность, кафедра'
        },{
            elem: 'answer',
            content: [{
                elem: 'paragraph',
                content: 'Ялтинский Университет Менеджмента, факультет «Программное обеспечение автоматизированных систем», специальность программист, кафедра «Компьютерные науки»'
            },{
                elem: 'paragraph',
                content: 'Ялтинский филиал Европейского университета, факультет «Информационных систем и технологий», информационные управляющие системы и технологии, кафедра информатики'
            }]
        }]
    },{
        block: 'b-info',
        content: [{
            elem: 'question',
            content: 'Год окончания вуза'
        },{
            elem: 'answer',
            content: '2011 год (бакалавр)'
        }]
    },{
        block: 'b-info',
        content: [{
            elem: 'question',
            content: 'Уровень владения английским языком'
        },{
            elem: 'answer',
            content: 'Средний'
        }]
    },{
        block: 'b-info',
        content: [{
            elem: 'question',
            name: '3',
            content: 'Чего вы ожидаете от участия в Школе?'
        },{
            elem: 'answer',
            content: 'Получение бесценного опыта, новых знаний'
        }]
    },{
        block: 'b-info',
        content: [{
            elem: 'question',
            content: 'Откуда вы о нас узнали?'
        },{
            elem: 'answer',
            content: 'По рекомендации'
        }]
    },{
        block: 'b-info',
        content: [{
            elem: 'question',
            content: 'Сколько времени вы готовы уделять стажировке или работе в Яндексе?'
        },{
            elem: 'answer',
            content: 'Все'
        }]
    }]
})