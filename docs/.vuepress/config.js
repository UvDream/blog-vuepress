/*
 * @Author: wangzhongjie
 * @Date: 2019-07-22 13:41:35
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-10-08 09:45:21
 * @Description:配置
 * @Email: UvDream@163.com
 */
const path = require("path");

module.exports = {
  base: "/blog-vuepress/",
  title: "U世界的V梦想",
  description: "一切皆有可能!",
  // theme: path.resolve(__dirname, '../../lib'),
  themeConfig: {
    //   导航栏
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "前端",
        items: [
          {
            text: "Web",
            link: "/web/",
          },
          {
            text: "JavaScript",
            link: "/javascript/",
          },
          {
            text: "Angular",
            link: "/angular/",
          },
          {
            text: "Vue",
            link: "/vue/",
          },
          {
            text:"Vite",
            link:"/vite/"
          },
          {
            text: "React",
            link: "/react/",
          },
          {
            text: "Vue-Next",
            link: "/vue-next/",
          },
          {
            text: "Nodejs",
            link: "/nodejs/",
          },
          {
            text: "Typescript",
            link: "/typescript/",
          },
          {
            text: "面试",
            link: "/interview/",
          },
        ],
      },
      {
        text: "Go",
        items: [
          {
            text: "介绍",
            link: "/go/",
          },
          {
            text: "40天",
            link: "/go-40/",
          },
        ],
      },
      {
        text: "Flutter",
        items: [
          {
            text: "基础",
            link: "/flutter/",
          },
          {
            text: "插件",
            link: "/flutter-plugin/",
          },
          {
            text: "深入",
            link: "/flutter-deep/",
          },
        ],
      },
      {
        text: "规范",
        link: "/specification/",
      },
      {
        text: "Github",
        link: "https://github.com/UvDream",
      },
    ],
    sidebar: {
      "/typescript/": [
        {
          title: "Web",
          collapsable: false,
          children: ["", "base-type", "类型推断和兼容","types自动生成"],
        },
      ],
      "/nodejs/": [
        {
          title: "Web",
          collapsable: false,
          children: ["", "nrm", "package"],
        },
      ],
      "/web/": [
        {
          title: "Web",
          collapsable: false,
          children: ["", "css", "kuayu", "webpack", "emoji","common-css"],
        },
      ],
      "/javascript/": [
        {
          title: "JavaScript",
          collapsable: false,
          children: ["", "js1", "closure", "design", "canvas", "canvas_api"],
        },
      ],
      "/vue/": [
        {
          title: "Vue",
          collapsable: false,
          children: ["", "vue1", "vue2"],
        },
      ],
      "/vue-next/": [
        {
          title: "Vue-next",
          collapsable: false,
          children: ["", "vue-vite", "vue-api"],
        },
      ],
      "/react/": [
        {
          title: "React",
          collapsable: false,
          children: ["", "props", "vscode", "life", "other", "redux"],
        },
      ],
      "/specification/": [
        {
          title: "代码规范",
          collapsable: false,
          children: ["", "git"],
        },
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
            "catch",
          ],
        },
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
            "other",
          ],
        },
      ],
      "/flutter-plugin/": [
        {
          title: "Flutter插件",
          collapsable: false,
          children: ["", "shared_preferences", "provider"],
        },
      ],
    },
    sidebarDepth: 2,
    lastUpdated: "最后更新时间",
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    "@vuepress/back-to-top",
    "fulltext-search",
    [
      "one-click-copy",
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ],
        copyMessage: "代码拷贝成功",
        duration: 3000,
        showInMobile: false,
      },
    ],
  ],
};
