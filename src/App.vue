<template lang="pug">
  #app
    video(id="bkg-video" playsinline autoplay muted loop)
      source(src="./assets/video-bkg_2.mp4" type="video/mp4")
    Content
    Footer

</template>

<script>

import Content from './components/Content.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Content,
    Footer,
  },
};
</script>

<style lang="sass">
body
  width: 100%
  margin: 0

video
    position: fixed
    top: 50%
    left: 50%
    min-width: 100%
    min-height: 100%
    width: auto
    height: auto
    z-index: -100
    transform: translateX(-50%) translateY(-50%)

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
</style>
