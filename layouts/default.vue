<template>
  <div id="app">
    <XHeader />
    <Nuxt />
    <XFooter />
  </div>
</template>

<script>
import XHeader from '~/components/partial/header';
import XFooter from '~/components/partial/footer';

export default {
  components: {
    XHeader,
    XFooter
  }
};
</script>
