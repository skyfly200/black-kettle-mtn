<template lang="pug">
  .form
    form(id="signature" @submit.prevent="handleSubmit")
      input(v-model="form.firstName" placeholder="First Name" type="text" name="firstName" required)
      input(v-model="form.lastName" placeholder="Last Name" type="text" name="lastName" required)
      input(v-model="form.email" placeholder="Email" type="email" name="email" required)
      input(v-model="form.city" placeholder="City" type="text" name="city" required)
      input(v-model="form.state" placeholder="State" type="text" name="state" required)
      input(v-model.number="form.zip" placeholder="Zip Code" type="text" name="zip" @change="checkZip" required)
      textarea(v-model="form.message" placeholder="Personal Message (optional)" name="message")
      .newsletter-checkbox
        input(v-model="form.newsletter" type="checkbox" name="newsletter" id="newsletter")
        label(for="newsletter") Email me updates about the petition
      transition(name="error")
        .errors
          p.error-message(v-if="errors.email.state") {{ errors.email.msg }}
          p.error-message(v-if="errors.zip.state") {{ errors.zip.msg }}
          p.error-message(v-if="errors.general.state") {{ errors.general.msg }}
      transition(name="submit")
      input(type="submit" v-if="!sent" value='Submit').submit
      Loader(v-if="sent")
</template>

<script>
import Loader from './Loader.vue';

export default {
  name: 'Form',
  // eslint-disable-next-line
  components: {
    Loader,
  },
  data: function () {
    return {
      errors: {
        email: { state: false, msg: "" },
        zip: { state: false, msg: "" },
        general: { state: false, msg: "" },
      },
      form: {
        firstName: null,
        lastName: null,
        email: null,
        city: null,
        state: null,
        zip: null,
        message: null,
        newsletter: true,
      },
    };
  },
  computed: {
    sent() {
      return this.$store.state.sent;
    },
  },
  methods: {
    handleSubmit() {
      if (this.validZip(this.form.zip)) {
        this.$store.commit('sent', true);
        this.clearErrors();
        this.axios
          .post("https://black-kettle-mountain.appspot.com/submit", this.form)
          .then( res => {
            if (res.status === 200) this.$store.commit('submitted', res.data.entry);
            else if (res.status === 204) this.showError('email', "Looks like you've already signed");
            else console.error(res.data);
            this.$store.commit('sent', false);
          })
          .catch( error => {
            console.log(error);
            this.showError('general', "Error occured while saving, please try again");
            this.$store.commit('sent', false);
          });
      }
    },
    validZip(zip) {
      return /^[0-9]{5}(?:-[0-9]{4})?$/.test(zip);
    },
    checkZip() {
      if (!this.validZip(this.form.zip)) this.showError('zip', "Please input a valid US zip code");
      else this.clearError('zip');
    },
    showError(type, msg) {
      this.errors[type] = { state: true, msg: msg}
    },
    clearError(type) {
      this.errors[type] = { state: false, msg: ""}
    },
    clearErrors(type, msg) {
      this.errors = {
        email: { state: false, msg: "" },
        zip: { state: false, msg: "" },
        general: { state: false, msg: "" },
      };
    },
  },
};
</script>

<style lang="sass">
  .error-enter-active, .error-leave-active
    transition: opacity 0.25s ease-out

  .error-enter, .error-leave-to
    opacity: 0

  .submit-enter-active, .submit-leave-active
    transition: opacity 0.25s ease-out

  .submit-enter, .submit-leave-to
    opacity: 0

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
    .newsletter-checkbox
      width: 100%
      margin-top: 10px
    #newsletter
      width: auto
      box-shadow: none
      padding: 0
    .errors
      width: 60%
      margin: 0 20%
      font-size: 1.3em
      p
        background-color: rgba(255,0,0,1)
        padding: 2%
      @media(max-width: 720px)
        width: 90%
        margin: 0 6%
      @media(max-width: 550px)
        width: 94%
        margin: 0 6%
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
