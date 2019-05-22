<template>
  <div id="offcanvas-slide" uk-offcanvas>
    <div class="uk-offcanvas-bar">
      <ul class="uk-nav uk-nav-default">
        <li v-for="item in nav" :key="item.name">
          <a v-if="item.type==='outer'" :href="item.to" target="_blank">
            <span class="uk-icon uk-margin-small-right" :uk-icon="`icon: ${item.icon}`" />
            {{ item.name }}
          </a>
          <a v-else-if="item.href==='#'" href="#">
            <span class="uk-icon uk-margin-small-right" :uk-icon="`icon: ${item.icon}`" />
            {{ item.name }}
            <!-- Children -->
          </a>
          <a v-else-if="item.type==='scroll'" :href="item.to">
            <span class="uk-icon uk-margin-small-right" :uk-icon="`icon: ${item.icon}`" />
            {{ item.name }}
          </a>
          <NuxtLink v-else :to="item.to">
            <span class="uk-icon uk-margin-small-right" :uk-icon="`icon: ${item.icon}`" />
            {{ item.name }}
          </NuxtLink>
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
