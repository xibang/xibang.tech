<template>
  <ul class="uk-navbar-nav">
    <li v-for="item in nav" :key="item.name">
      <a v-if="item.type==='outer'" :href="item.to" target="_blank">
        <span class="uk-icon uk-margin-small-right" :uk-icon="`icon: ${item.icon}`" />
        {{ item.name }}
      </a>
      <NuxtLink v-else :to="item.to">
        <span class="uk-icon uk-margin-small-right" :uk-icon="`icon: ${item.icon}`" />
        {{ item.name }}
      </NuxtLink>
      <div v-if="item.children" class="uk-navbar-dropdown">
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li v-for="subitem in item.children" :key="subitem.name">
            <NuxtLink :to="subitem.to">
              {{ subitem.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import nav from '~/assets/nav';

export default {
  data: () => ({
    nav
  })
};
</script>
