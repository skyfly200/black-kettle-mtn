<template lang="pug">
  .sign-page
    HomeLink
    .sign-view(v-if="submited === false")
      Counter(v-bind:countp=count)
      .form-header
        h1 Sign The Petition
      .petition
        textarea(disabled) Insert Petition Text Here!!!
      Form()
    .thanks(v-else)
        Counter(v-bind:countp=count)
        h1 Thank you {{ firstName }} for signing the petition!
        h2 Your submission was signature number {{ count }}
        h3 Now will you help us spread the word?
        Social
</template>

<script>
import Counter from '../components/Counter.vue';
import Social from '../components/Social.vue';
import Form from '../components/Form.vue';
import HomeLink from '../components/HomeLink.vue';

export default {
  name: 'Sign',
  components: {
    Counter,
    Form,
    Social,
    HomeLink,
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    firstName() {
      return this.$store.state.entry.firstName;
    },
    submited() {
      return this.$store.state.submited;
    }
  },
  methods: {
  }
};
</script>

<style lang="sass">
  .sign-page
    width: 100%
  .petition
    textarea:disabled
      color: #000
      background-color: #FFF
  .form-header h1
    margin-bottom: 10px
</style>
