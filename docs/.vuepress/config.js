/*
 * @Author: wangzhongjie
 * @Date: 2019-07-22 13:41:35
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-29 13:54:39
 * @Description:配置
 * @Email: UvDream@163.com
 */
const path = require("path");

module.exports = {
  base: "blog",
  title: "U世界的V梦想",
  description: "一切皆有可能!",
  base: "/blog-vuepress/",
  port: "2222",
  // theme: path.resolve(__dirname, '../../lib'),
  themeConfig: {
    //   导航栏
    nav: [
      {
        text: "首页",
        link: "/"
      },
      {
        text: "前端",
        items: [
          {
            text: "Web",
            link: "/web/"
          },
          {
            text: "JavaScript",
            link: "/javascript/"
          },
          {
            text: "Angular",
            link: "/angular/"
          },
          {
            text: "Vue",
            link: "/vue/"
          },
          {
            text: "React",
            link: "/react/"
          },
          {
            text: "面试",
            link: "/interview/"
          }
        ]
      },
      {
        text: "Go",
        items: [
          {
            text: "介绍",
            link: "/go/"
          },
          {
            text: "40天",
            link: "/go-40/"
          }
        ]
      },
      {
        text: "Flutter",
        items: [
          {
            text: "基础",
            link: "/flutter/"
          },
          {
            text: "插件",
            link: "/flutter-plugin/"
          },
          {
            text: "深入",
            link: "/flutter-deep/"
          }
        ]
      },
      {
        text: "规范",
        link: "/specification/"
      },
      {
        text: "Github",
        link: "https://github.com/UvDream"
      }
    ],
    sidebar: {
      "/web/": [
        {
          title: "Web",
          collapsable: false,
          children: ["", "css"]
        }
      ],
      "/javascript/": [
        {
          title: "JavaScript",
          collapsable: false,
          children: ["", "js1", "closure", "design", "canvas", "canvas_api"]
        }
      ],
      "/vue/": [
        {
          title: "Vue",
          collapsable: false,
          children: ["", "vue1", "vue2"]
        }
      ],
      "/react/": [
        {
          title: "React",
          collapsable: false,
          children: ["", "props", "vscode", "life", "other", "redux"]
        }
      ],
      "/specification/": [
        {
          title: "代码规范",
          collapsable: false,
          children: ["", "git"]
        }
      ],
      "/interview/": [
        {
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
        }
      ],
      "/flutter/": [
        {
          title: "Flutter",
          collapsable: false,
          children: [
            "",
            "flutter1",
            "vscode",
            "dio",
            "iconfont",
            "state",
            "model",
            "flare",
            "build",
            "other"
          ]
        }
      ],
      "/flutter-plugin/": [
        {
          title: "Flutter插件",
          collapsable: false,
          children: ["", "shared_preferences", "provider"]
        }
      ]
    },
    sidebarDepth: 2,
    lastUpdated: "最后更新时间"
  },
  plugins: [
    "vuepress-plugin-cat",
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
        updatePopup: {
          message: "有新内容更新!",
          buttonText: "刷新"
        }
      }
    ],
    [
      "@vssue/vuepress-plugin-vssue",
      {
        platform: "github",
        owner: "UvDream",
        repo: "blog-vuepress",
        clientId: "1ea5b28de21b18dec3ee",
        clientSecret: "44ab2b53a57aacf09f894f50da5e954ff02dd949"
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  }
};
