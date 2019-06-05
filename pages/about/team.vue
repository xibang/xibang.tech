<template>
  <main id="about">
    <XTitle title="关于西邦" desc="About XiBang" img="/images/header/about.jpg" />
    <div class="text-center container">
      <div class="content">
        <p>
          南京西邦智能科技有限公司成立于2019年4月17日，是一家专注于智能科技的互联网公司。我们立志于为个人及企业提供便捷的一站式软件系统服务及解决方案。
        </p>
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
