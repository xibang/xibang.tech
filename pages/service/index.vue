<template>
  <main>
    <XTitle title="提供的服务" desc="Services we provide" />
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
