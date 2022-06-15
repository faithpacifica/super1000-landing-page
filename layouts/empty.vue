<template>
  <div class="">
    <main class="page">
      <Header />
      <Nuxt class="" />
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "~/components/others/Header.vue";
import Footer from "~/components/others/Footer.vue";
export default {
  name: "Empty",
  components: { Header,Footer },
};
</script>
