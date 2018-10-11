<template lang="pug">
  .form
    input(v-model="name" placeholder="John Doe")
    input(v-model="email" placeholder="example@example.com")
    input(v-model="zip" placeholder="Zip Code")
    textarea(v-model="message" placeholder="Message(optional)" width='100%')
    button Sign the petition
</template>

<script>
export default {
  name: 'Form',
  data: function () {
    return {
      name: '',
      email: '',
      zip: '',
      message: '',
    };
  },
};
</script>

<style lang="sass">
  .form
    display: flex
    flex-wrap: wrap
    padding: 20px 0
    margin: 20px 0
    align-items: center
    justify-content: center
    box-shadow: 0 0 0.5em rgba(0,0,0,0.5)
    input
      width: 30%
      padding: 0.5em
    textarea
      width: 50%
      height: 4em
      margin: 10px 20% 0 20%
      padding: 0.5em
    button
      margin: 20px 0px 0px 0px
      padding: 10px 20px
      font-size: 2em
      -webkit-transition-duration: 0.4s
      transition-duration: 0.4s
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)
      border-radius: 8px
      background-color: #4CAF50
      color: white
      border: 0
      &:hover
        background-color: #FFFFFF
        color: black
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)
    @media(max-width: 620px)
      flex-direction: column
      input
        width: 90%
        padding: 2%
        margin: 2%
      textarea
        width: 90%
        padding: 2%
        margin: 2%
        height: 3EM
</style>
