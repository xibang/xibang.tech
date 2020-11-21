<template>
  <main id="solution">
    <XTitle title="AR解决方案" desc="增强现实行业级解决方案及技术咨询。" />
    <div class="pure-g container text-center">
      <div class="pure-u-1 pure-u-md-1-2">
        <h3>技术优势</h3>
        <p>团队从2019年起介入增强项目整体实施经验积累，可为企业提供通信传输、数据存储、开放接口到企业业务应用平台的全套技术架构，为企业物联网应用提供切实可行的解决方案，减少开发周期，降低项目成本，有力保障项目顺利实施。</p>
      </div>
      <div class="pure-u-1 pure-u-md-1-2">
        <h3>方案案例</h3>
        <div class="box">
          <h4>视网么AR App</h4>
          <p>
            增强现实 APP 应用。汉字书局字源卡 AR 实体产品的技术实现。
          </p>
        </div>
        <div class="box">
          <h4>AR 地图</h4>
          <p>
            结合 Mapbox 实现博物馆、展馆、旅游景点、旅游城镇的 AR 化和地图可视化。
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
      title: 'AR 增强现实解决方案 | 西邦智能科技',
      meta: [
        { hid: 'description', name: 'description', content: 'AR增强现实行业级解决方案及技术咨询。' },
        { hid: 'keywords', name: 'keywords', content: 'AR,增强现实,VR,XR,西邦' }
      ]
    };
  }
};
</script>
