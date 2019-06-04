<template>
  <div id="sponser">
    <h2>合作伙伴</h2>
    <p>我们的长期合作伙伴、赞助商、投资方。</p>
    <p>
      <a v-for="item in partner" :key="item.name" :href="item.link" target="_blank">
        <img :src="item.logo" :alt="item.name" uk-image>
      </a>
    </p>
    <p>
      <NuxtLink to="/sponsers" class="pure-button">
        虚位以待
      </NuxtLink>
    </p>
  </div>
</template>

<script>
import partner from '~/assets/js/partner';

export default {
  data: () => ({
    partner
  })
};
</script>

<style lang="stylus">
#sponser
  background: #343a40
  color: #999
  padding: 2em
  text-align: center
  h2
    font-size: 1.5em
  p
    padding: 0.5em 0
  img
    max-height: 60px
</style>
