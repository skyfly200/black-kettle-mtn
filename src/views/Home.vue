<template lang="pug">
  .message
    .message-heading
      h1 Lets get Mt. Evans renamed to Black Kettle Mountain
      p
        | "In 1895, 30 years after he was forced to resign as governor
        | because of his part in the infamous Sand Creek Massacre and its subsequent cover-up,
        | Colorado's legislature officially renamed the peak in honor of John Evans,
        | second governor of the Colorado Territory from 1862 to 1865." -
        |
        a(href="https://en.wikipedia.org/wiki/Mount_Evans#History") Wikipedia
      p
        | Evans ordered the sand creek masacure.
        | We should not honor this attrocity by having a mountian named after him.
        | We propose the name be changed to Black Kettle Mountain,
        | honoring the chief of the Southern Cheyenne tribe at the time.
        |
        a(href="https://en.wikipedia.org/wiki/Black_Kettle") Learn About Black Kettle
      .menu
        router-link(to="/sign")
          button Sign The Petition
        router-link(to="/mtn")
          button The Mountain
        router-link(to="/history")
          button History
      Social

</template>

<script>
import Social from '../components/Social.vue';

export default {
  name: 'Home',
  components: {
    Social,
  },
};

</script>

<style lang="sass">
  .message-heading
    display: flex
    flex-direction: column
    justify-content: center
    h1
      margin-top: 0
  .menu
    width: 100%
    margin: 2% 0
    display: flex
    flex-wrap: wrap
    justify-content: center
    button
      width: 250px
</style>
