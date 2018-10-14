<template lang="pug">
  .form-container
    .form-header
      h1 Sign The Petition
    Counter
    form.form
      input(v-model="name" placeholder="John Doe")
      input(v-model="email" placeholder="example@example.com")
      input(v-model="zip" placeholder="Zip Code")
      textarea(v-model="message" placeholder="Message(optional)" width='100%')
      button Submit
</template>

<script>
import Counter from './Counter.vue';
import Social from './Social.vue';

export default {
  name: 'Form',
  components: {
    Counter,
    Social,
  },
  // eslint-disable-next-line
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
  .form-container
    display: flex
    flex-wrap: wrap
    padding: 20px 0
    margin: 20px 0
    align-items: center
    justify-content: center
    .counter
      width: 100%
    input
      width: 30%
      padding: 0.5em
      border: 0
      box-shadow: 0 0 1px black
    textarea
      width: 50%
      height: 4em
      margin: 10px 20% 0 20%
      padding: 0.5em
      border: 0
      box-shadow: 0 0 1px black
    button
      margin: 20px 0px 0px 0px
      padding: 10px 20px
      font-size: 2em
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
