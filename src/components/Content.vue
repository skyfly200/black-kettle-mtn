<template lang="pug">
  .content
    .message
      .message-heading
        h2 Lets get Mt. Evans renamed to Black Kettle Mountain
        p
        | "In 1895, 30 years after he was forced to resign as governor
        | because of his part in the infamous Sand Creek Massacre and its subsequent cover-up,
        | Colorado's legislature officially renamed the peak in honor of John Evans,
        | second governor of the Colorado Territory from 1862 to 1865." -
        |
        a(href="https://en.wikipedia.org/wiki/Mount_Evans#History") Wikipedia
        br
        p
        | Evans ordered the sand creek masacure.
        | We should not honor this attrocity by having a mountian named after him.
        p
        | We propose to change the name to Black Kettle Mountain,
        | honoring the chief of the Southern Arapaho tribe at the time.
      .mtn-img
        img(src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Mt_Evans.JPG" title="Mt Evans")
        .attribution
          p "Mount Evans with Summit Lake" by Boilerinbtown
          |
          a(href="https://creativecommons.org/licenses/by-sa/3.0/") CC BY-SA 3.0
    Counter
    .call-to-action
      a(href="#join")
        button Sign the petition
    .map
      iframe(width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=mt%20eavns&key=AIzaSyDu3M2o0VgXe_OgfQy9ub5dffvAExdRrfc&maptype=satellite" allowfullscreen)
</template>

<script>
import Counter from './Counter.vue';

export default {
  name: 'Content',
  components: {
    Counter,
  },
};
</script>

<style lang="sass">
  .message
    display: grid
    grid: "mtn-img message-heading" 50% "blurb blurb" 50% / auto auto

  .message-heading
    grid-area: message-heading
    margin: 0 3%
  .mtn-img
    grid-area: mtn-img
    img
      width: 100%
    .attribution
      font-size: 0.65em
      line-height: 1.1em
      p
        margin: 0
  .call-to-action button
    margin-bottom: 30px
    font-size: 1.5em
    -webkit-transition-duration: 0.4s
    transition-duration: 0.4s
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)
    border-radius: 8px
    &:hover
      background-color: #4CAF50
      color: white
</style>
