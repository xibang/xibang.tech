<template>
  <nav>
    <template v-for="item in nav">
      <div v-if="item.children" :key="item.name">
        <h3>{{ item.name }}</h3>
        <ul>
          <li v-for="subitem in item.children" :key="subitem.name">
            <a v-if="subitem.type==='outer'" :href="subitem.to" target="_blank">
              {{ subitem.name }}
            </a>
            <NuxtLink v-else :to="subitem.to">
              {{ subitem.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </template>
  </nav>
</template>

<script>
import nav from '~/assets/js/nav';

export default {
  data: () => ({
    nav: [...nav.filter(x => x.children), { name: '更多', children: nav.filter(x => !x.children) }]
  })
};
</script>

<style lang="stylus">
footer nav
  background: #343a40
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  align-items: stretch
  align-content: space-around
  color: #ccc
  a, a:link, a:visited
    color: #eee
  h3
    line-height: 2.5em
  > div
    min-width: 200px
    padding: 1em
</style>
