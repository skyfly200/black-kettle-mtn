<template lang="pug">
  .header
    a(href="#").header-title
      h1 Black Kettle Mountain
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="sass">
  .header
    height: auto
    margin-bottom: 20px
    background-size: cover
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/My._Evans%2C_Colorado_summit_panorama.jpg/1200px-My._Evans%2C_Colorado_summit_panorama.jpg)
  .header-title
    text-decoration-line: none
    color: black
    h1
      margin: 0
      padding-top: 55px
      color: white
      font-size: 2.7em
      text-shadow: 0px 0px 10px black
</style>
