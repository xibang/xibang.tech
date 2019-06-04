<template>
  <footer id="footer">
    <XMap />
    <XNav />
    <p class="text-right">
      Copyright 2019~{{ year }} &copy; 南京西邦智能科技有限公司
      <small class="hide-xs">
        Nanjing XiBang Intelligence Technology LTD.
      </small>
      <br>
      <small class="hide-xs">
        Hosted by
        <a href="https://cloud.tencent.com/redirect.php?redirect=1040&amp;cps_key=9dd1f00ae67019090c9d12d68d7f22d0&amp;from=console" target="_blank">
          腾讯云
        </a>,
      </small>
      <small class="hide-xs">
        CDN by <a href="https://www.cloudflare.com" target="_blank">
          CloudFlare
        </a>,
      </small>
      <small>
        <a href="http://www.beian.miit.gov.cn" target="_blank">
          苏ICP备19022432号
        </a>
      </small>
    </p>
  </footer>
</template>

<script>
import XNav from './nav';
import XMap from './map';

export default {
  components: {
    XMap,
    XNav
  },
  data: () => ({
    year: new Date().getFullYear()
  })
};
</script>

<style lang="stylus">
footer
  .text-right
    font-size: 0.8em
    padding: 0.5em
    text-align: right

@media only screen and (max-width: 768px) {
  .hide-xs {
    display: none
  }
}
</style>
