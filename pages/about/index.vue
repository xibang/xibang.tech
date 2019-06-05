<template>
  <main>
    <XTitle title="关于西邦" desc="About XiBang" />
    <div class="pure-g text-center container">
      <div class="pure-u-1">
        南京西邦智能科技有限公司成立于2019年4月17日，是一家专注于智能科技的互联网公司。我们立志于为个人及企业提供便捷的一站式软件系统服务及解决方案。
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
      title: '关于我们 | 西邦智能科技',
      meta: [
        { hid: 'description', name: 'description', content: '南京西邦智能科技有限公司成立于2019年4月17日，是一家专注于智能科技的互联网公司。我们立志于为个人及企业提供便捷的一站式软件系统服务及解决方案。' },
        { hid: 'keywords', name: 'keywords', content: '关于,西邦' }
      ]
    };
  }
};
</script>
