<template>
  <main>
    <XSlider />
    <XService />
    <XStat />
    <XFlow />
    <XPartner />
  </main>
</template>

<script>
import XSlider from '~/components/widgets/slider';
import XPartner from '~/components/widgets/partner';
import XStat from '~/components/widgets/stat';
import XFlow from '~/components/widgets/flow';
import XService from '~/components/widgets/service';

export default {
  components: {
    XPartner,
    XStat,
    XService,
    XFlow,
    XSlider
  }
};
</script>
