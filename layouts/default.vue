<template>
  <div
    :class="dark ? 'dark' : 'light'" class="">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from "~/components/others/Header.vue";
import Footer from "~/components/others/Footer.vue";

export default {

  components: {
    Header,
    Footer,
  },
    computed: {
      ...mapGetters(['dark']),
      // TODO: scrollToTop ishlamayapti
      scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    }

};
</script>
