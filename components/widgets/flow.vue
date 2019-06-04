<template>
  <div id="flow">
    <ul class="timeline">
      <li class="year first">
        项目合作流程
      </li>
      <li class="event offset-first">
        <svg-icon name="solid/comments" class="svg1" />
        <div>
          <h3>需求确认</h3>
          <p>沟通、评估、确认需求。</p>
        </div>
      </li>
      <li class="event">
        <svg-icon name="solid/hand-holding-usd" class="svg2" />
        <div>
          <h3>报价、排期</h3>
          <p>根据项目需求和排期给出报价及人员安排等。</p>
        </div>
      </li>
      <li class="event">
        <svg-icon name="solid/file-invoice" class="svg3" />
        <div>
          <h3>签订合同</h3>
          <p>客户支付预付款，启动项目。</p>
        </div>
      </li>
      <li class="event">
        <svg-icon name="solid/laptop-code" class="svg4" />
        <div>
          <h3>设计、开发</h3>
          <p>先设计原型，再进行开发。</p>
        </div>
      </li>
      <li class="event">
        <svg-icon name="solid/hands-helping" class="svg5" />
        <div>
          <h3>演示、交付</h3>
          <p>交付演示，客户确认后支付尾款。</p>
        </div>
      </li>
      <li class="event">
        <svg-icon name="solid/list-ol" class="svg6" />
        <div>
          <h3>部署、验收</h3>
          <p>交付源码及相关说明，开具发票，项目结束。</p>
        </div>
      </li>
    </ul>
    <p>
      <NuxtLink to="/contact" class="pure-button button-primary">
        开始项目合作
      </NuxtLink>
    </p>
  </div>
</template>

<style lang="stylus">
$text-color=rgb(77, 77, 77)
$bg-entry=rgb(80,80,80)

#flow {
  margin-bottom: 2em;
  text-align: center;
}
#flow .timeline {
  margin: 2em auto;
  max-width: 1280px;
  overflow:hidden;
  height: auto;
  position: relative;
  padding:0px;
  list-style-type:none;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEElEQVQIW2NMTEz8z8gABAAPKwIlXWq1kgAAAABJRU5ErkJggg==');
  background-repeat:repeat-y;
  background-position:50% 0;


  .year {
    background: $bg-entry;
    font-size: 2em;
    max-width: 8em;
    clear: both;
    margin: 1em auto 2em;
    color: white;
    border-radius: 30% / 100%;
    text-align: center;
    margin-top: 2em;

    &:first-of-type {
      margin-top: 0 !important;
    }
  }

  .event {
    h3 {
      font-size: 1.5em;
      color: #fecf39;
      font-weight: bold;
    }
    svg {
      margin: 1em 0;
    }
    .svg1{
      fill: #69f
    }
    .svg2
    {
      fill: #f06
    }
    .svg3 {
      fill: #999
    }
    .svg4
    {
     fill: #e60
    }
    .svg5
    {
      fill: #d0f
    }
    .svg6
    {
      fill: #3e9
    }

    > div {
      padding: 0 1em;
    }
    position:relative;
    text-align:center;
    float: right;
    clear: right;
    width: 45%;
    margin: 1em 2.5%;

    border-radius: 5px;
    list-style-type: none;
    padding: .4em;
    background: white;
    z-index: 15;

    color: $text-color;
    border: 1px solid lighten($bg-entry,30%);
    text-decoration: none;

    transition: background .15s linear;

    display: flex;
    align-items: center;

    &.featured {
      width: 95% !important;
      background: lighten(#ccc,11%);

      &:after, &:before {
        display: none;
      }
    }

    @media all and (max-width: 600px) {
      width: 85%;
    }

    &.offset-first {
      margin-top: -1.5em!important;
    }

    img {
      margin-top: 10px;
      max-width: 100%;
    }

    &:hover {
      background: lighten($bg-entry,60%);

      &:after {
        background: $bg-entry;
      }
    }

    &:nth-of-type(2n) {
      flex-direction: row-reverse;
      float: left;
      clear: left;
        @media all and (min-width:600px){
          margin-top:2em;
        }
    }

    &:after {
      @media all and (min-width: 650px) {
        display: block;
        content: ' ';
        height: 9px; width: 9px;
        background: lighten($bg-entry,30%);
        border-radius: 50%;
        position:absolute;
        left: -5%;
        top: 1.5em;
        border: 2px solid white;
      }
    }

    &:nth-child(2n):after {
      right: -5%;
      left: auto;
    }
  }
}

</style>
