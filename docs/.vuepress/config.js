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
        items:[
          { text: 'Web', link: '/web/' },
          { text: 'JavaScript', link: '/javascript/' },
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
    sidebar:{
      '/web/':[
        {
          title:"Web基础",
          collapsable: false,
          children:[
            "",
            "web1"
          ]
        }
      ],
      '/javascript/':[
        {
          title:"JavaScript",
          collapsable: false,
          children:[
            "",
            "js1",
          ]
        }
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