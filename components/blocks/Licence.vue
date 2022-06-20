<template>
<div class="py-[64rem] dark:bg-[#1A1D27]">
  <div class="container licence-container flex gap-[24px]">
    <div class="flex flex-col ">
      <SectionTitle class="mb-[20rem] text-center dark:text-white" :title="'Kurs patenti'" />
      <p data-aos="fade-left" class="mb-[8px]  inter
                text-[16px]
                leading-[22rem]
                text-[#373A43] dark:text-[#ffffffbf] text-justify">
        Ishlab topish — eng asosiy sabab sifatida Har bir kishi o'z hayotida
        ehtiyojlarining katta qismini qanoatlantirishga qodir ish haqi olishga
        intilishi sir emas. Yaxshi daromad — farovolik va barqarorlikning
        kafolatidir. Axborot texnologiyalari va global tarmoqqa hamma kirishi
        vaqtida millionlab odamlar pul topishning va shaxsiy kapitalini
        xalqaro valyuta Foreks bozori ichida valyuta kurslarining farqida
        savdo qilish hisobiga shaxsiy kapitalni orttirishning cheksiz
        imkonyatlariga ega. 80-yillarda va hatto 90-yillarda ham birjalardagi
        "masofadan" savdo qilish telefon qo'ng'iroqlari yordamida amalga
        oshirilar edi. Hozir treyderlar savdoni Internet orqali amalga
        oshirishlari va uyidan chiqmasdanoq juda ko'p pul ishlab olishlari
        mumkin.
      </p>
      <p data-aos="fade-left" class="inter
                text-[16px]
                leading-[22rem]
                text-[#373A43] dark:text-[#ffffffbf] text-justify">
        Foreks — global birja shaklida tashkil etilgan xalqaro valyuta
        bozoridir, unda faqat banklar, korporatsiyalar va brokerlik
        kompaniyalarigina emas, balki istagan xohlovchi kishi valyutani sotib
        olishi/sotishi mumkin. Har bir treyder o'z kompyuteriga brokerning
        servari bilan biriktiruvchi terminal o'rnatib, bu terminal orqali u
        savdo qiladi va mazkur dastur yordamida valyutani sotib olish va
        sotish to'g'risida buyruqlar beradi. Savdo nimadan boshlanadi Haqiqiy
        savdo hisob-varag'i ochilgandan so'ng bundy savol tug'iladi: "Foreksda
        valyuta kurslarining farqida chayqovchilik harakatlarining barcha
        chalkash-chulkashliklari to'g'risida bilmasdan turib qanday qilib pul
        ishlash mumkin?". Umuman va yaxlit holda Foreks bozorida savdo qilish
        mutlaqo oson.
      </p>
    </div>

    <!-- TODO:img-wrapper w,h olmayapti -->
    <!-- <div class="licence-wrapper rounded-[20rem] w-[381rem] h-[527rem]"> -->
      <!--TODO: filter: blur(60px); -->
      <img class="patent-image w-[381rem] h-[527rem] rounded-[20rem] " src="@/assets/images/patent.jpg" alt="patent" />
    <!-- </div> -->

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
.licence-wrapper {
  border: 1px solid rgba(108, 53, 221, 0.2);
  box-shadow: 1px 24px 32px -13px rgba(34, 60, 80, 0.2);
  // TODO:shadow bor olib bumayapti
}

 @media screen and (min-width: 370px) and (max-width: 767px) {
  .licence-container{
    display: block;
  }
.patent-image{
  width: 300rem;
  height: 350rem;
  margin: 30px auto 0;
-webkit-box-shadow: 1px 24px 32px -13px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 1px 24px 32px -13px rgba(34, 60, 80, 0.2);
box-shadow: 1px 24px 32px -13px rgba(34, 60, 80, 0.2);
}
}
</style>
