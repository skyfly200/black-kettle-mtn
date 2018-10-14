<template lang="pug">
  .home-link
    router-link(to="/")
      i.fas.fa-home.fa-2x
</template>

<script>
  import Map from '../components/Map.vue';

  export default {
    name: 'HomeLink',
  };
</script>

<style lang="sass">
  .home-link
    float: left
    i
      color: white
</style>
