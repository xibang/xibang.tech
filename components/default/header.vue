<template>
  <header uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky;">
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <div class="uk-hidden@m">
          <a href="#offcanvas-slide" class="uk-navbar-toggle" uk-toggle uk-navbar-toggle-icon />
        </div>

        <NuxtLink id="logo" class="uk-navbar-item uk-logo" to="/">
          <img src="~/assets/images/logo.png">
          <h1>南京西邦智能科技</h1>
        </NuxtLink>
      </div>
      <div class="uk-navbar-right uk-visible@m">
        <XNav />
      </div>
    </nav>
  </header>
</template>

<script>
import XNav from '../nav/nav';

export default {
  components: {
    XNav
  }
};
</script>

<style lang="stylus">
#logo
  img
    width: 130px
  h1
    text-indent: -99999em
</style>
