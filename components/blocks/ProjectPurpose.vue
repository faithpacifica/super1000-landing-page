<template>
<div class="project-purpose bg-[#F7F8FA] dark:bg-[#2B2F3A] text-[#373A43] dark:text-white py-[64rem]">
  <div  class="container project-purpose__wrapper relative bg-white dark:bg-[#1A1D27] rounded-[24px] px-0">
    <div class="section-inner flex justify-between ">

      <div class="project-purpose__text font-['Inter] flex flex-col pt-[48rem] md:pl-[52rem] flex-start max-w-[624rem]">
        <SectionTitle class="mb-[16rem] dark:color-white" :title="'Loyiha maqsadi nima edi?'" />

        <p data-aos="fade-left" class="mb-[8px] text-[16px] leading-[22px]">
          Texnoman loyihasi axborot texnologiyalari, Internet, ijtimoiy media,
          Uznet, yuqori texnologiyalar, mobil qurilmalar hamda texnologiyalar
          bilan bog'liq kompaniyalar haqida yangiliklar, tahliliy maqolalar,
          xabarlar, ma'lumot berib borishga mo'ljallangan.
        </p>
        <p data-aos="fade-left" class="mb-[8px] text-[16px] leading-[22px]">
          Endi saytimizda umumiy texnologiyalar olamiga oid barcha yangiliklar
          qo'yib boriladi. Foydalanuvchilarimiz bemalol o'z fikrlarini
          bildirishlari, o'zlarining shaxsiy bloglarida maqolalarini chop
          etishlari mumkin.
        </p>
        <p data-aos="fade-left" class="mb-[8px] text-[16px] leading-[22px]">
          Texnoman loyihasi nafaqat sayt ma'muriyati tomonidan, balki
          foydalanuvchilar tomonidan ham rivojlantirib boriladi.
        </p>
      </div>

      <img class="project-purpose__image max-w-[444rem] max-h-[390rem]" src="@/assets/images/money-hand.png" alt="" />

    </div>

    <!-- Icons mode da rasm almashishi -->

    <img v-if="dark" class="mix-loader absolute left-[52%] top-[16%]" src="@/assets/images/white-full-round.png" alt="icon" />
    <img v-else class="mix-loader absolute left-[52%] top-[16%]" src="@/assets/images/gray-round.png" alt="icon" />
    <img v-if="dark" class="pulsating-star  absolute right-[30%] top-[70%]" src="@/assets/images/white-star.png" alt="icon" />
    <img v-else class="pulsating-star  absolute right-[30%] top-[70%]" src="@/assets/images/gray-star.png" alt="icon" />
    <img v-if="dark" class="  absolute left-[48%] bottom-[0%]" src="@/assets/images/half-round.png" alt="icon" />
    <img v-else class="  absolute left-[48%] bottom-[0%]" src="@/assets/images/gray-half-round.png" alt="icon" />
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex';
import SectionTitle from '~/components/common/SectionTitle.vue'
export default {
  components: {
    SectionTitle,
  },
  computed: {
    ...mapGetters(['dark'])
  },
}
</script>

<style lang="scss">
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

@media screen and (min-width: 370px) and (max-width: 887px) {
  .section-inner {
    display: block;
    padding-bottom: 48px;

    .project-purpose__image {
      max-width: unset;
      margin: 0 auto;
    }

    .project-purpose .project-purpose__text {
      padding-left: 20px;
      padding-right: 20px;
      max-width: unset;
      margin: 0;
    }
  }

  .project-purpose__wrapper {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media screen and (min-width: 370px) and (max-width: 640px) {
  .project-purpose__wrapper {
    border-radius: 0;
  }

  .mix-loader {
    top: 0%;
    left: 70%;
  }
}
</style>
