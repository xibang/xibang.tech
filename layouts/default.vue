<template>
  <div id="app">
    <XHeader />
    <Nuxt />
    <XFooter />
  </div>
</template>

<script>
import XHeader from '~/components/partial/header';
import XFooter from '~/components/partial/footer';

export default {
  components: {
    XHeader,
    XFooter
  }
};
</script>

<style lang="stylus">
body
  font-size: 16px
  margin: 0
  background: #eee
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

*, *:before, *:after
  transition: all 0.5s ease-in-out 0.1s
  box-sizing: border-box

*
  cursor: url('/images/default.cur'),default

a, a *
  cursor: url('/images/pointer.cur'),pointer !important

a,a:link,a:visited
  color: #69f
  text-decoration: none
  outline: none
  word-wrap: break-word

</style>
