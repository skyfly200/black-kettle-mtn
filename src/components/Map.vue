<template lang="pug">
  .map
    iframe(frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=mt%20eavns&key=AIzaSyDu3M2o0VgXe_OgfQy9ub5dffvAExdRrfc&maptype=satellite" allowfullscreen)
</template>

<script>
export default {
  name: 'Map',
};
</script>

<style lang="sass">
  .map
    width: 100%
    iframe
      width: 100%
      height: 450px
      border: 0
</style>
