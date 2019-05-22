<template>
  <footer class="uk-card uk-card-body uk-card-secondary uk-text-small uk-text-right">
    <p>
      Copyright 2019~{{ year }} &copy; 南京西邦智能科技有限公司
      <a href="http://www.beian.miit.gov.cn" target="_blank">
        <small>苏ICP备19022432号</small>
      </a>
    </p>
    <a href="#" uk-totop uk-scroll class="uk-position-fixed uk-position-bottom-right uk-padding-small" />
  </footer>
</template>

<script>
export default {
  data: () => ({
    year: new Date().getFullYear()
  })
};
</script>
