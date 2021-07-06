<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        :style="{ backgroundImage: `url(${sliderUrl1})` }"
      >
        <h2>
          南京西邦智能科技有限公司
        </h2>
        <h3>成立于2019年4月17日，是一家专注于智能科技的互联网公司。</h3>
        <p>
          <NuxtLink to="/service" class="button-success pure-button">
            业务范围
          </NuxtLink>
        </p>
      </div>
      <div
        class="swiper-slide"
        :style="{ backgroundImage: `url(${sliderUrl2})` }"
      >
        <h2>用心</h2>
        <h3>
          用心设计、用心开发，让产品富有生命力。
        </h3>
        <p>
          <NuxtLink to="/contact" class="button-warning pure-button">
            联系我们
          </NuxtLink>
          <NuxtLink to="/product" class="button-secondary pure-button">
            项目案例
          </NuxtLink>
        </p>
      </div>
      <div
        class="swiper-slide"
        :style="{ backgroundImage: `url(${sliderUrl3})` }"
      >
        <h2>
          效率、专业、精准
        </h2>
        <h3>
          我们立志于为个人及企业提供便捷的一站式软件系统服务及解决方案。
        </h3>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination" />
    <!-- Add Arrows -->
    <div class="swiper-button-next" />
    <div class="swiper-button-prev" />
  </div>
</template>

<script>
import Swiper from "swiper";
import sliderUrl1 from "~/assets/images/slide1.jpg";
import sliderUrl2 from "~/assets/images/slide2.jpg";
import sliderUrl3 from "~/assets/images/slide3.jpg";

export default {
  data: () => ({
    swiper: undefined,
    sliderUrl1,
    sliderUrl2,
    sliderUrl3
  }),
  mounted() {
    if (!this.swiper) {
      this.mountInstance();
    }
  },
  beforeDestroy() {
    this.$nextTick(() => {
      if (this.swiper) {
        if (this.swiper.destroy) {
          this.swiper.destroy();
        }
        this.swiper = undefined;
      }
    });
  },
  methods: {
    mountInstance() {
      this.swiper = new Swiper(this.$el, {
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
        },
        effect: "flip",
        grabCursor: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  }
};
</script>

<style lang="stylus">
.swiper-button-next, .swiper-button-prev
  margin: 0 10px


.swiper-container
  width: 100%
  height: 100vh

.swiper-slide
  text-align: center
  background-size: cover
  /* Center slide text vertically */
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

  h2,h3,p
    padding: 5px
  p
    color: #888
    font-weight: bolder
    text-shadow: 0 0 1px #000

  h2
    font-size: 2.5em
    color: rgba(255,255,255,.5);
    -webkit-text-stroke: 1px #000;
    -webkit-text-fill-color: rgba(255,255,255,.5);

  a,a:link, a:visited
    color: #fff
    text-shadow: none
    margin: 10px

@media only screen and (max-width: 768px)
  .swiper-slide
    h2
      font-size: 1.5em
</style>
