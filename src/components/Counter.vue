<template lang="pug">
  .counter
    .header
      h1(v-if="!goalReached") Help us reach our goal!
      .goal(v-else)
        h1 Yay! We've reached our goal
        h2 Now how many can we get?!?!
    .meter
      span(:style="{ width: (count / goal <= 0.01 ? 1 : count / goal * 100) + '%' }")
    .caption
      h3 {{ countText }} of {{ goalText }} {{ unit }}
</template>

<script>
export default {
  name: 'Counter',
  data: function () {
    return {
      goal: 10000,
      unit: 'signatures',
    };
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    goalText () {
      return this.numberWithCommas(this.goal)
    },
    countText () {
      return this.numberWithCommas(this.$store.state.count)
    },
    goalReached () {
      return this.$store.state.count >= this.goal
    }
  },
  methods: {
    numberWithCommas: (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style lang="sass">
  .meter
    height: 20px
    position: relative
    background: #555
    -moz-border-radius: 25px
    -webkit-border-radius: 25px
    border-radius: 25px
    padding: 10px
    margin: 0px 10px
    box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3)
    span
      display: block
      height: 100%
      border-top-right-radius: 8px
      border-bottom-right-radius: 8px
      border-top-left-radius: 20px
      border-bottom-left-radius: 20px
      background-color: rgb(43,194,83)
      background-image: linear-gradient( center bottom, rgb(43,194,83) 37%, rgb(84,240,84) 69% )
      box-shadow: inset 0 2px 9px  rgba(255,255,255,0.3), inset 0 -2px 6px rgba(0,0,0,0.4)
      position: relative
      overflow: hidden
  .caption h3
    margin: 0.2em 0 1em 0
</style>
