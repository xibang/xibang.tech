<template>
  <div class="page_header" :style="{backgroundImage:`url(${img})`}">
    <h2>{{ title }}</h2>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
import sliderUrl1 from '~/assets/images/slide1.jpg';

export default {
  props: {
    img: {
      type: String,
      required: false,
      default: sliderUrl1
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    desc: {
      type: String,
      required: false,
      default: ''
    }
  }
};
</script>

<style lang="stylus">
.page_header {
  height: 38.2vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: contain;
  position:relative;
  text-align: center;
  h2 {
    padding-top: 120px;
    color: #000;
    font-size: 3em;
    letter-spacing: 0.25em;
    text-shadow: 0 0 1px rgba(255,255,255,1)
  }
  p {
    color: #333;
    text-shadow: 0 0 1px rgba(255,255,255,.5)
  }
}
@media only screen and (max-width: 768px) {
 .page_header {
  background-size: cover;
  background-position: center;
 }
}
</style>
