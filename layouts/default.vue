<template>
  <div id="app">
    <x-header />
    <nuxt />
  </div>
</template>

<script>
import XHeader from '~/components/default/header';

export default {
  components: {
    XHeader
  }
};
</script>

<style lang="stylus" src="@/assets/stylus/global.styl"></style>
