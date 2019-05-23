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

    <div id="stat" class="uk-background-contain uk-background-primary uk-light" :style="`background-image: url(${statBgUrl});`">
      <div class="uk-text-center uk-padding-small">
        <h2>为什么选择我们？</h2>
        <p>因为专注，所以专业。我们更注重技术的沉淀。不完全统计信息如下。</p>
      </div>
      <div class="uk-child-width-1-4 uk-text-center uk-flex">
        <div class="uk-padding-small">
          <h3 class="uk-text-warning">
            {{ clients }}
          </h3>
          <p>长期合作客户</p>
        </div>
        <div class="uk-padding-small">
          <h3 class="uk-text-warning">
            {{ projects }}
          </h3>
          <p>成熟产品项目</p>
        </div>
        <div class="uk-padding-small">
          <h3 class="uk-text-warning">
            {{ opensource }}
          </h3>
          <p>开源项目</p>
        </div>
        <div class="uk-padding-small">
          <h3 class="uk-text-warning">
            {{ properties }}
          </h3>
          <p>知识产权</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import statBgUrl from '~/assets/images/stat.png';
import { clients, projects, opensource, properties } from '~/assets/js/stat';

export default {
  data: () => ({
    statBgUrl,
    clients,
    projects,
    opensource,
    properties
  })
};
</script>

<style lang="stylus">
#stat
  h3, p
    margin: 0
</style>
