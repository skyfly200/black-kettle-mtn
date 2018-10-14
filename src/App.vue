<template lang="pug">
  #app
    video(id="bkg-video" playsinline autoplay muted loop)
      source(src="./assets/video-bkg_2.mp4" type="video/mp4")
      div
    .content
      Home
      router-view
      Footer

</template>

<script>
import Home from './views/Home.vue';
import Form from './views/Form.vue';
import Mtn from './views/Mtn.vue';
import History from './views/History.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Home,
    Form,
    Mtn,
    History,
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

  a
    color: lightskyblue

  button
    margin: 15px
    padding: 10px 10px
    font-size: 1.5em
    -webkit-transition-duration: 0.4s
    transition-duration: 0.4s
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)
    background-color: rgba(0,0,0,0.5)
    box-shadow: 0 0 1px 2px white
    color: white
    border: 0
    &:hover
      background-color: #FFFFFF
      color: black
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)

  #app
    color: white
    font-family: Raleway, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    height: 100%

  .content
    margin: 20px
    padding: 3% 3% 0% 3%
    align-items: center
    display: flex
    flex-direction: column
    background-color: rgba(0,0,0,0.3)
    @media(max-width: 620px)
      margin: 0
    .footer

</style>
