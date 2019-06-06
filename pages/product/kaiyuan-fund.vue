<template>
  <main>
    <XTitle title="自主产品" desc="XiBang Products" />
    <div class="pure-g text-center container">
      <div class="pure-u-1">
        正在筹备中，敬请期待。
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
      title: '开源捐 | 西邦智能科技',
      meta: [
        { hid: 'description', name: 'description', content: '开源捐 Kaiyuan.fund 是西邦智能科技旗下自主研发及运营的产品。' },
        { hid: 'keywords', name: 'keywords', content: '产品,自主,西邦,kaiyuan.fund,开源,kaiyuan' }
      ]
    };
  }
};
</script>
