module.exports = {
  base:'blog',
  title: '汪中杰',
  description: '一切皆有可能!',
  base: "/blog-vuepress/",
  themeConfig: {
    //   导航栏
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '前端',
        link: '/web/'
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
    sidebar:{
      '/web/':[
        "",
        "web1"
      ]
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: './components'
      }
    ]
  ]

}