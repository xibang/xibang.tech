export default [
  {
    name: '关于',
    to: '/about',
    children: [
      {
        name: '公司介绍',
        to: '/about'
      },
      {
        name: '团队成员',
        to: '/about/team'
      },
      {
        name: '开源项目',
        to: '/opensource'
      },
      {
        name: '赞助商',
        to: '/sponsers'
      }
    ],
    icon: 'world'
  },
  // {
  //   name: '服务',
  //   to: '/service',
  //   icon: 'heart',
  //   children: [
  //     {
  //       name: '业务范围',
  //       to: '/service'
  //     },
  //     {
  //       name: '项目流程',
  //       to: '/service/flow'
  //     },
  //     {
  //       name: '项目案例',
  //       to: '/project'
  //     }
  //   ]
  // },
  {
    name: '产品',
    to: '/product',
    children: [
      // {
      //   name: '开源捐',
      //   to: '/product/kaiyuan-fund'
      // },
      {
        name: '智能二维码活码',
        to: 'https://qr.xibang.tech',
        type: 'outer'
      },
      {
        name: 'Github 中国排行榜',
        to: 'https://github.kaiyuan.fund',
        type: 'outer'
      }
    ],
    icon: 'happy'
  },
  {
    name: '解决方案',
    to: '/solution',
    children: [
      {
        name: '微信解决方案',
        to: '/solution/wechat'
      },
      {
        name: '物联网解决方案',
        to: '/solution/iot-platform'
      },
      {
        name: '区块链解决方案',
        to: '/solution/blockchain'
      }
    ],
    icon: 'bolt'
  },
  {
    name: '联系',
    to: '/contact',
    icon: 'receiver'
  },
  {
    name: 'Github',
    to: 'https://github.com/xibang',
    icon: 'github-alt',
    type: 'outer'
  }
];
