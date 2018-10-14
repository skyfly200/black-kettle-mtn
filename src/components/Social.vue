<template lang="pug">
  .social
    .heading
      h3 Share with your Network
    .links
      i.fab.fa-facebook.fa-3x
      i.fab.fa-twitter.fa-3x
      i.fas.fa-envelope.fa-3x
      i.fas.fa-mobile.fa-3x
</template>

<script>
export default {
  name: 'Social',
};
</script>

<style lang="sass">
  .social
    width: 100%
  .links
    display: flex
    justify-content: center
    i
      margin: 0.2em

</style>
