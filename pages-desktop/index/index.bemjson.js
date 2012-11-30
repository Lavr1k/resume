({
    block: 'b-page',
    title: 'Резюме',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' }
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
    }]
})