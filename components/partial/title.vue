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
  background-size: 100%;
  background-position: top;
  position:relative;
  text-align: center;
  h2 {
    padding-top: 120px;
    font-size: 3em;
    letter-spacing: 0.25em;
    color: rgba(255,255,255,.5);
    -webkit-text-stroke: 1px #000;
    -webkit-text-fill-color: rgba(255,255,255,.5);
    font-weight: bolder;
  }
  p {
    color: #888;
    font-weight: bolder;
    text-shadow: 0 0 1px #000
  }
}

@media only screen and (max-width: 768px) {
  .page_header {
    h2 {
      font-size: 2em;
    }
  }
}
</style>
