<template>
<div class=" error pt-[268px] pb-[148px] " :class="dark ? 'bg-[#1A1D27]' : ''">
  <div class=" container relative ">
    <div class="error_img w-[100%] flex flex-center-center ">
      <img src="@/assets/images/error.png" alt="">
    </div>

    <div class="flex flex-col flex-center-center text-center  pt-[24rem]">
      <h2 class="font-['Poppins'] font-semibold text-[48rem] leading-[62rem] text-[#373A43] dark:text-white mb-[54px]">
        Ehh, ushbu sahifa topilmadi 😔
        <!-- {{ $t('title.error') }}    -430:gap-[35rem] -400:gap-[33rem] gap-[70rem]-->
      </h2>

      <p class="font-['Inter'] text-[15px] leading-[28px] text-[#22343E] dark:text-[#ffffff99] mb-[24px]">
        Iltimos qayta urinib ko‘ring
      </p>

      <nuxt-link :to="localePath('/')" class="flex items-center transition bg-[#746bb3] hover:opacity-80 active:opacity-60 hover:translate-y-10 active:translate-[-10px] rounded-[8px] py-[18px] pl-[38.5px] pr-[36px]">
        <Icon name="home_icon" class="home_icon" />
        <span class="font-['Inter'] font-medium text-[15px] leading-[20px] text-white ml-[10px]">
          Bosh sahifaga qaytish
        </span>
      </nuxt-link>
    </div>


    <img class="mix-loader-one absolute left-[14%] top-[7%]" src="@/assets/images/icon-blue-round.png" />
    <img class=" loader absolute right-[7%] top-[85%]" src="@/assets/images/icon-green-half.png" />
    <img class="pulsating-star absolute left-[0%] bottom-[25%]" src="@/assets/images/icon-star.png" />
    <img class="mix-loader absolute right-[0%] top-[25%]" src="@/assets/images/icon-yellow-round.png" />
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  components: {

  },
  layout: 'empty',
   computed: {
      ...mapGetters(['dark']),
    },
}
</script>

<style lang="scss" scoped>
// ANIMATION
 .error .pulsating-star {
    position: absolute;
    animation: animate 8s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: scale(0.3) translate(0) rotate(0);
      opacity: 1;
    }

    100% {
      transform: scale(1.5) translate(90px) rotate(360deg);
      opacity: 0;
    }
  }

 .error .loader {
    animation: spinner 4s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

.error .mix-loader-one {
  animation: mix-spinner 4s linear infinite;
}
.error .mix-loader {
  animation: mix-spinner 4s linear infinite;
}

@keyframes mix-spinner {
  0% {
    transform: rotate(0deg);
    transform: scale(0.3);
  }

  100% {
    transform: rotate(360deg);
    transform: scale(1.1);
  }
}
</style>
