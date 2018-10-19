<template lang="pug">
  .sign-page
    HomeLink
    Counter
    Form(v-if="submited === false")
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
};
</script>

<style lang="sass">
  .sign-page
    width: 100%
</style>
