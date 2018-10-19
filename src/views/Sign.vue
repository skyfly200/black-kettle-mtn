<template lang="pug">
  .sign-page
    HomeLink
    Counter
    Form(v-if="submited === false" v-on:form-sent="onFormSent")
    .thanks(v-else)
      h1 Thank you {{ firstName }} for signing the petition!
      h3 Now will you help us spread the word?
      Social
</template>

<script>
import Counter from '../components/Counter.vue';
import Form from '../components/Form.vue';
import Social from '../components/Social.vue';
import HomeLink from '../components/HomeLink.vue';

export default {
  name: 'Sign',
  components: {
    Counter,
    Form,
    Social,
    HomeLink,
  },
  data: function () {
    return {
      submited: false,
      firstName: "",
    };
  },
  methods: {
    onFormSent: function (firstName) {
      this.submited = true;
      this.firstName = firstName._value;
    }
  }
};
</script>

<style lang="sass">
  .sign-page
    width: 100%
</style>
