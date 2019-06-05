<template>
  <main id="about">
    <XTitle title="开源项目" desc="GitHub XiBang Opensource" img="/images/header/about.jpg" />
    <div class="text-center container">
      <div class="content">
        <h3>最新更新</h3>
        <table class="pure-table pure-table-horizontal">
          <thead>
            <tr>
              <th>名称</th>
              <th>语言</th>
              <th>介绍</th>
              <th>Stars</th>
              <th>Forks</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in github.projects" :key="item.name">
              <td>
                <a :href="item.url" target="_blank">
                  {{ item.name }}
                </a>
              </td>
              <td>
                <template v-if="item.primaryLanguage && item.primaryLanguage.name">
                  <span :style="{color: item.primaryLanguage.color}">&hearts;</span>  {{ item.primaryLanguage.name }}
                </template>
                <template v-else>
                  -
                </template>
              </td>
              <td>
                {{ item.description }}
              </td>
              <td>
                {{ item.stargazers }}
              </td>
              <td>
                {{ item.forks }}
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          总计 {{ github.repositories }} 个项目，详情请访问GitHub： <a href="https://github.com/xibang" target="_blank">@xibang</a>
        </p>
      </div>
      <XAside />
    </div>
  </main>
</template>

<script>
import XTitle from '~/components/partial/title';
import XAside from '~/components/widgets/about-aside';
import github from '~/assets/js/github';

export default {
  components: {
    XTitle, XAside
  },
  data: () => ({
    github
  }),
  head() {
    return {
      title: '开源项目 | 西邦智能科技',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '关于,开源项目,willin,西邦' }
      ]
    };
  }
};
</script>

<style lang="stylus">
#about
  table
    width: 100%
    margin-bottom: 1em
</style>
