<template>
  <main id="contact">
    <div class="uk-height-large uk-background-cover uk-flex uk-background-fixed" uk-parallax="bgy: -250" :style="`background-image: url(${bgUrl});`">
      <h2 class="uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="target: #contact; blur: 0,10;">
        联系我们
      </h2>
    </div>

    <div class="uk-card uk-card-body">
      <ul class="uk-breadcrumb">
        <li>
          <NuxtLink to="/">
            主页
          </NuxtLink>
        </li>
        <li><span>联系我们</span></li>
      </ul>
    </div>

    <div class="uk-section uk-section-primary uk-preserve-color">
      <div class="uk-container">
        <div class="uk-panel uk-light uk-margin-medium">
          <h3>联系方式</h3>
        </div>

        <div class="uk-grid-match uk-child-width-expand@m" uk-grid>
          <div>
            <div class="uk-card uk-card-default uk-card-body" uk-lightbox>
              <p>
                微信公众号：
                <a :href="qrUrl" data-alt="西邦（xibangtech）" class="uk-link-heading">
                  西邦 <span uk-icon="icon: image" />
                </a>
              </p>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <p>电话： 025-58177588</p>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <p>邮箱： willin@xibang.tech</p>
            </div>
          </div>
        </div>

        <div class="uk-grid-match uk-child-width-expand@m" uk-grid>
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <p>地址：南京麒麟高新技术产业开发区天骄路100号华清园7栋2楼</p>
            </div>
          </div>
        </div>

        <div class="uk-panel uk-light uk-margin-medium">
          <h3>客服</h3>
        </div>

        <div class="uk-grid-match uk-child-width-expand@m" uk-grid>
          <div>
            <div class="uk-card uk-card-default uk-card-body">
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
          </div>

          <div>
            <div class="uk-card uk-card-default uk-card-body">
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="uk-section uk-section-muted">
      <div class="uk-container">
        <div class="uk-panel uk-margin-medium">
          <h3>支付信息</h3>
          <span class="uk-label uk-label-danger uk-padding-small">
            <span uk-icon="icon: warning" />
            注意支付安全，确认支付金额及备注信息。
          </span>
        </div>
        <div class="uk-grid-match uk-child-width-expand@m" uk-grid>
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <h4>对公打款</h4>
              <p>开户银行：南京银行南京城北支行</p>
              <p>名称：南京西邦智能科技有限公司</p>
              <p>账号：0141 2400 0000 0713</p>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <h4>支付宝</h4>
              <p>账号：willin@xibang.tech</p>
              <div uk-lightbox>
                <a :href="alipayUrl" data-alt="西邦（xibangtech）" class="uk-link-heading">
                  扫码支付 <span uk-icon="icon: image" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import bgUrl from '~/assets/images/contact.jpg';
import qrUrl from '~/assets/images/qr-mp.jpg';
import alipayUrl from '~/assets/images/alipay.png';

export default {
  data: () => ({
    bgUrl,
    qrUrl,
    alipayUrl
  })
};
</script>

<style lang="stylus">
#contact
  h2
    letter-spacing: 0.25em
    -webkit-text-stroke: 1px #000
    -webkit-text-fill-color: transparent
    font-weight: bolder
</style>
