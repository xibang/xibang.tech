<template>
  <div id="stat" class="uk-background-contain uk-tile uk-background-primary uk-light" :style="`background-image: url(${statBgUrl});`" uk-scrollspy="cls:uk-animation-slide-top">
    <div class="uk-text-center uk-padding-small">
      <h2>为什么选择我们？</h2>
      <p>因为专注，所以专业。我们更注重技术的沉淀。不完全统计信息如下。</p>
    </div>
    <div class="uk-child-width-1-4 uk-text-center uk-flex" uk-scrollspy="target: > div; cls: uk-animation-slide-bottom; delay: 200; repeat: true">
      <div class="uk-padding-small">
        <h3 class="uk-text-warning">
          {{ clients }}
        </h3>
        <p>长期合作客户</p>
      </div>
      <div class="uk-padding-small">
        <h3 class="uk-text-warning">
          {{ projects }}
        </h3>
        <p>成熟产品项目</p>
      </div>
      <div class="uk-padding-small">
        <h3 class="uk-text-warning">
          {{ opensource }}
        </h3>
        <p>开源项目</p>
      </div>
      <div class="uk-padding-small">
        <h3 class="uk-text-warning">
          {{ properties }}
        </h3>
        <p>知识产权</p>
      </div>
    </div>
  </div>
</template>

<script>
import { clients, projects, opensource, properties } from '~/assets/js/stat';
import statBgUrl from '~/assets/images/stat.png';

export default {
  data: () => ({
    statBgUrl,
    clients,
    projects,
    opensource,
    properties
  })
};
</script>

<style lang="stylus">
#stat
  h3, p
    margin: 0
</style>
