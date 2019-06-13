const path = require('path')

module.exports = {
    base: 'blog',
    title: 'U世界的V梦想',
    description: '一切皆有可能!',
    base: "/blog-vuepress/",
    port: "2222",
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
                        text: "Web",
                        link: '/web/'
                    },
                    {
                        text: 'JavaScript',
                        link: '/javascript/'
                    },
                    {
                        text: 'Angular',
                        link: '/angular/'
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
                        text: '面试',
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
                title: 'Web',
                collapsable: false,
                children: [
                    "",
                    "css"
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
                    "",
                    "vue1",
                    "vue2"
                ]
            }],
            '/react/': [{
                title: "React",
                collapsable: false,
                children: [
                    "",
                    "props",
                    "vscode",
                    "life",
                    "other"
                ]
            }],
            '/interview/': [{
                title: "面试",
                collapsable: false,
                children: [
                    "",
                    "css",
                    "js",
                    "vue",
                    "react",
                    "code",
                    "type",
                    "http",
                    "catch"
                ]
            }],
            '/flutter/': [{
                title: 'flutter',
                collapsable: false,
                children: [
                    "",
                    "flutter1"
                ]
            }]

        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    },
    plugins: [
        "@vuepress/back-to-top",
        "@vuepress/nprogress",
        ["@vuepress/pwa", {
            serviceWorker: true,
            updatePopup: {
                message: "New content is available.",
                buttonText: "Refresh"
            }
        }],
        ['@vssue/vuepress-plugin-vssue', {
            platform: 'github',
            owner: 'UvDream',
            repo: 'blog-vuepress',
            clientId: 'd75a9c8894c2a2034aa2',
            clientSecret: '0d3500776dd388c9af6c96a0179648fbf69394d1',
        }],
    ]
}