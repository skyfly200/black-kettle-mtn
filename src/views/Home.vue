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
        | We should not honor of grant him having a mountian named after him.
        | We therefore propose the name be changed to Black Kettle Mountain,
        | honoring the chief of the Southern Cheyenne tribe at the time.
        |
        a(href="https://en.wikipedia.org/wiki/Black_Kettle") Learn About Black Kettle
      Counter
      p
        | Sign the petition to help us reach the goal of 10,000 signatures. Then we will submit them to the governor of Colorado.
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
import Counter from '../components/Counter.vue';

export default {
  name: 'Home',
  components: {
    Social,
    Counter,
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
    justify-content: center
    button
      width: 250px
    @media(max-width: 950px)
      button
        font-size: 1.2em
        width: 180px
    @media(max-width: 720px)
      flex-direction: column
      button
        width: 75%
</style>
