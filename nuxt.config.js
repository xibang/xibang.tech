module.exports = {
  head: {
    title: '南京西邦智能科技',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '西邦,Willin,智能科技,微信小程序,抽奖活动,微信吸粉,技术咨询,系统研发' },
      { hid: 'description', name: 'description', content: '南京西邦智能科技有限公司官方网站。Nanjing XiBang Intelligence Technology LTD.' }
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'minireset.css',
    'purecss/build/pure.css',
    '~/assets/style.styl',
    'swiper/dist/css/swiper.css'
  ],
  env: {
    NODE_ENV: process.env.NODE_ENV || 'development'
  },
  modules: [
    '@nuxtjs/svg-sprite'
  ],
  build: {
    extractCSS: true,
    // ssr: false,
    extend(config, { isDev }) {
      if (isDev) {
        // eslint-disable-next-line no-param-reassign
        config.devtool = '#source-map';
      }
    }
  },
  generate: {
    fallback: true
  },
  svgSprite: {
    input: '~/node_modules/@fortawesome/fontawesome-free/svgs/'
  }
};
