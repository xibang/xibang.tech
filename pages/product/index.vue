<template>
  <main id="solution">
    <XTitle title="自主产品" desc="XiBang Products" img="/images/header/product.jpg" />
    <div class="pure-g container text-center">
      <div class="pure-u-1 pure-u-md-1-3">
        <div class="box">
          <h3>西邦二维码活码</h3>
          <p>自主研发的智能二维码行销推广工具平台。</p>
          <a href="https://qr.xibang.tech" target="_blank" class="pure-button button-primary">
            产品官网
          </a>
          <a href="https://about.xibang.tech/qr/intro" target="_blank" class="pure-button button-primary">
            介绍文档
          </a>
        </div>
      </div>
      <div class="pure-u-1 pure-u-md-1-3">
        <div class="box">
          <h3>Github中国排行榜</h3>
          <p>使用GraphQL API v4每日更新。</p>
          <a href="https://github.kaiyuan.fund" target="_blank" class="pure-button button-primary">
            产品官网
          </a>
          <a href="https://github.com/xibang/github.kaiyuan.fund" target="_blank" class="pure-button button-primary">
            项目源码
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import XTitle from '~/components/partial/title';

export default {
  components: {
    XTitle
  },
  head() {
    return {
      title: '自主产品 | 西邦智能科技',
      meta: [
        { hid: 'description', name: 'description', content: '西邦智能科技旗下自主研发及运营的产品。' },
        { hid: 'keywords', name: 'keywords', content: '产品,自主,西邦' }
      ]
    };
  }
};
</script>
