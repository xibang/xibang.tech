<template>
  <footer class="uk-card uk-padding-small uk-card-secondary">
    <div class="uk-flex uk-flex-wrap uk-flex-wrap-around">
      <div class="uk-width-1-2 uk-text-small uk-visible@m">
        <img class="uk-align-left uk-margin-remove-adjacent" width="120" src="~/assets/images/qr-mp.jpg">
        <p>
          微信公众号： 西邦 (xibangtech)
        </p>
        <p>
          Email: willin@xibang.tech
        </p>
        <p>
          联系电话： 025-58177588 (周一至周日9点至21点997热线)
        </p>
      </div>
      <div class="uk-width-expand@m uk-text-small uk-text-right">
        <p>
          Copyright 2019~{{ year }} &copy; 南京西邦智能科技有限公司
                    <br>
                    <small>
                      Nanjing XiBang Intelligence Technology LTD.
                    </small>
                    <br>
                    <small>
                      Hosted by
                      <a href="https://cloud.tencent.com/redirect.php?redirect=1040&amp;cps_key=9dd1f00ae67019090c9d12d68d7f22d0&amp;from=console" target="_blank">
                        腾讯云
                      </a>,
                      CDN by <a href="https://www.cloudflare.com" target="_blank">
                        CloudFlare
                      </a>
                    </small>
                    <br>
                    <a href="http://www.beian.miit.gov.cn" target="_blank">
                      <small>苏ICP备19022432号</small>
                    </a>
        </p>
      </div>
    </div>
    <a href="#" uk-totop uk-scroll class="uk-position-fixed uk-position-bottom-right uk-padding-small" />
    <OffCanvas />
  </footer>
</template>

<script>
import OffCanvas from '../nav/offcanvas';

export default {
  components: {
    OffCanvas
  },
  data: () => ({
    year: new Date().getFullYear()
  })
};
</script>
