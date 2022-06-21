<template>
<div class=" pt-[144px] pb-[120px] dark:bg-[#1A1D27]">
  <div class="container">
    <SectionTitle class="mb-[35rem] text-center dark:text-white" :title="$t('news_page.title')" />
    <div data-aos="fade-left" class="news-wrapper grid grid-cols-3 gap-[24px]">

      <NewsCard v-for="item in 9"
      v-bind="{
         date: new Date(),
      }"
       :key="item" />
    </div>

    <div class="mt-[32px] mx-auto text-center">
      <button class="show-more bg-[#8f72c9] hover:bg-[#9f87ce] rounded-[10px] py-[12px] px-[33px] text-white font-semibold text-[16px] leading-[20px] poppins-font">
        <!-- Yana yuklash -->
         {{ $t('news_page.loade_more')}}
      </button>
    </div>

  </div>
</div>
</template>

<script>
import SectionTitle from '~/components/common/SectionTitle.vue'
import NewsCard from '~/components/cards/NewsCard.vue'
export default {
  components: {
    SectionTitle,
    NewsCard
  },
  computed: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss">
@media screen and (min-width: 500px) and (max-width: 740px) {
  .news-wrapper {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media screen and (min-width: 370px) and (max-width: 500px) {
  .news-wrapper {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
