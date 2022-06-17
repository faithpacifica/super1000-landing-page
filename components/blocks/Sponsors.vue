<template>
<div class="sponsors bg-[#F7F8FA] dark:bg-[#2B2F3A] relative pt-[32rem]">
  <SectionTitle class="text-center mb-[20rem] dark:text-white" :title="'Hamkorlar'" />

  <!-- DARK -->
  <div v-if="dark" class="sponsors-card-wrapper container  sm:pb-[64rem] ">
    <VueSlickCarousel v-if="sponsorsDark || sponsorsDark.length" v-bind="settings" ref="sponsorsCarousel" class="overflow-hidden ">
      <div v-for="(item, i) in sponsorsDark" :key="i" class="overflow-hidden ">
        <div class="sponsor-card h-[108rem] w-[278rem]  flex justify-center items-center mt-[20rem] mb-[64rem]  rounded-[16px]  dark:bg-transparent dark:hover:bg-[#1A1D27]">
          <img :src="item.icon" alt="sponsor image" />
        </div>
      </div>
    </VueSlickCarousel>
  </div>

  <div v-else class="sponsors-card-wrapper container  sm:pb-[64rem] ">
    <VueSlickCarousel v-if="sponsors || sponsors.length" v-bind="settings" ref="sponsorsCarousel" class="overflow-hidden ">
      <div v-for="(item, i) in sponsors" :key="i" class="overflow-hidden ">

        <div class="sponsor-card h-[108rem] w-[278rem]  flex justify-center items-center mt-[20rem] mb-[64rem]  rounded-[16px]  dark:bg-transparent dark:hover:bg-[#1A1D27]">
          <img :src="item.icon" alt="sponsor image" />
        </div>
      </div>
    </VueSlickCarousel>
  </div>

  <!-- Arrows positionda -->
  <div class="">
    <div @click.prevent="slidePrev" class="prev cursor-pointer absolute top-[150px] left-[120rem]">
      <Icon name="arrow_left" class="w-[28px] h-[28px]" />
    </div>
    <div @click.prevent="slideNext" class="next cursor-pointer absolute right-[120rem] top-[150px]">
      <Icon name="arrow_right" class="w-[28px] h-[28px]" />
    </div>
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import SectionTitle from '~/components/common/SectionTitle.vue'
export default {
  components: {
    SectionTitle,
  },
  computed: {
    ...mapGetters(['dark']),
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        centerPadding: '50px',
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,

        responsive: [{
            breakpoint: 1240,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      },
      sponsors: [{
          icon: require('@/assets/images/logo-1.png'),
        },
        {
          icon: require('@/assets/images/logo-2.png'),
        },
        {
          icon: require('@/assets/images/logo-3.png'),
        },
        {
          icon: require('@/assets/images/logo-4.png'),
        },
        {
          icon: require('@/assets/images/logo-3.png'),
        },
      ],
      sponsorsDark: [{
          icon: require('@/assets/images/dark-logo-1.png'),
        },
        {
          icon: require('@/assets/images/dark-logo-2.png'),
        },
        {
          icon: require('@/assets/images/dark-logo-3.png'),
        },
        {
          icon: require('@/assets/images/dark-logo-4.png'),
        },
        {
          icon: require('@/assets/images/dark-logo-3.png'),
        },
      ],
    }
  },
  methods: {
    slidePrev() {
      this.$refs.sponsorsCarousel.prev()
      console.log('prev')
    },
    slideNext() {
      this.$refs.sponsorsCarousel.next()
      console.log('next')
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide
    },
  },
}
</script>

<style lang="scss">
.sponsors-card-wrapper {
  .slick-initialized .slick-slide {
    display: flex !important;
    justify-content: center !important;
    ;
  }
}

.sponsor-card {
  border: 1px solid rgba(17, 20, 45, 0.12);
  transition: 0.3s ease;
  margin-left: 15px;
  margin-right: 15px;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    border: 1px solid rgba(109, 53, 225, 0.3);
    box-shadow: 0 10px 22px rgba(55, 58, 67, 0.1);
  }
}

.dark .sponsor-card {
  border: 1px solid rgba(255, 255, 255, 0.12);

  &:hover {
    background: #1a1d27;
    border: 1px solid rgba(255, 206, 115, 0.3);
    box-shadow: 0 10px 32px rgba(255, 206, 115, 0.2);
  }
}

@media screen and (min-width: 320px) and (max-width: 1450px) {
  .sponsors {
    .prev {
      left: 20px;
    }

    .next {
      right: 20px;
    }
  }
}

@media screen and (min-width: 640px) and (max-width: 860px) {
  .sponsors {
    .prev {
      top: 130px;
    }

    .next {
      top: 130px;
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 640px) {
  .sponsors {
    .prev {
      top: 110px;
    }

    .next {
      top: 110px;
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 1024px) {
  .sponsors-card-wrapper {
    justify-content: center;
  }
}

@media screen and (min-width: 320px) and (max-width: 640px) {
  .sponsors-card-wrapper {
    padding-bottom: 64rem;
  }
}
</style>
