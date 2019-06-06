<template>
  <main>
    <XTitle title="提供的服务" desc="Services we provide" />
    <div id="service">
      <div class="pure-g container">
        <div class="pure-u-1-2 pure-u-md-1-5">
          <svg-icon class="svg1" name="solid/users-cog" />
          <h2>咨询</h2>
          <p>系统架构、解决方案等技术咨询</p>
        </div>
        <div class="pure-u-1-2 pure-u-md-1-5">
          <svg-icon class="svg2" name="solid/drafting-compass" />
          <h2>设计</h2>
          <p>系统、网站、App、微信设计等</p>
        </div>
        <div class="pure-u-1-2 pure-u-md-1-5">
          <svg-icon class="svg3" name="solid/code" />
          <h2>开发</h2>
          <p>系统、网站、微信公众号、小程序等</p>
        </div>
        <div class="pure-u-1-2 pure-u-md-1-5">
          <svg-icon class="svg4" name="solid/database" />
          <h2>大数据</h2>
          <p>数据挖掘、数据分析、数据可视化等</p>
        </div>
        <div class="pure-u-1-2 pure-u-md-1-5">
          <svg-icon class="svg5" name="solid/splotch" />
          <h2>创新技术</h2>
          <p>人工智能、区块链等</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import XTitle from '~/components/partial/title';

export default {
  components: {
    XTitle
  },
  head() {
    return {
      title: '提供的服务 | 西邦智能科技',
      meta: [
        { hid: 'description', name: 'description', content: '西邦服务提供及解决方案。' },
        { hid: 'keywords', name: 'keywords', content: '服务,解决方案,西邦' }
      ]
    };
  }
};
</script>
