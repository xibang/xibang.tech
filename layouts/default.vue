<template>
  <div id="app">
    <XHeader />
    <Nuxt />
    <XFooter />
  </div>
</template>

<script>
import XHeader from '~/components/default/header';
import XFooter from '~/components/default/footer';

export default {
  components: {
    XHeader,
    XFooter
  }
};
</script>
