module.exports = {
  head: {
    title: 'XiBang Intelligence Technology',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '西邦,Willin,智能科技,微信小程序,抽奖活动,微信吸粉,技术咨询,系统研发' },
      { hid: 'description', name: 'description', content: '南京西邦智能科技有限公司官方网站。' }
    ]
  },
  env: {
    NODE_ENV: process.env.NODE_ENV || 'development'
  },
  build: {
    extractCSS: true,
    extend(config, { isDev }) {
      if (isDev) {
        // eslint-disable-next-line no-param-reassign
        config.devtool = '#source-map';
      }
    }
  },
  generate: {
    fallback: true
  }
};
