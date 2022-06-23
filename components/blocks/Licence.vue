<template>
  <div class="py-[64rem] dark:bg-[#1A1D27]">
    <div class="container licence-container flex gap-[24px]">
      <div class="flex flex-col">
        <SectionTitle
          class="mb-[20rem] text-center dark:text-white"
          :title="$t('licence.title')"
        />
        <p
          data-aos="fade-left"
          class="mb-[8px] inter text-[16px] leading-[22px] text-[#373A43] dark:text-[#ffffffbf] text-justify"
        >
          {{ $t('licence.text_one')}}
        </p>
        <p
          data-aos="fade-left"
          class="inter text-[16px] leading-[22px] text-[#373A43] dark:text-[#ffffffbf] text-justify"
        >
          {{ $t('licence.text_two')}}
        </p>
      </div>

      <!-- TODO:img-wrapper w,h olmayapti -->
      <!-- <div class="licence-wrapper rounded-[20rem] w-[381rem] h-[527rem]"> -->
      <!--TODO: filter: blur(60px); -->
      <img
        class="patent-image w-[381rem] h-[527rem] rounded-[20rem]"
        src="@/assets/images/patent.jpg"
        alt="patent"
      />
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
  .licence-container {
    display: block;
  }

  .patent-image {
    width: 300rem;
    height: 350rem;
    margin: 30px auto 0;
    -webkit-box-shadow: 1px 24px 32px -13px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 1px 24px 32px -13px rgba(34, 60, 80, 0.2);
    box-shadow: 1px 24px 32px -13px rgba(34, 60, 80, 0.2);
  }
}
</style>
