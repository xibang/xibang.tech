<template>
  <main id="solution">
    <XTitle title="区块链解决方案" desc="全方位、全生命周期的区块链企业应用解决方案。" img="/images/header/blockchain.jpg" />
    <div class="pure-g container text-center">
      <div class="pure-u-1 pure-u-md-1-2">
        <img src="/images/content/blockchain.png" class="pure-img">
      </div>
      <div class="pure-u-1 pure-u-md-1-2">
        <h3>架构对应解决的业务问题</h3>
        <p>区块链业务创新面临巨大的挑战，主要包括：</p>
        <ul>
          <li>1、对区块链底层技术有较深了解，配置部署技术复杂度高</li>
          <li>2、二次开发技术难度大，相关平台技术学习曲线陡峭</li>
          <li>3、区块链所需的基础资源和服务选型繁多，整合难度大</li>
          <li>4、部署平台和环境安全保障薄弱，缺乏企业级风控</li>
          <li>5、服务质量难以达到生产级别要求，运维流程不成熟</li>
        </ul>
        <h3>方案业务场景</h3>
        <div class="box">
          <h4>基于区块链的在线祭祀平台</h4>
          <p>
            通过该平台，人们可以在链上为逝去的亲人购买墓地、立碑、上香、点烛、献花、留言等等。特别是对于远在异国他乡的游子而言,这种祭奠方式一方面不受时间、空间的限制,同时也可以寄托哀思。更重要的是,大家对于亲人的每一份思念都会永久地记录在链上,变成永恒。
          </p>
        </div>
        <div class="box">
          <h4>基于区块链的电子病历系统</h4>
          <p>用于就医服务中的电子病历系统，保存完整的医疗记录，保证可追溯、不可篡改，对医疗事故和责任界定起到完整安全的背书作用，并且具有严格的权限管理、签名验证机制，避免病人医疗数据泄露。</p>
        </div>
        <div class="box">
          <h4>基于区块链的公善款管理平台</h4>
          <p>
            公益领域中的一个痛点是公益信息分散化，没有被完整的收集和展示；难以高效地追踪公益资金的流向，无法确保善款真正帮助了受助对象；公益的多方参与者难以同时对善款进行有效监管，只能事后审计。而通过区块链的分布式共享账本，便于汇集散落的公益信息并集中发布，公益资金流向。
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
      title: '区块链解决方案 | 西邦智能科技',
      meta: [
        { hid: 'description', name: 'description', content: '全方位、全生命周期的区块链企业应用解决方案。' },
        { hid: 'keywords', name: 'keywords', content: '区块链,解决方案,blockchain,西邦' }
      ]
    };
  }
};
</script>
