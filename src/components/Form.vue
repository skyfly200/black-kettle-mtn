<template lang="pug">
  .form
    .form-header
      h1 Sign The Petition
    form(id="signature" @submit.prevent="handleSubmit")
      input(v-model="form.firstName" placeholder="First Name" type="text" name="firstName" required)
      input(v-model="form.lastName" placeholder="Last Name" type="text" name="lastName" required)
      input(v-model="form.email" placeholder="Email" type="email" name="email" required)
      input(v-model="form.city" placeholder="City" type="text" name="city" required)
      input(v-model="form.state" placeholder="State" type="text" name="state" required)
      input(v-model.number="form.zip" placeholder="Zip Code" type="text" name="zip" required)
      textarea(v-model="form.message" placeholder="Personal Message (optional)" name="message")
      .errors(v-if="errors.length")
        p.error-message(v-for="error in errors") {{ error }}
      input(type="submit").submit
</template>

<script>
export default {
  name: 'Form',
  // eslint-disable-next-line
  data: function () {
    return {
      errors: [],
      form: {
        firstName: null,
        lastName: null,
        email: null,
        city: null,
        state: null,
        zip: null,
        message: null,
      },
    };
  },
  methods: {
    handleSubmit () {
      const postUrl = "https://black-kettle-mountain.appspot.com/submit";
      this.axios
        .post(postUrl, this.form)
        .then( res => {
          if (res.status === 200) this.$emit('form-sent', res);
          else if (res.status === 204) this.errors.push("Error: Existing Email");
          else console.log(res.status);
        })
        .catch( error => {
          console.log(error);
          this.errors.push("Error occured while saving");
        });
    }
  },
};
</script>

<style lang="sass">
  .form-header h1
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
    @media(max-width: 550px)
      flex-direction: column
      input
        width: 90%
        margin: 2% 15px

</style>
