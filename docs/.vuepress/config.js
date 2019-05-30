const path = require('path')

module.exports = {
    base: 'blog',
    title: '汪中杰',
    description: '一切皆有可能!',
    base: "/blog-vuepress/",
    port:"2222",
    // theme: path.resolve(__dirname, '../../lib'),
    themeConfig: {
        //   导航栏
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '前端',
                items: [{
                        text: 'Web',
                        link: '/web/'
                    },
                    {
                        text: 'JavaScript',
                        link: '/javascript/'
                    },
                    {
                        text: 'Vue',
                        link: '/vue/'
                    },
                    {
                        text: 'React',
                        link: '/react/'
                    },
                    {
                        text:'面试',
                        link: '/interview/'
                    }
                ]
            },
            {
                text: 'Go',
                link: '/go/'
            },
            {
                text: 'Flutter',
                link: '/flutter/'
            },
            {
                text: 'Github',
                link: 'https://github.com/UvDream'
            },
        ],
        sidebar: {
            '/web/': [{
                title: "Web基础",
                collapsable: false,
                children: [
                    "",
                    "web1"
                ]
            }],
            '/javascript/': [{
                title: "JavaScript",
                collapsable: false,
                children: [
                    "",
                    ['js1', '手写代码'],
                ]
            }],
            '/vue/': [{
                title: "Vue",
                collapsable: false,
                children: [
                    ""
                ]
            }],
            '/react/': [{
                title: "React",
                collapsable: false,
                children: [
                    "",
                    "props",
                    "vscode"
                ]
            }],
            '/interview/':[{
                title:"面试",
                collapsable:false,
                children:[
                    "",
                    "css",
                    "js",
                    "vue",
                    "code",
                    "type",
                    "http",
                    "catch"
                ]
            }]

        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    },
    plugins: [
        "@vuepress/back-to-top",
        "@vuepress/nprogress",
        ['@vssue/vuepress-plugin-vssue', {
            platform: 'github',
            owner: 'UvDream',
            repo: 'blog-vuepress',
            clientId: 'd75a9c8894c2a2034aa2',
            clientSecret: '0d3500776dd388c9af6c96a0179648fbf69394d1',
        }],
    ]
}