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
    XTitle,
    XAside
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

<style lang="stylus">
#about {
  h3{
    margin-top: 0.5em
    color: #FECF39
    font-weight: bolder
    font-size: 2em
  }

  h4{
    font-size: 1.5em
    color: #f60
  }
  p {
    margin: 0.5em
    svg {
      width: 1em
      height: 1em
      margin: 0 0.25em
      vertical-align: middle
    }
  }
  .container {
    display: flex
    flex-direction: row-reverse
    justify-content: center
    align-items: stretch
  }
  .content {
    width: 100%
  }
}
@media only screen and (max-width: 768px) {
  #about {
    .container {
      flex-direction: column-reverse
    }
  }
}
</style>
