<template>
  <main id="about">
    <XTitle title="赞助商" desc="Partners & Sponsers" img="/images/header/about.jpg" />
    <div id="sponsers" class="text-center container">
      <div class="content">
        <div class="partners">
          <h3>长期合作伙伴</h3>
          <p>
            <a v-for="item in partner" :key="item.name" :href="item.link" target="_blank">
              <img :src="item.logo" :alt="item.name" uk-image>
            </a>
          </p>
        </div>
        <div class="partners">
          <h3>赞助商</h3>
          <p v-if="sponser.length > 0">
            <a v-for="item in sponser" :key="item.name" :href="item.link" target="_blank">
              <img :src="item.logo" :alt="item.name" uk-image>
            </a>
          </p>
          <p v-else>
            虚位以待。
          </p>
        </div>
        <div id="payment">
          <h3>赞助方式</h3>
          <h4>投资入股</h4>
          <p>
            目前公司拟融资规模300万人民币，出让股份10%。如有意向，请与<NuxtLink to="/contact">
              我们联系
            </NuxtLink>。
          </p>
          <h4>现金捐赠</h4>
          <p>请留言备注您的信息，以便于鸣谢。</p>
          <div class="pure-g">
            <div class="pure-u-1 pure-u-md-1-3">
              <h4>支付宝对公账号</h4>
              <p>账号：willin@xibang.tech</p>
              <Lightbox :thumbnail="alipayUrl" :images="[alipayUrl]" />
            </div>
            <div class="pure-u-1 pure-u-md-1-3">
              <h4>支付宝私人赞助</h4>
              <p>账号：2539929@qq.com</p>
              <Lightbox thumbnail="/images/donate/alipay.png" :images="['/images/donate/alipay.png']" />
            </div>
            <div class="pure-u-1 pure-u-md-1-3">
              <h4>微信赞助</h4>
              <Lightbox thumbnail="/images/donate/wx.png" :images="['/images/donate/wx.png']" />
            </div>
          </div>
        </div>
      </div>
      <XAside />
    </div>
  </main>
</template>

<script>
import Lightbox from 'vue-pure-lightbox';
import XTitle from '~/components/partial/title';
import XAside from '~/components/widgets/about-aside';
import alipayUrl from '~/assets/images/alipay.png';
import partner from '~/assets/js/partner';

export default {
  components: {
    Lightbox,
    XTitle,
    XAside
  },
  data: () => ({
    alipayUrl,
    partner: partner.filter(x => x.type === 'partner'),
    sponser: partner.filter(x => x.type !== 'partner')
  }),
  head() {
    return {
      title: '赞助商 | 西邦智能科技',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '赞助商,西邦' }
      ]
    };
  }
};
</script>

<style lang="stylus">
#sponsers
  .content
    text-align: left
  h3
    margin: 0.5em 0
    color: #FECF39
    font-weight: bolder
    font-size: 2em
  h4
    font-size: 1.5em
    margin: 0.5em 0
    color: #f60
  p
    margin: 0.5em
    svg
      width: 1em
      height: 1em
      margin: 0 0.25em
      vertical-align: middle
  .partners img
    max-height: 60px
  .lightbox__thumbnail img
    max-width: 320px
</style>
