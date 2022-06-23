<template>
  <div
    :class="dark ? 'dark' : 'light'" class="overflow-x-hidden">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/others/Header.vue";
import Footer from "~/components/others/Footer.vue";
import { mapGetters } from 'vuex';

export default {
computed: {
      ...mapGetters(['dark']),
    },
  components: {
    Header,
    Footer,
  },
};
</script>
