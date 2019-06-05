<template>
  <main id="about">
    <XTitle title="关于西邦" desc="About XiBang" img="/images/header/about.jpg" />
    <div id="team" class="text-center container">
      <div class="content">
        <h3>创始人</h3>
        <h4>Willin</h4>
        <p>资深架构师，物联网领域专家</p>
        <p>阿里云MVP，Node.js基金会成员</p>
        <h3>核心团队</h3>
        <h4>Puml</h4>
        <p>高级安卓架构师，互联网金融行业专家</p>
        <h4>Aki Wu</h4>
        <p>资深架构师，区块链领域专家</p>
        <h4>CC</h4>
        <p>高级设计师</p>

        <h3>开发团队</h3>
        <h4>xuanmos</h4>
        <p>Web前端开发</p>
      </div>
      <XAside />
    </div>
  </main>
</template>

<script>
import XTitle from '~/components/partial/title';
import XAside from '~/components/widgets/about-aside';

export default {
  components: {
    XTitle, XAside
  },
  head() {
    return {
      title: '团队成员 | 西邦智能科技',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '关于,团队成员,willin,西邦' }
      ]
    };
  }
};
</script>

<style lang="stylus">
#team .content
  text-align: left
</style>
