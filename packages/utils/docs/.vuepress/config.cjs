module.exports = {
  title: '网站标题',
  head: [
    ['link', { rel: 'icon', href: 'https://s3.bmp.ovh/imgs/2023/02/16/8d42caf2b4ba3334.png' }]
  ],
  themeConfig: {
    logo: 'https://s3.bmp.ovh/imgs/2022/12/02/bc7428e3916c3a4c.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '计算机基础', link: '/CouputerBasic' },
      {
        text: 'Java', items: [
          { text: 'JavaSE', link: '/JavaSE' },
          { text: 'JavaEE', link: 'https://www.peterjxl.com/JavaEE' }
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
          '/Basic/Basic1',
          '/Basic/Basic2'
        ]
      },

      {
        title: 'Java',
        path: '/Java/',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/Java/JavaSE',
          '/Java/JavaEE'
        ]
      }
    ]
  }
}
