module.exports = {
  title: '51job前端部门业务工具库',
  head: [
    ['link', { rel: 'icon', href: 'https://s3.bmp.ovh/imgs/2023/02/16/8d42caf2b4ba3334.png' }]
  ],
  themeConfig: {
    logo: 'https://s3.bmp.ovh/imgs/2022/12/02/bc7428e3916c3a4c.jpg',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '组件库', items: [
          { text: 'Basic', link: '/Basic' },
          { text: 'Request', link: '/Request' },
        ]
      },
    ],
    sidebar: [
      {
        title: 'Basic',
        path: '/Basic/',
        collapsable: false,    //不折叠
        sidebarDepth: 2,
        children: [
          '/Basic/sum',
        ]
      },

      {
        title: 'Request',
        path: '/Request/',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/Request/axiosHandle',
        ]
      }
    ]
  }
}
