export default [
  {
    name: '关于',
    to: '/about',
    icon: 'world',
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
      }
    ]
  },
  {
    name: '服务',
    to: '/service',
    icon: 'heart',
    children: [
      {
        name: '业务范围',
        to: '/service'
      },
      {
        name: '项目流程',
        to: '/service/flow'
      },
      {
        name: '项目案例',
        to: '/project'
      }
    ]
  },
  {
    name: '产品',
    to: '/product',
    icon: 'happy',
    children: [
      {
        name: 'Github 中国排行榜',
        to: '/product/github.kaiyuan.fund'
      }
    ]
  },
  {
    name: '解决方案',
    to: '/sulution',
    icon: 'bolt',
    children: [
      {
        name: '物联网管理平台',
        to: '/solution/iot-platform'
      },
      {
        name: '反作弊抽奖、投票活动',
        to: '/solution/lottery-vote'
      }
    ]
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
