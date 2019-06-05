<template>
  <main id="solution">
    <XTitle title="物联网解决方案" desc="物联网智能家居、无人机管理平台等行业级解决方案及技术咨询。" />
    <div class="pure-g container text-center">
      <div class="pure-u-1 pure-u-md-1-2">
        <h3>技术优势</h3>
        <p>
          以“场景创新”为理念，运用大数据和AI深度学习等技术，通过物联网管理平台建立物物相联的网，帮助企业用户创建新型业务模式，提升运营效率。
        </p>
        <p>团队从2014年起介入物联网项目整体实施经验积累，可为企业提供通信传输、数据存储、开放接口到企业业务应用平台的全套技术架构，为企业物联网应用提供切实可行的解决方案，减少开发周期，降低项目成本，有力保障项目顺利实施。</p>
      </div>
      <div class="pure-u-1 pure-u-md-1-2">
        <h3>方案业务场景</h3>
        <div class="box">
          <h4>智能家居开放平台</h4>
          <p>
            创业团队主要来自于南京物联传感技术有限公司，主导建立了智能家居管理平台用户体系、开放接口系统以及运维管理系统。
          </p>
        </div>
        <div class="box">
          <h4>无人机管理平台</h4>
          <p>
            完整参与设计、开发无人机管理平台、行业应用及获得民航资质的无人机监管系统。
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
      title: '物联网解决方案 | 西邦智能科技',
      meta: [
        { hid: 'description', name: 'description', content: '物联网智能家居、无人机管理平台等行业级解决方案及技术咨询。' },
        { hid: 'keywords', name: 'keywords', content: '物联网,解决方案,iot,智能家居,无人机,西邦' }
      ]
    };
  }
};
</script>
