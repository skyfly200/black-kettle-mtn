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
    margin-top: 20px
  .header-title
    text-decoration-line: none
    color: black
  .menu ul
    display: flex
    justify-content: center
    list-style: none
    li
      margin: 1% 4%
      width: auto
      a
        text-decoration: none
</style>
