<template>
  <div id="sponser" class="uk-background-contain uk-tile uk-tile-muted" uk-scrollspy="cls:uk-animation-fade">
    <div class="uk-text-center uk-padding-small">
      <h2>合作伙伴</h2>
      <p>我们的长期合作伙伴、赞助商、投资方。</p>
      <p>
        <a v-for="item in partner" :key="item.name" :href="item.link" target="_blank">
          <img :src="item.logo" :alt="item.name" uk-image>
        </a>
      </p>
      <p>
        <NuxtLink to="/contact" class="uk-button uk-button-secondary">
          虚位以待
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script>
import partner from '~/assets/js/partner';

export default {
  data: () => ({
    partner
  })
};
</script>
