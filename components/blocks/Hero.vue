<template>
<div class="hero h-[100vh] flex relative pt-[204rem] min-h-[960rem]">
 <!-- dark:bg-[url('~/assets/images/dark-hero.png')]  -->
  <div class="container relative">
    <div class="flex flex-col justify-between h-[100%]">

      <div class="hero__info ">
        <div class="inline-flex mb-[16px]">
          <h2 class="
                hero-title
                poppins-font
                inline
                font-semibold
                text-[48rem]
                leading-[62rem]
                text-[#373A43]
                dark:text-white
              ">
            <span> {{$t('hero.heroTitle1')}} </span>
            <div>
              <span>{{$t('hero.heroTitle2')}}</span>
              <img class="inline w-[48px] h-[48px]" src="@/assets/images/flag.svg" alt="flag" />
              <img class="inline w-[48px] h-[48px]" src="@/assets/images/emoji-smile.svg" alt="emoji" />
            </div>
          </h2>
        </div>
        <p class="
              hero-text
              inter
              text-[15px]
              leading-[28rem]
              text-[#22343E]
              dark:text-white
              dark:opacity-75
            ">
          <!-- Tez orada yangi talqindagi foydali loyihalar bilan qaytamiz -->
          {{$t('hero.hero_text')}}
        </p>
        <div class="stick my-[25px] max-w-[580rem]"></div>
        <div class="hero-socials flex items-center">
          <div class="flex items-center">

            <div class="hero-socials_wrapper flex gap-[9px] mr-[8px]">
                  <!-- INSTA -->
              <a class="bg-[#808191] rounded-[50%] px-[5px] pb-[4px] pt-[5px] hover:bg-[#C013CA] transition duration-500 ease" href="https://www.instagram.com/" target="_blank">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00004 6.50003C5.8285 6.50003 6.50006 5.82847 6.50006 5.00001C6.50006 4.17155 5.8285 3.49999 5.00004 3.49999C4.17158 3.49999 3.50002 4.17155 3.50002 5.00001C3.50002 5.82847 4.17158 6.50003 5.00004 6.50003ZM5.00004 7.50005C6.38076 7.50005 7.50008 6.38073 7.50008 5.00001C7.50008 3.61928 6.38076 2.49997 5.00004 2.49997C3.61931 2.49997 2.5 3.61928 2.5 5.00001C2.5 6.38073 3.61931 7.50005 5.00004 7.50005Z" fill="white"/>
                <path d="M8.00002 2.49995C8.00002 2.77609 7.77616 2.99995 7.50001 2.99995C7.22385 2.99995 7 2.77609 7 2.49995C7 2.2238 7.22385 1.99994 7.50001 1.99994C7.77616 1.99994 8.00002 2.2238 8.00002 2.49995Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99999 0.999924H2.99993C1.89534 0.999924 0.999894 1.89537 0.999894 2.99996V7.00002C0.999894 8.10459 1.89534 9.00005 2.99993 9.00005H6.99999C8.10456 9.00005 9.00002 8.10459 9.00002 7.00002V2.99996C9.00002 1.89537 8.10456 0.999924 6.99999 0.999924ZM2.99993 -9.15527e-05C1.34304 -9.15527e-05 -0.00012207 1.34307 -0.00012207 2.99996V7.00002C-0.00012207 8.65689 1.34304 10.0001 2.99993 10.0001H6.99999C8.65686 10.0001 10 8.65689 10 7.00002V2.99996C10 1.34307 8.65686 -9.15527e-05 6.99999 -9.15527e-05H2.99993Z" fill="white"/>
                </svg>
                </a>
              <a class="bg-[#808191] rounded-[50%] px-[5px] py-[6.5px] hover:bg-[#FF0000] transition duration-500 ease" href="https://www.youtube.com/" target="_blank">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.79045 1.57729C9.73399 1.36466 9.62266 1.1706 9.4676 1.01454C9.31254 0.858471 9.11919 0.745887 8.90693 0.688056C7.61068 0.531853 6.30553 0.461466 5 0.477353C3.69447 0.461466 2.38931 0.531853 1.09306 0.688056C0.8808 0.745887 0.687457 0.858471 0.532396 1.01454C0.377335 1.1706 0.265999 1.36466 0.209538 1.57729C0.065177 2.37668 -0.00488009 3.18772 0.000263939 4.00002C-0.00488009 4.81233 0.065177 5.62336 0.209538 6.42275C0.265999 6.63538 0.377335 6.82945 0.532396 6.98551C0.687457 7.14157 0.8808 7.25416 1.09306 7.31199C2.38931 7.46819 3.69447 7.53858 5 7.52269C6.30553 7.53858 7.61068 7.46819 8.90693 7.31199C9.11919 7.25416 9.31254 7.14157 9.4676 6.98551C9.62266 6.82945 9.73399 6.63538 9.79045 6.42275C9.93482 5.62336 10.0049 4.81233 9.99973 4.00002C10.0049 3.18772 9.93482 2.37668 9.79045 1.57729V1.57729ZM3.97719 5.48709V2.51296L6.59063 4.00002L3.97719 5.48709Z" fill="white"/>
                </svg>
                </a>
              <a class="bg-[#808191] rounded-[50%] px-[5px] py-[6.5px] hover:bg-[#279FDA] transition duration-500 ease"  href="https://www.telegram.org/" target="_blank">
               <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.43241 1.50461C5.53678 1.87713 3.7468 2.64816 1.06245 3.81768C0.626551 3.99103 0.39821 4.1606 0.377423 4.32642C0.342292 4.60665 0.693216 4.71699 1.17109 4.86726C1.23609 4.8877 1.30344 4.90887 1.37249 4.93132C1.84264 5.08415 2.47507 5.26294 2.80385 5.27004C3.10208 5.27648 3.43494 5.15353 3.80243 4.90119C6.3105 3.20817 7.60518 2.35243 7.68646 2.33399C7.74381 2.32097 7.82327 2.30461 7.87711 2.35246C7.93095 2.40032 7.92566 2.49094 7.91996 2.51526C7.88519 2.66346 6.50768 3.94412 5.79482 4.60686C5.57259 4.81347 5.41495 4.96002 5.38272 4.99349C5.31054 5.06847 5.23697 5.1394 5.16626 5.20756C4.72948 5.62862 4.40193 5.94437 5.18439 6.46C5.56041 6.70779 5.8613 6.9127 6.16148 7.11712C6.48931 7.34037 6.81628 7.56304 7.23933 7.84036C7.34712 7.91101 7.45006 7.9844 7.55032 8.05588C7.93183 8.32786 8.27458 8.57221 8.69803 8.53324C8.94408 8.5106 9.19824 8.27924 9.32732 7.5892C9.63237 5.95843 10.232 2.42506 10.3706 0.96904C10.3827 0.841473 10.3674 0.678215 10.3552 0.606548C10.3429 0.53488 10.3173 0.43277 10.2241 0.357181C10.1138 0.26766 9.94346 0.248782 9.86729 0.250059C9.52096 0.256225 8.98959 0.440988 6.43241 1.50461Z" fill="white"/>
              </svg>
              </a>
            </div>
            <span class="
                  inter
                  font-semibold
                  text-[14px]
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
              <Icon name="globus_icon" class="hero-icon globe" />
              <span class="
                    ml-[8px]
                    inter
                    font-semibold
                    text-[14px]
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
    <img class="mix-loader-one absolute left-[43%] top-[48%]" src="@/assets/images/icon-blue-round.png" alt="" />
    <img class=" loader absolute right-[18%] top-[64%]" src="@/assets/images/icon-green-half.png" alt="" />
    <img class="pulsating-star absolute left-[0%] bottom-[25%]" src="@/assets/images/icon-star.png" alt="" />
    <img class="mix-loader-two absolute right-[5%] top-[30%]" src="@/assets/images/icon-yellow-round.png" alt="" />
  </div>

</div>
</template>

<script>
import Mouse from '@/components/actions/Mouse.vue';
export default {
  components: {
    Mouse
  },
}
</script>

<style lang="scss">
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


// ICONlarga hover berish
  .hero-icon {
    &:hover {
      svg {
        path {
          stroke: rgb(44, 160, 255);
        }
      }
    }
  }

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

.mix-loader-one {
  animation: mix-spinner 4s linear infinite;
}

.mix-loader-two {
  animation: mix-spinner 4s ease infinite;
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
