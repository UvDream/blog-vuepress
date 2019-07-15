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
                text:'规范',
                link:'/specification/'
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
                    ['closure','闭包'],
                    ['design','设计模式'],
                    ['canvas','Canvas'],
                    ['canvas_api','Canvas-Api']
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
            '/specification/':[
                {
                title:"代码规范",
                collapsable: false,
                children:[
                    "",
                    "git"
                ]
                }
            ],
            '/interview/': [{
                title: "面试",
                collapsable: false,
                children: [
                    "",
                    "css",
                    "javascript",
                    "vue",
                    "typescript",
                    "react",
                    "code",
                    "type",
                    "http",
                    "catch"
                ]
            }],
            '/flutter/': [{
                title: 'Flutter',
                collapsable: false,
                children: [
                    "",
                    "flutter1",
                    "vscode",
                    "dio",
                    "plugin"
                ]
            }]

        },
        sidebarDepth: 2,
        lastUpdated: '最后更新时间'
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
        ['@vuepress/pwa',{
            serviceWorker: true,
            updatePopup: true,
            updatePopup: {
                message: "有新内容更新!",
                buttonText: "刷新"
            }
        }],
        ['@vssue/vuepress-plugin-vssue', {
            platform: 'github',
            owner: 'UvDream',
            repo: 'blog-vuepress',
            clientId: 'd75a9c8894c2a2034aa2',
            clientSecret: '0d3500776dd388c9af6c96a0179648fbf69394d1',
        }],
    ],
	 markdown: {
    lineNumbers: true
  }
}