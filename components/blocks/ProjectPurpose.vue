<template >
  <div class="project-purpose bg-[#F7F8FA] dark:bg-[#2B2F3A] text-[#373A43] dark:text-white py-[64rem]">
    <div class="container  bg-white dark:bg-[#1A1D27] rounded-[24px] px-0">
      <div class="section-inner flex justify-between ">

        <div class="project-purpose__text font-['Inter] flex flex-col pt-[48rem] pl-[52rem] flex-start max-w-[624rem]">
          <SectionTitle
            class="mb-[16rem] dark:color-white"
            :title="'Loyiha maqsadi nima edi?'"
          />

          <p class="mb-[8px] text-[16rem] leading-[22px]">
            Texnoman loyihasi axborot texnologiyalari, Internet, ijtimoiy media,
            Uznet, yuqori texnologiyalar, mobil qurilmalar hamda texnologiyalar
            bilan bog'liq kompaniyalar haqida yangiliklar, tahliliy maqolalar,
            xabarlar, ma'lumot berib borishga mo'ljallangan.
          </p>
          <p class="mb-[8px] text-[16rem] leading-[22px]">
            Endi saytimizda umumiy texnologiyalar olamiga oid barcha yangiliklar
            qo'yib boriladi. Foydalanuvchilarimiz bemalol o'z fikrlarini
            bildirishlari, o'zlarining shaxsiy bloglarida maqolalarini chop
            etishlari mumkin.
          </p>
          <p class="mb-[8px] text-[16rem] leading-[22px]">
            Texnoman loyihasi nafaqat sayt ma'muriyati tomonidan, balki
            foydalanuvchilar tomonidan ham rivojlantirib boriladi.
          </p>
        </div>

          <img class="project-purpose__image max-w-[444rem] max-h-[390rem]" src="@/assets/images/money-hand.png" alt="" />

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
}
</script>
<style lang="scss">

@media screen and (min-width: 370px) and (max-width: 887px) {
    .section-inner{
      display: block;
      padding-bottom: 48px;
      .container{
          padding-left: 15px;
        padding-right: 15px;
      }

      .project-purpose__image{
        max-width: unset;
        margin: 0 auto;
      }
      .project-purpose__text{
        max-width: unset;
        margin: 0;
      }
     }
}
</style>