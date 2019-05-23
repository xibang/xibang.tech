<template>
  <div class="uk-card uk-text-center uk-card-body">
    <template v-if="error.statusCode === 404">
      <h2>404 - 页面未找到</h2>
      <div class="uk-card-body">
        <img src="~/assets/images/404.jpg" uk-img>
      </div>
      <NuxtLink to="/" class="uk-button uk-button-primary">
        返回主页
      </NuxtLink>
    </template>

    <template v-else>
      <h2>出错啦！</h2>
      <div class="uk-card-body">
        <img src="~/assets/images/500.gif" uk-img>
      </div>
      <NuxtLink to="/" class="uk-button uk-button-primary">
        返回主页
      </NuxtLink>
    </template>
  </div>
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
  layout: 'default'
};
</script>
