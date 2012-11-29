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
                            url: ''
                        }
                    },{
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            content: 'Образование',
                            url: ''
                        }
                    },{
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            content: 'Яшкола',
                            url: ''
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
                            url: ''
                        }
                    },{
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            content: 'Workflow',
                            url: ''
                        }
                    },{
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            content: 'Работа в команде',
                            url: ''
                        }
                    }]
                }]
            }]
        }
    }]
})