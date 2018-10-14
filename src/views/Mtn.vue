<template lang="pug">
  .mtn
    h1 Facts About the Mountain
    ul.facts
      li Mount Evans is a 14er with an elevation of 14,265 feet
      li Mount Evans Scenic Byway is the highest paved road in North America
    Map
</template>

<script>
import Map from './Map.vue';

export default {
  name: 'Mtn',
  components: {
    Map,
  },
};
</script>

<style lang="sass">
  .facts
    width: 100%
    padding: 0
</style>
