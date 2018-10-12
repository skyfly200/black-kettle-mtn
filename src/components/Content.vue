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
        | We propose the name be changed to Black Kettle Mountain,
        | honoring the chief of the Southern Arapaho tribe at the time.
        |
        a(href="https://en.wikipedia.org/wiki/Black_Kettle") Learn About Black Kettle
        ul.faq
          li Mount Evans is a 14er with an elevation of 14,265 feet
          li Mount Evans Scenic Byway is the highest paved road in North America
    Form
    .map
      iframe(frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=mt%20eavns&key=AIzaSyDu3M2o0VgXe_OgfQy9ub5dffvAExdRrfc&maptype=satellite" allowfullscreen)
</template>

<script>
import Form from './Form.vue';

export default {
  name: 'Content',
  components: {
    Form,
  },
};
</script>

<style lang="sass">
  .content
    margin: 20px
    align-items: center
    display: flex
    flex-direction: column
    @media(max-width: 620px)
      margin: 0

  .message-heading
    margin: 0 3%
  .map
    width: 100%
    iframe
      width: 100%
      height: 450px
      border: 0
</style>
