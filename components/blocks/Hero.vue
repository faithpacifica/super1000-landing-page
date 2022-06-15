<template>
<div class="hero h-[100vh] flex relative pt-[204rem] min-h-[960rem]">
 <!-- dark:bg-[url('~/assets/images/dark-hero.png')]  -->
  <div class="container relative">
    <div class="flex flex-col justify-between h-[100%]">

      <div class="hero__info ">
        <div class="inline-flex mb-[16px]">
          <h2 class="
                hero-title
                font-['Poppins']
                inline
                font-semibold
                text-[48rem]
                leading-[62rem]
                text-[#373A43]
                dark:text-white
              ">
            <span> {{$t('header.heroTitle1')}} </span>
            <div>
              <span>{{$t('header.heroTitle2')}}</span>
              <img class="inline w-[48px] h-[48px]" src="@/assets/images/flag.png" alt="face" />
              <img class="inline w-[48px] h-[48px]" src="@/assets/images/face-sad.png" alt="face" />
            </div>
          </h2>
        </div>
        <p class="
              hero-text
              font-['Inter']
              text-[15rem]
              leading-[28rem]
              text-[#22343E]
              dark:text-white
              dark:opacity-75
            ">
          Tez orada yangi talqindagi foydali loyihalar bilan qaytamiz
        </p>
        <div class="stick my-[25px] max-w-[580rem]"></div>
        <div class="hero-socials flex items-center">
          <div class="flex items-center">
            <!-- TODO: Hover -->
            <div class="hero-socials_wrapper flex gap-[9px] mr-[8px]">

              <a href="https://www.instagram.com/" target="_blank">
                <Icon name="insta_icon" class=" instagram" /> </a>
              <a href="https://www.youtube.com/" target="_blank">
                <Icon name="youtube_icon" class=" youtube" /> </a>
              <a href="https://www.telegram.org/" target="_blank">
                <Icon name="telegram_icon" class=" telegram" /> </a>
            </div>
            <span class="
                  font-['Inter']
                  text-[14rem]
                  leading-[17rem]
                  text-[#808191]
                  hover:text-[#6D35E1]
                  mr-[38px]
                  transition

                ">Aziz Halikov
            </span>
          </div>
          <div class="hero-socials_mail">
            <a href="mailto:'azcapital.uz'" class="flex items-center justify-between" target="_blank">
              <Icon name="globus_icon" class="globe" />
              <span class="
                    ml-[8px]
                    font-['Inter']
                    text-[14rem]
                    leading-[17rem]
                    text-[#808191]
                    hover:text-[#6D35E1]
                    transition
                  ">azcapital.uz</span>
            </a>
          </div>
        </div>
      </div>

      <div class="mx-auto z-10 mb-[64px]">
        <Mouse />
      </div>

    </div>

    <!-- Icons -->
    <img class="mix-loader absolute left-[43%] top-[48%]" src="@/assets/images/icon-blue-round.png" alt="" />
    <img class=" loader absolute right-[18%] top-[64%]" src="@/assets/images/icon-green-half.png" alt="" />
    <img class="pulsating-star absolute left-[0%] bottom-[25%]" src="@/assets/images/icon-star.png" alt="" />
    <img class="mix-loader absolute right-[0%] top-[30%]" src="@/assets/images/icon-yellow-round.png" alt="" />
  </div>

  <!-- Hero bottom shadow -->
  <!-- <img class="absolute bottom-0 w-full z=0" src="@/assets/images/hero-shadow.png" alt="shadow"> -->
</div>
</template>

<

<script>
import Mouse from '@/components/actions/Mouse.vue';
export default {
  components: {
    Mouse
  },
}
</script>

<style lang="scss" scoped>
.hero {
 background-image: url(@/assets/images/hero-bg-img.png);
  // background-image: url(@/assets/images/dark-hero.png);
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;

  .stick {
    background: #ced1d9;
    opacity: 0.4;
    height: 1px;
  }
}
.dark .hero{  background-image: url(@/assets/images/dark-hero.png);}

// .globe:hover svg path {
//     fill: rgb(44, 160, 255);
// }

// ANIMATION
.pulsating-star {
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

.loader {
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

.mix-loader {
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


@media screen and (min-width: 370px) and (max-width: 887px) {
  .hero{
    max-height: 500px;
  }
}
</style>
