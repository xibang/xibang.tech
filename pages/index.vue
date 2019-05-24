<template>
  <main>
    <div class="uk-position-relative uk-visible-toggle" tabindex="-1" uk-slideshow="animation: push; autoplay: true; autoplay-interval: 5000; min-height: 300;">
      <ul class="uk-slideshow-items">
        <li>
          <img src="~/assets/images/slide1.jpg" uk-cover>
          <div class="uk-position-center uk-position-small uk-text-center uk-light">
            <h2 uk-slideshow-parallax="x: -200,200">
              南京西邦智能科技有限公司成立于2019年4月17日，是一家专注于智能科技的互联网公司。
            </h2>
            <p uk-slideshow-parallax="x: -400,400">
              <NuxtLink to="/service" class="uk-button uk-button-primary">
                业务范围
              </NuxtLink>
            </p>
          </div>
        </li>
        <li>
          <img src="~/assets/images/slide2.jpg" uk-cover>
          <div class="uk-position-center uk-position-small uk-text-center">
            <h2 uk-slideshow-parallax="x: 400,-400" class="uk-text-success">
              用心设计、用心开发，让产品富有生命力
            </h2>
            <p uk-slideshow-parallax="x: 200,-200">
              <NuxtLink to="/contact" class="uk-button uk-button-primary">
                联系我们
              </NuxtLink>
              <NuxtLink to="/project" class="uk-button uk-button-danger">
                项目案例
              </NuxtLink>
            </p>
          </div>
        </li>
        <li>
          <img src="~/assets/images/slide3.jpg" uk-cover>
          <div class="uk-position-center uk-position-small uk-text-center">
            <h2 uk-slideshow-parallax="y: -200,0,0; opacity: 1,1,0">
              效率、专业、精准
            </h2>
            <p uk-slideshow-parallax="y: 200,0,0; opacity: 1,1,0">
              我们立志于为个人及企业提供便捷的一站式软件系统服务及解决方案。
            </p>
          </div>
        </li>
      </ul>

      <div class="uk-light">
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous" />
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next" />
      </div>
    </div>
    <XState />
    <XPartner />
  </main>
</template>

<script>
import XState from '~/components/widgets/stat';
import XPartner from '~/components/widgets/partner';

export default {
  components: {
    XState,
    XPartner
  }
};
</script>
