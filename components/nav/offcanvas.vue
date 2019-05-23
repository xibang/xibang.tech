<template>
  <div id="offcanvas-slide" uk-offcanvas>
    <div class="uk-offcanvas-bar">
      <ul class="uk-nav uk-nav-default">
        <li>
          <NuxtLink to="/">
            <span class="uk-icon uk-margin-small-right" uk-icon="icon: home" />
            主页
          </NuxtLink>
        </li>
        <li v-for="item in nav" :key="item.name">
          <a v-if="item.type==='outer'" :href="item.to" target="_blank">
            <span class="uk-icon uk-margin-small-right" :uk-icon="`icon: ${item.icon}`" />
            {{ item.name }}
          </a>
          <NuxtLink v-else :to="item.to">
            <span class="uk-icon uk-margin-small-right" :uk-icon="`icon: ${item.icon}`" />
            {{ item.name }}
          </NuxtLink>
          <ul v-if="item.children" class="uk-nav-sub">
            <li v-for="subitem in item.children" :key="subitem.name">
              <NuxtLink :to="subitem.to">
                {{ subitem.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import nav from '~/assets/nav';

export default {
  data: () => ({
    nav
  })
};
</script>
