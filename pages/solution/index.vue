<template>
  <main id="solution">
    <XTitle title="行业解决方案" desc="XiBang Elite Solutions" img="/images/header/solution.jpg" />
    <div class="pure-g container text-center">
      <div class="pure-u-1 pure-u-md-1-3">
        <div class="box">
          <h3>微信</h3>
          <p>完整的微信公众号、小程序解决方案，包括活动、吸粉、支付等功能模块。</p>
          <NuxtLink to="/solution/wechat" class="pure-button button-primary">
            方案详情
          </NuxtLink>
        </div>
      </div>
      <div class="pure-u-1 pure-u-md-1-3">
        <div class="box">
          <h3>物联网</h3>
          <p>物联网智能家居、无人机管理平台等行业级解决方案及技术咨询。</p>
          <NuxtLink to="/solution/iot-platform" class="pure-button button-primary">
            方案详情
          </NuxtLink>
        </div>
      </div>
       <div class="pure-u-1 pure-u-md-1-3">
        <div class="box">
          <h3>AR</h3>
          <p>增强现实 AR 行业级解决方案及技术咨询。</p>
          <NuxtLink to="/solution/ar" class="pure-button button-primary">
            方案详情
          </NuxtLink>
        </div>
      </div>
      <div class="pure-u-1 pure-u-md-1-3">
        <div class="box">
          <h3>区块链</h3>
          <p>全方位、全生命周期的区块链企业应用解决方案。</p>
          <NuxtLink to="/solution/blockchain" class="pure-button button-primary">
            方案详情
          </NuxtLink>
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
      title: '解决方案 | 西邦智能科技',
      meta: [
        { hid: 'description', name: 'description', content: '行业解决方案，物联网解决方案，微信解决方案，区块链解决方案。' },
        { hid: 'keywords', name: 'keywords', content: '区块链,解决方案,blockchain,iot,物联网,微信,wechat,西邦' }
      ]
    };
  }
};
</script>

<style lang="stylus">
#solution {
  h3 {
    font-size: 2em;
    line-height: 2em;
    color: #FECF39;
    font-weight: bolder
  }
  h4 {
    font-size: 1.5em;
    line-height: 2em;
    color: rgba(0,128,0,.5);
    font-weight:bold
  }
  p, li {
    line-height: 2em
  }
  .pure-g {
    .box {
      margin: 1em;
      padding: 1em;
      border: 1px solid rgba(0,128,0,.5);
      border-radius: 10px;
    }
  }
  .pure-button {
    margin: 1em 0;
  }
}
</style>
