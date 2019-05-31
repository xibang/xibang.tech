<template>
  <section class="world_map">
    <div class="world_map_inner">
      <img src="~/assets/images/world-map.png" alt="">
      <div class="bd-callout">
        <h3>微信公众号： 西邦</h3>
        <p>
          南京市·启迪科技城华清园
          <br>
          <NuxtLink to="/contact">
            详情
          </NuxtLink>
        </p>
        <h4>
          025-58177588 <br>
          willin@xibang.tech
        </h4>
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
.world_map
  margin: 2em auto
  max-width: 1280px
  img
    max-width: 100%
    height: auto
    vertical-align: middle
  .world_map_inner
    text-align: center
    position: relative


.bd-callout {
    text-align: left;
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
    max-width: 550px;
    width: 100%;
    background: #fff;
    -webkit-box-shadow: 0px 0px 46px 15px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 46px 15px rgba(0,0,0,0.15);
    box-shadow: 0px 0px 46px 15px rgba(0,0,0,0.15);
    border-left: 8px;
    border-style: solid;
    border-image: -moz-linear-gradient(top, #9b8aff 0%, #6ebcfe 100%);
    border-image:  -webkit-linear-gradient(top, #9b8aff 0%,#6ebcfe 100%);
    border-image: linear-gradient(to bottom, #9b8aff 0%,#6ebcfe 100%);
    border-image-slice: 1;
    border-top: 0px;
    border-bottom: 0px;
    border-right: 0px;
    padding-left: 70px;
    padding-top: 35px;
    padding-bottom: 35px;
    h3{
        font-size: 15px;
        font-weight: 500;
        padding-bottom: 15px;
    }
    p{
        font-size: 15px;
        font-weight: 500;
        line-height: 28px;
        display: inline-block;
    }
    h4{
      display: inline-block;
      padding-left: 50px;
    }
}

@media only screen and (max-width: 768px) {
  .bd-callout {
    position: unset
    h4 {
      padding: 0
    }
  }
}
</style>
