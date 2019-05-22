<template>
  <header uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky;">
    <nav class="uk-navbar-container uk-margin" uk-navbar>
      <div class="uk-navbar-left">
        <div class="uk-hidden@m">
          <a href="#offcanvas-slide" class="uk-navbar-toggle" uk-toggle uk-navbar-toggle-icon />
        </div>

        <NuxtLink id="logo" class="uk-navbar-item uk-logo" to="/">
          <img src="/logo.png">
          <h1>南京西邦智能科技</h1>
        </NuxtLink>
      </div>
      <div class="uk-navbar-right uk-visible@m">
        <ul class="uk-navbar-nav">
          <li>
            <NuxtLink to="/about">
              <span class="uk-icon uk-margin-small-right" uk-icon="icon: world" />
              关于
            </NuxtLink>
          </li>
          <li>
            <a href="#">
              <span class="uk-icon uk-margin-small-right" uk-icon="icon: heart" />
              服务
            </a>
          </li>
          <li>
            <a href="#">
              <span class="uk-icon uk-margin-small-right" uk-icon="icon: happy" />
              产品
            </a>
          </li>
          <li>
            <a href="#">
              <span class="uk-icon uk-margin-small-right" uk-icon="icon: bolt" />
              解决方案
            </a>
          </li>
          <li>
            <a href="#">
              <span class="uk-icon uk-margin-small-right" uk-icon="icon: receiver" />
              联系
            </a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li class="uk-active">
                  <a href="#">
                    Active
                  </a>
                </li>
                <li>
                  <a href="#">
                    Item
                  </a>
                </li>
                <li class="uk-nav-header">
                  Header
                </li>
                <li>
                  <a href="#">
                    Item
                  </a>
                </li>
                <li>
                  <a href="#">
                    Item
                  </a>
                </li>
                <li class="uk-nav-divider" />
                <li>
                  <a href="#">
                    Item
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="https://github.com/xibang" target="_blank">
              <span class="uk-icon uk-margin-small-right" uk-icon="icon: github-alt" />
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="stylus">
#logo
  img
    width: 130px
  h1
    text-indent: -99999em
</style>
