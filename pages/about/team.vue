<template>
  <main id="about">
    <XTitle title="关于西邦" desc="About XiBang" img="/images/header/about.jpg" />
    <div id="team" class="text-center container">
      <div class="content">
        <h3>创始人</h3>
        <div class="pure-g container">
          <div class="pure-u-1 pure-u-md-1-3">
            <div class="card">
              <img src="~/assets/images/team/willin.png" class="pure-img">
              <h4>Willin <small>CEO</small></h4>
              <p>资深架构师，物联网领域专家</p>
              <p>阿里云 MVP，Node.js 基金会成员</p>
              <p>曾在大*航空科技任职CTO，主导无人机云平台的设计研发工作。曾在物联传感主导智能家居开放接口平台、运维管理系统的设计研发工作。有着丰富的物联网、移动互联网、数据交换等大型项目研发设计经验。20 余年编程经验，在诸多国际编程竞赛网站（HackerRank、CodeWars等）进过 Top100。</p>
            </div>
          </div>
        </div>
        <h3>核心团队</h3>
        <div class="pure-g">
          <div class="pure-u-1 pure-u-md-1-3">
            <div class="card">
              <img src="~/assets/images/team/default.jpg" class="pure-img">
              <h4>Puml <small>高级安卓架构师</small></h4>
              <p>互联网金融行业专家</p>
            </div>
          </div>
          <div class="pure-u-1 pure-u-md-1-3">
            <div class="card">
              <img src="~/assets/images/team/default.jpg" class="pure-img"> <h4>Aki Wu <small>资深架构师</small></h4>
              <p>区块链领域专家</p>
            </div>
          </div>
          <div class="pure-u-1 pure-u-md-1-3">
            <div class="card">
              <img src="~/assets/images/team/cc.png" class="pure-img">
              <h4>CC <small>高级设计师</small></h4>
              <p>『艺术是放肆，设计是克制。』视觉传达艺术设计专业，5年 UI 设计经验，从事物联网，电商，区块链等区域，曾任杭州蘑菇街，上海汇银集团资深 UI 设计职位，擅于用户体验设计，交互动效，对设计的潮流有敏锐的看法与总结。代表作品有蘑菇街 App 大促风格界面制定，AToken 钱包界面设计，物联爱看摄像机 App 设计等。</p>
            </div>
          </div>
        </div>
        <h3>开发团队</h3>
        <div class="pure-g">
          <div class="pure-u-1 pure-u-md-1-3">
            <div class="card">
              <img src="~/assets/images/team/default.jpg" class="pure-img">  <h4>xuanmos <small>FE</small></h4>
              <p>Web前端开发</p>
            </div>
          </div>
        </div>
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
#team .content {
  text-align: left
  h4 {
    small {
      color: #69f
      font-size: 0.6em
    }
  }
  .card {
    margin: 1em
    padding: 1em
    border: 3px solid rgba(0,255,0,.25)
    border-radius: 1em
    display: flex
    flex-direction: column
    align-items: center
    img{
      max-width: 128px
      max-height: 128px
      border-radius: 100%
    }
  }
}
</style>
