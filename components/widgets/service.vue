<template>
  <div id="service">
    <h2>我们提供的服务</h2>
    <p>包括不限于技术咨询、软件系统设计开发、数据挖掘及数据可视化。</p>
    <div class="pure-g">
      <div class="pure-u-1-5">
        <svg-icon class="svg1" name="solid/users-cog.svg" />
        <h2>咨询</h2>
        <p>系统架构、解决方案等技术咨询</p>
      </div>
      <div class="pure-u-1-5">
        <svg-icon class="svg2" name="solid/drafting-compass.svg" />
        <h2>设计</h2>
        <p>系统、网站、App、微信设计等</p>
      </div>
      <div class="pure-u-1-5">
        <svg-icon class="svg3" name="solid/code.svg" />
        <h2>开发</h2>
        <p>系统、网站、微信公众号、小程序等</p>
      </div>
      <div class="pure-u-1-5">
        <svg-icon class="svg4" name="solid/database.svg" />
        <h2>大数据</h2>
        <p>数据挖掘、数据分析、数据可视化等</p>
      </div>
      <div class="pure-u-1-5">
        <svg-icon class="svg5" name="solid/splotch.svg" />
        <h2>创新技术</h2>
        <p>人工智能、区块链等</p>
      </div>
    </div>
    <p>我们立志于为个人及企业提供便捷的一站式软件系统服务及解决方案。</p>
    <p>
      <NuxtLink to="/service" class="pure-button button-secondary">
        查看服务详情
      </NuxtLink>
    </p>
  </div>
</template>

<style lang="stylus">
#service
  padding: 2em
  text-align: center
  color: #333
  fill: #333
  a, a:link, a:visited
    color: #fff

  p
    padding: 0.25em 0
  .svg1
    fill: #69f
  .svg2
    fill: #f06
  .svg3
    fill: #3e9
  .svg4
    fill: #e60
  .svg5
    fill: #d0f
  .pure-g
    border-bottom: 1px dashed #ccc
    padding-bottom: 1em
    margin-bottom: 1em
    // > div
    //   border: 1px solid rgba(0,0,0,.25)
    h2
      font-weight: bold
  svg
    margin: 2em 0 1em
  h2
    font-size: 1.5em
    padding: 0.5em 0
</style>
