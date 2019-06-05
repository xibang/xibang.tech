<template>
  <main id="solution">
    <XTitle title="微信解决方案" desc="完整的微信公众号、小程序解决方案，包括活动、吸粉、支付等功能模块。" />
    <div class="pure-g container text-center">
      <div class="pure-u-1 pure-u-md-1-2">
        <h3>技术优势</h3>
        <ul>
          <li>1、丰富的作弊与反作弊经验，确保活动、抽奖无多余的成本开销。</li>
          <li>2、快速吸粉。</li>
          <li>3、注重性能和用户体验。</li>
          <li>4、可定制专业的管理运营后台系统。</li>
          <li>5、专业的运营管理团队，给您傻瓜式操作体验。</li>
        </ul>
        <p>
          小程序越早上线，关键词占位越多，排名优势就越大，获得流量越多。
        </p>
      </div>
      <div class="pure-u-1 pure-u-md-1-2">
        <h3>方案业务场景</h3>
        <div class="box">
          <h4>微信在线祭祀公众号及小程序</h4>
          <p>
            通过该平台，人们可以在链上为逝去的亲人购买墓地、立碑、上香、点烛、献花、留言等等。特别是对于远在异国他乡的游子而言,这种祭奠方式一方面不受时间、空间的限制,同时也可以寄托哀思。更重要的是,大家对于亲人的每一份思念都会永久地记录在链上,变成永恒。
          </p>
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
      title: '微信解决方案 | 西邦智能科技',
      meta: [
        { hid: 'description', name: 'description', content: '全方位、全生命周期的区块链企业应用解决方案。' },
        { hid: 'keywords', name: 'keywords', content: '区块链,解决方案,blockchain,西邦' }
      ]
    };
  }
};
</script>
