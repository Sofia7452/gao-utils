/**
 * Generated by "@vuepress/internal-site-data"
 */
export const siteData = {
  "title": "网站标题",
  "description": "",
  "base": "/",
  "headTags": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://s3.bmp.ovh/imgs/2023/02/16/8d42caf2b4ba3334.png"
      }
    ]
  ],
  "pages": [
    {
      "title": "JavaEE",
      "frontmatter": {},
      "regularPath": "/Java/JavaEE.html",
      "relativePath": "Java/JavaEE.md",
      "key": "v-2d663d28",
      "path": "/Java/JavaEE.html"
    },
    {
      "title": "Basic1",
      "frontmatter": {},
      "regularPath": "/Basic/Basic1.html",
      "relativePath": "Basic/Basic1.md",
      "key": "v-b43991a8",
      "path": "/Basic/Basic1.html"
    },
    {
      "title": "JavaSE",
      "frontmatter": {},
      "regularPath": "/Java/JavaSE.html",
      "relativePath": "Java/JavaSE.md",
      "key": "v-6d4daf68",
      "path": "/Java/JavaSE.html"
    },
    {
      "title": "Basic2",
      "frontmatter": {},
      "regularPath": "/Basic/Basic2.html",
      "relativePath": "Basic/Basic2.md",
      "key": "v-2e1dca6a",
      "path": "/Basic/Basic2.html"
    },
    {
      "title": "Home",
      "frontmatter": {
        "home": true,
        "heroImage": "https://s3.bmp.ovh/imgs/2022/12/02/bc7428e3916c3a4c.jpg",
        "heroText": "Hero标题",
        "tagline": "Hero副标题",
        "actionText": "快速上手→",
        "actionLink": "/README.md",
        "features": [
          {
            "title": "简洁至上",
            "details": "以Markdown为中心的项目结构，以最少的配置帮助你专注于写作。"
          },
          {
            "title": "Vue驱动",
            "details": "享受Vue+ webpack 的开发体验，在Markdown中使用Vue组件，同时可以使用Vue来开发自定义主题。"
          },
          {
            "title": "高性能",
            "details": "VuePress为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。"
          }
        ],
        "footer": "粤ICP备2022067627号-1  粤公网安备 44011302003646号"
      },
      "regularPath": "/",
      "relativePath": "README.md",
      "key": "v-51abfa33",
      "path": "/"
    }
  ],
  "themeConfig": {
    "logo": "https://s3.bmp.ovh/imgs/2022/12/02/bc7428e3916c3a4c.jpg",
    "nav": [
      {
        "text": "首页",
        "link": "/"
      },
      {
        "text": "计算机基础",
        "link": "/CouputerBasic"
      },
      {
        "text": "Java",
        "items": [
          {
            "text": "JavaSE",
            "link": "/JavaSE"
          },
          {
            "text": "JavaEE",
            "link": "https://www.peterjxl.com/JavaEE"
          }
        ]
      }
    ],
    "sidebar": [
      {
        "title": "Basic",
        "path": "/Basic/",
        "collapsable": false,
        "sidebarDepth": 2,
        "children": [
          "/Basic/Basic1",
          "/Basic/Basic2"
        ]
      },
      {
        "title": "Java",
        "path": "/Java/",
        "collapsable": false,
        "sidebarDepth": 2,
        "children": [
          "/Java/JavaSE",
          "/Java/JavaEE"
        ]
      }
    ]
  }
}