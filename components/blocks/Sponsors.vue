<template>
<div class="sponsors bg-[#F7F8FA] dark:bg-[#2B2F3A] relative pt-[32rem]">
  <SectionTitle class="text-center dark:text-white" :title="'Hamkorlar'" />
  <div v-if="dark" class="">
    <VueSlickCarousel v-if="sponsors || sponsors.length" v-bind="settings" ref="sponsorsCarousel">
      <div class="">
        <div class="
              sponsors-card-wrapper
              grid
              container
              gap-[24px]
              lg:grid-cols-12
              md:justify-center
              lg:mb-0
              sm:mb-[64rem]
              sm:justify-center
            ">
          <!-- <div v-if="dark"> -->
            <div v-for="(item, i) in sponsorsDark" :key="i" class="
                  sponsor-card
                  h-[108rem]
                  w-[278rem]
                  mt-[20rem]
                  flex
                 lg:mb-[64rem]
                 sm:mb-[0rem]
                  lg:col-span-3
                  md:col-span-4
                  sm:col-span-6
                  items-center
                  justify-center
                  rounded-[16px]
                  bg-[#F7F8FA]
                  dark:bg-transparent dark:hover:bg-[#1A1D27]
                ">
              <img :src="item.icon" alt="sponsor image" />
            </div>
          <!-- </div> -->
        </div>
      </div>
    </VueSlickCarousel>

    <!-- Arrows positionda -->
    <div class="">
      <div @click.prevent="slidePrev" class="prev cursor-pointer absolute bottom-[40%] left-[120rem]">
        <Icon name="arrow_left" class="w-[28px] h-[28px]" />
      </div>
      <div @click.prevent="slideNext" class="next cursor-pointer absolute right-[120rem] bottom-[40%]">
        <Icon name="arrow_right" class="w-[28px] h-[28px]" />
      </div>
    </div>
  </div>
  <div v-else class="">
    <VueSlickCarousel v-if="sponsors || sponsors.length" v-bind="settings" ref="sponsorsCarousel">
      <div class="">
        <div class="
              sponsors-card-wrapper
              grid
              container
              gap-[24px]
              lg:mb-0
              sm:mb-[64rem]
              lg:grid-cols-12
              md:justify-center
              sm:justify-center
            ">
          <!-- <div v-if="dark"> -->
            <div v-for="(item, i) in sponsors" :key="i" class="
                  sponsor-card
                  h-[108rem]
                  w-[278rem]
                  mt-[20rem]
                  lg:mb-[64rem]
                 sm:mb-[0rem]
                  flex
                  lg:col-span-3
                  md:col-span-4
                  sm:col-span-6
                  items-center
                  justify-center
                  rounded-[16px]
                  bg-[#F7F8FA]
                  dark:bg-transparent dark:hover:bg-[#1A1D27]
                ">
              <img :src="item.icon" alt="sponsor image" />
            </div>
          <!-- </div> -->
        </div>
      </div>
    </VueSlickCarousel>

    <!-- Arrows positionda -->
    <div class="">
      <div @click.prevent="slidePrev" class="prev cursor-pointer absolute bottom-[40%] left-[120rem]">
        <Icon name="arrow_left" class="w-[28px] h-[28px]" />
      </div>
      <div @click.prevent="slideNext" class="next cursor-pointer absolute right-[120rem] bottom-[40%]">
        <Icon name="arrow_right" class="w-[28px] h-[28px]" />
      </div>
    </div>
  </div>
</div>
</template>

<script>

import {  mapGetters} from 'vuex';
import SectionTitle from '~/components/common/SectionTitle.vue'
export default {
  components: {
    SectionTitle,
  },
   computed: {
    ...mapGetters(['dark'])
  },
  data() {
    return {
      settings: {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
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
.sponsor-card {
  border: 1px solid rgba(17, 20, 45, 0.12);
  transition: 0.3s ease;

  // border: 1px solid transparent;
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

@media screen and (min-width: 320px) and (max-width: 1024px) {
  .sponsors-card-wrapper {
    justify-content: center;
  }
}
@media screen and (min-width: 320px) and (max-width: 640px) {
  .sponsor-card {
    margin-bottom: 0;
  }
  .sponsors-card-wrapper{
    margin-bottom: 64px;
  }
}
</style>
