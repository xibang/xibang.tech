<template>
  <main id="error">
    <template v-if="error.statusCode === 404">
      <h2>404 - 页面未找到</h2>
      <div class="uk-card-body">
        <img src="~/assets/images/404.jpg" class="pure-img">
      </div>
      <NuxtLink to="/" class="uk-button uk-button-primary">
        返回主页
      </NuxtLink>
    </template>

    <template v-else>
      <h2>出错啦！</h2>
      <div class="uk-card-body">
        <img src="~/assets/images/500.gif" class="pure-img">
      </div>
      <NuxtLink to="/" class="uk-button uk-button-primary">
        返回主页
      </NuxtLink>
    </template>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  layout: 'default',
  head() {
    return {
      title: '出错啦 | 西邦智能科技'
    };
  }
};
</script>

<style lang="stylus">
#error {
  padding-top: 120px;
  text-align: center;
  img {
    margin: 0 auto;
  }
  > * {
    padding: 1em 0;
  }
}
</style>
