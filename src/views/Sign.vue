<template lang="pug">
  .sign-page
    HomeLink
    .sign-view(v-if="submited === false")
      Counter(v-bind:countp=count)
      .petition
        h3 Petition Text
        textarea(disabled) Insert Petition Text Here!!!
      Form(v-on:form-sent="onFormSent")
    .thanks(v-else)
        Counter(v-bind:countp=count)
        h1 Thank you {{ firstName }} for signing the petition!
        h2 You were signer number {{ count }}
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
  data: function () {
    return {
      submited: false,
      firstName: "",
      count: null,
    };
  },
  mounted: function () {
    this.getCount();
  },
  methods: {
    getCount: function () {
      this.axios
        .get('https://black-kettle-mountain.appspot.com/count')
        .then(response => (this.count = response.data.count))
        .catch(error => console.log(error))
    },
    onFormSent: function (res) {
      this.firstName = res.data.entry.firstName;
      this.count = res.data.entry.count;
      this.submited = true;
    }
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
</style>
