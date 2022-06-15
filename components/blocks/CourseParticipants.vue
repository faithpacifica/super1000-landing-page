<template>
<div class="py-[32px] bg-[#F7F8FA] dark:bg-[#2B2F3A]">
  <SectionTitle class="mb-[22rem] text-center dark:text-white" :title="'Kurs ishtirokchilari'" />

  <div class="participants-carousel relative max-w-[1640px] mx-auto">
    <VueSlickCarousel class="h-[100rem]" v-bind="settingsToRight">
      <!-- <div > -->
        <div class="h-[100rem]" v-for="(item, index) in 3" :key="index">
          <img class="w-full h-full" src="@/assets/images/part-1.png" alt="" />
        </div>
      <!-- </div> -->
    </VueSlickCarousel>

    <VueSlickCarousel class="h-[100rem]" v-bind="settingToLeft">
      <!-- <div class="h-[100px]"> -->
        <div  class="h-[100rem]" v-for="(item, index) in 3" :key="index">
          <img class="w-full h-full" src="@/assets/images/part-2.png" alt="" />
        </div>
      <!-- </div> -->
    </VueSlickCarousel>

    <VueSlickCarousel class="h-[100rem]" v-bind="settings">
      <!-- <div class="h-[100px]"> -->
        <div  class="h-[100rem]" v-for="(item, index) in 3" :key="index">
          <img class="w-full h-full" src="@/assets/images/part-3.png" alt="" />
        </div>
      <!-- </div> -->
    </VueSlickCarousel>

    <div class="shadow">
      <div class="prev absolute h-full w-[300px] left-0 top-0 z-20"></div>
      <div class="next absolute h-full w-[300px] right-0 top-0 z-20"></div>
    </div>
  </div>
</div>
</template>

<script>
import SectionTitle from '~/components/common/SectionTitle.vue'
export default {
  components: {
    SectionTitle,
  },
  data() {
    return {
      settings: {
        accessibility: false,
        arrows:false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000,
        speed:90000,
        cssEase: 'linear'
      },
      settingToLeft:{
        arrows:false,
        accessibility: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: -1,
        autoplay: true,
        autoplaySpeed:1000,
        speed:80000,
        cssEase: 'linear'
      },
      settingsToRight:{
        arrows:false,
        accessibility: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
        speed:100000,
        cssEase: 'linear'
      }
    }
  },
  methods: {
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide
    },
  },
}
</script>

<style lang="scss">
.participants-carousel {
  .prev {
    background-image: linear-gradient(90deg,
        #f7f8fa 0%,
        rgba(247, 248, 250, 0) 100%);
    background-position: left 0 top 0;
  }


  .next {
    background-image: linear-gradient(90deg,
        rgba(247, 248, 250, 0) 0%,
        #f7f8fa 100%);
    background-position: right 0 top 0;
  }

}

 .dark .participants-carousel .prev{
  background-image: linear-gradient(90deg, #2B2F3A 0%, rgba(43, 47, 58, 0) 100%);
   background-position: left 0 top 0;
 }
  .dark .participants-carousel .next{
    background-image: linear-gradient(90deg, rgba(43, 47, 58, 0) 0%, #2B2F3A 100%);;
      background-position: right 0 top 0;
  }
</style>
