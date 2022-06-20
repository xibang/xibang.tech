<template>
  <main id="contact">
    <XTitle title="联系我们" desc="Contact us" :img="bgUrl" />
    <div class="container">
      <div class="pure-g">
        <div class="pure-u-1 pure-u-md-1-2 text-right">
          <h3>联系方式</h3>
          <p>
            <svg-icon name="solid/phone-volume" />
            电话： 025-58177588
          </p>
          <p>
            <svg-icon name="solid/envelope" />邮箱： willin@xibang.tech
          </p>
          <p>地址：南京市·江北新区</p>
          <p>微信公众号： 西邦 （xibangtech）</p>
          <Lightbox :thumbnail="qrUrl" :images="[qrUrl]" />
        </div>
        <div class="pure-u-1 pure-u-md-1-2">
          <img class="map" src="~/assets/images/map.png">
        </div>
      </div>
    </div>


    <div class="contact" :style="`background-image: url(${statBgUrl});`">
      <div class="container">
        <h3>联系客服</h3>
        <div class="pure-g">
          <div class="pure-u-1 pure-u-md-1-3">
            <h4>Willin</h4>
            <p>
              QQ：
              <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2539929&amp;site=qq&amp;menu=yes">
                <img border="0" src="http://wpa.qq.com/pa?p=2:2539929:41" alt="点击这里给我发消息" title="点击这里给我发消息">
              </a>
            </p>
            <p>微信：willinx</p>
            <p>邮箱：willin@xibang.tech</p>
          </div>
          <div class="pure-u-1 pure-u-md-1-3">
            <h4>Aki Wu</h4>
            <p>
              QQ：
              <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=276578497&amp;site=qq&amp;menu=yes">
                <img border="0" src="http://wpa.qq.com/pa?p=2:276578497:41" alt="点击这里给我发消息" title="点击这里给我发消息">
              </a>
            </p>
            <p>微信： wx276578497</p>
            <p>邮箱： wuminzhe@gmail.com</p>
          </div>
          <div class="pure-u-1 pure-u-md-1-3">
            <h4>Puml</h4>
            <p>
              QQ：
              <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=809360004&amp;site=qq&amp;menu=yes">
                <img border="0" src="http://wpa.qq.com/pa?p=2:809360004:41" alt="点击这里给我发消息" title="点击这里给我发消息">
              </a>
            </p>
            <p>微信： pml1988</p>
          </div>
        </div>
      </div>
    </div>

    <div id="payment" class="text-center">
      <h3>支付信息</h3>
      <div class="pure-g">
        <div class="pure-u-1 pure-u-md-1-2">
          <h4>对公打款</h4>
          <p>开户银行：南京银行南京城北支行</p>
          <p>名称：南京西邦智能科技有限公司</p>
          <p>账号：0141 2400 0000 0713</p>
        </div>
        <div class="pure-u-1 pure-u-md-1-2">
          <h4>支付宝</h4>
          <p>账号：willin@xibang.tech</p>
          <Lightbox :thumbnail="alipayUrl" :images="[alipayUrl]" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Lightbox from 'vue-pure-lightbox';

import bgUrl from '~/assets/images/contact.jpg';
import statBgUrl from '~/assets/images/stat.png';
import qrUrl from '~/assets/images/qr-mp.jpg';
import alipayUrl from '~/assets/images/alipay.png';
import XTitle from '~/components/partial/title';

export default {
  components: {
    Lightbox,
    XTitle
  },
  data: () => ({
    bgUrl,
    statBgUrl,
    qrUrl,
    alipayUrl
  }),
  head() {
    return {
      title: '联系我们 | 西邦智能科技',
      meta: [
        { hid: 'description', name: 'description', content: '南京西邦智能科技有限公司联系方式。' },
        { hid: 'keywords', name: 'keywords', content: '联系方式,西邦' }
      ]
    };
  }
};
</script>

<style lang="stylus">
#contact
  .contact
    background-color: #4b5d73
    background-size: cover
    color: #ccc
  h3
    margin-top: 0.5em
    color: #FECF39
    font-weight: bolder
    font-size: 2em
  h4
    font-size: 1.5em
    color: #f60
  p
    margin: 0.5em
    svg
      width: 1em
      height: 1em
      margin: 0 0.25em
      vertical-align: middle
  .map
    border: 3px solid rgba(0,0,0,.25)
    border-radius: 1em
  .pure-g > div
    padding: 2em
    .lightbox__thumbnail img
      max-width:50%
      margin: 1em 0
      display: inline

@media only screen and (max-width: 768px){
  #contact {
    .pure-g .text-right {
      text-align: left
    }
    .pure-g > div .lightbox__thumbnail img {
      max-width: 100%
    }
  }
}
</style>
