<template>
  <aside class="sidebar">
    <ul>
      <li v-for="item in nav" :key="item.name">
        <NuxtLink :to="item.to" class="pure-button">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script>
import nav from '~/assets/js/nav';

export default {
  data: () => ({
    nav: nav[1].children
  })
};
</script>
