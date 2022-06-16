<template>
<div class="">
  <main class="page" :class="dark ? 'dark' : 'light'">
    <Header  />

      <Nuxt class="" />
      <Footer />
  </main>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from "~/components/others/Header.vue";
import Footer from "~/components/others/Footer.vue";
export default {
  name: "Empty",
   computed: {
      ...mapGetters(['dark']),
    },
  components: {
    Header,
    Footer
  },
};
</script>
