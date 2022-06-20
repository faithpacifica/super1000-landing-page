<template>
<div class="staff-opinion py-[64rem] dark:bg-[#1A1D27]">
  <div class="staff-carousel container relative">
    <SectionTitle class="mb-[24rem] text-center dark:text-white" :title="'Loyiha haqida fikrlar'" />
    <!-- ----------------- -->
    <div class="carousel-wrapper flex lg:justify-between sm:justify-center">
      <div class="side-boxes inline max-w-[178px] w-full h-[296px] shadow-effect">
        <img class="rounded-[28rem] h-full w-full" src="@/assets/images/car-1.jpg" alt="" />
      </div>

      <VueSlickCarousel class="h-[296px] w-[782px]" ref="carousel" v-bind="settings">
        <div v-for="(item, index) in 4" :key="index" class="z-5 w-full">
          <div class="main-box flex bg-white dark:bg-[#1A1D27] dark:border-[#ffffff1f] dark:border dark:border-solid border border-solid p-[16rem] rounded-[28rem] h-[296px]">
            <div class="main-box__img-wrapper max-w-[214px] w-full">
              <img class="rounded-[28rem] w-full h-full" src="@/assets/images/car-main.jpg" alt="" />
            </div>

            <div class="main-box-info flex flex-col justify-end ml-[28rem] w-full">
              <Icon name="quote" class="!w-[40px] !h-[27px] mb-[18rem] mt-[14rem]" />
              <p class="mb-[20px] inter text-[18rem] leading-[22rem] text-[#373A43] dark:text-white font-normal">
                Super 1000 loyihasi asoschilariga o‘ziming minnatdorchiligimni
                bilidirgan bo‘lardim. Loyihaning asosiy maqsadi treyding
                darslari bo‘lishiga qaramay, boshqa foydalik kontent foydasini
                aytib o‘tmaslik noshkurlik bo‘lib qoladi. Loyiha uchun rahmat!
              </p>
              <SectionTitle class="mb-[2rem] poppins-font font-semibold text-[27rem] leading-[130%] text-[#373A43] dark:text-white" :title="'Pulatov Jasurbek'" />
              <p class="inter font-normal text-[16rem] leading-[130%] text-[#84868C] dark:text-[#ffffff99]">
                Loyiha ishtirokchisi
              </p>
            </div>
          </div>
        </div>
      </VueSlickCarousel>

      <div class="side-boxes inline max-w-[178px] w-full h-[296px] shadow-effect">
        <img class="rounded-[28rem] h-full w-full" src="@/assets/images/car-2.jpg" alt="" />
      </div>
    </div>

    <!-- Arrows positionda -->
    <div class="">
      <div @click.prevent="slidePrev" class="arrowss prev cursor-pointer absolute md:bottom-[140px] lg:left-[70px] sm:left-[25px] z-40">
        <svg class="arrow-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.66675 16H25.3334M6.66675 16L14.6667 24M6.66675 16L14.6667 8" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div @click.prevent="slideNext" class="arrowss next cursor-pointer absolute lg:right-[70px] md:bottom-[140px] sm:right-[25px] z-40">
        <svg class="arrow-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.3334 16H6.66675M25.3334 16L17.3334 24M25.3334 16L17.3334 8" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
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
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipe: true,
        centerMode: true,
      },
    }
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.prev()
    },
    slideNext() {
      this.$refs.carousel.next()
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide
    },
  },
}
</script>

<style lang="scss">
.staff-carousel .slick-list{
  padding: 0 !important;
}

.staff-carousel .slick-arrow{
  display: none !important;
}

.staff-carousel {
  .main-box {
    border: 1px solid rgba(17, 20, 45, 0.12);

    &__img-wrapper {
      z-index: 5;
      // TODO:
      // filter: blur(60px);

      img {
        z-index: 10;
        opacity: 1;
      }
    }
  }
}

.shadow-effect {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 28px;
    background-image: linear-gradient(180deg,
        rgba(109, 53, 225, 0.4) -37.04%,
        rgba(109, 53, 225, 0.88) 66.39%,
        #6d35e1 112.35%);
  }
}

.dark .main-box {
  border: 1px solid rgba(255, 255, 255, 0.12);
}

@media screen and (min-width: 370px) and (max-width: 1024px) {
  .carousel-wrapper {
    flex: block;
  }

  .side-boxes {
    display: none;
  }

  .arrow-svg path {
    stroke: #84868c;
    font-weight: bold;
  }

  .main-box-info {
    justify-content: flex-start;
  }
}

@media screen and (min-width: 370px) and (max-width: 640px) {
  .staff-opinion {
    padding-bottom: 200px;

    .prev {
      left: 10px;
      bottom: 50px;
    }

    .next {
      right: 10px;
      bottom: 50px;
    }
  }

  .main-box {
    display: block;
    height: 480px;
  }

  .main-box__img-wrapper {
    margin: 0 auto;
  }

  .main-box-info {
    padding-right: 10px;
  }

  .slick-track.slick-center {
    margin: 0;
    min-width: 340px;
  }
}
</style>
