<template lang="pug">
  .mtn
    HomeLink
    h1 Facts About the Mountain
    .facts
      ul
        li Mount Evans is a 14er with an elevation of 14,265 feet
        li Mount Evans Scenic Byway is the highest paved road in North America
    Map
</template>

<script>
import Map from '../components/Map.vue';
import HomeLink from '../components/HomeLink.vue';

export default {
  name: 'Mtn',
  components: {
    Map,
    HomeLink,
  },
};
</script>

<style lang="sass">
  .mtn
    width: 100%
  .facts
    width: 100%
    padding: 0
    text-align: center
    display: flex
    justify-content: center
    margin-bottom: 20px
    li
      padding: 5px 10px
</style>
