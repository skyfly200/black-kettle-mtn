<template lang="pug">
  .form
    .form-header
      h1 Sign The Petition
    form(id="signature" action="http://black-kettle-mountain.appspot.com/submit" method="post")
      input(v-model="firstName" placeholder="First Name" type="text" name="firstName" required)
      input(v-model="lastName" placeholder="Last Name" type="text" name="lastName" required)
      input(v-model="email" placeholder="Email" type="email" name="email" required)
      input(v-model="city" placeholder="City" type="text" name="city" required)
      input(v-model="state" placeholder="State" type="text" name="state" required)
      input(v-model.number="zip" placeholder="Zip Code" type="text" name="zip" required)
      textarea(v-model="message" placeholder="Message(optional)" name="message" width='100%')
      p.errors(v-if="errors.length")
        b Please correct the following error(s):
        ul
          li.error-message(v-for="error in errors") {{ error }}
      input(type="submit").submit
</template>

<script>
export default {
  name: 'Form',
  // eslint-disable-next-line
  data: function () {
    return {
      errors: [],
      firstName: null,
      lastName: null,
      email: null,
      city: null,
      state: null,
      zip: null,
      message: null,
    };
  },
};
</script>

<style lang="sass">
  .form-header
    margin-bottom: 0
  #signature
    display: flex
    flex-wrap: wrap
    padding: 20px 0
    margin: 0
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
      width: 70%
      height: 8em
      margin: 10px 20% 0 20%
      padding: 0.5em
      border: 0
      box-shadow: 0 0 1px black
    button
      margin: 20px 0px 0px 0px
      padding: 10px 20px
      font-size: 2em
    .errors
      width: 50%
      padding: 0 25%
      color: red
      font-size: 1.3em
    @media(max-width: 720px)
      input
        width: 40%
        padding: 2%
      textarea
        width: 84%
        margin: 0 4% 0 4%
        padding: 2%
    @media(max-width: 550px)
      flex-direction: column
      input
        width: 90%
        margin: 2% 15px
      textarea
        width: 90%
        padding: 2%
        margin: 2% 15px
        height: 3EM

</style>
