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
    nav: nav[0].children
  })
};
</script>


<style lang="stylus">
#about {
  .sidebar {
    width: 320px;
    max-width: 100%;
    li {
      padding: .5em 0;
    }
    a {
      width: 6em
    }
    .nuxt-link-exact-active {
      color: #333
    }
  }
}
@media only screen and (max-width: 768px) {
  #about {
    .container {
      .sidebar {
        ul {
          display: flex
          align-content: center
          justify-content: space-around
          flex-wrap: wrap
          margin-bottom: 1em
        }
      }
    }
  }
}
</style>
