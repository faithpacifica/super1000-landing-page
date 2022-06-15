<template >
  <div
    class="
      advantage-card
      relative
      flex flex-col
      bg-white
      dark:bg-[#1A1D27]
      rounded-[24px]
      px-[28px]
      pt-[28px]
      pb-[24px]
    "
  >
    <Icon :name="name" class="mb-[20px] w-[56px] h-[56px]" />

    <h5
      class="
        mb-[8px]
        font-['Poppins'] font-semibold
        text-[#1A1C21] dark:text-white text-[20px]
        leading-[24px]
        line-clamp-1
      "
    >
      {{ title }}
    </h5>
    <p class="text-[#373A43] dark:text-[#ffffff99] text-[14px] leading-[19px] font-['Inter']   line-clamp-2">
      {{ text }}
    </p>
  </div>
</template>
<script>
import Icon from '@/components/Icon.vue'
export default {
  components: { Icon },
  props: {
    name: {
      type: String,
    },
    title: String,
    text: String,
  },
}
</script>
<style lang="scss">
.advantage-card {
  &::after{
    content: '';
    position: absolute;
    width: 3px;
    background-color:#ffce73 ;
    height: 56px;
    left: -2px;
    top: 30px;
  }

  transition: 0.3s ease;
  border: 1.6px solid transparent;
  &:hover {
    cursor: pointer;
    border: 1.6px solid #ffce73;
    box-shadow: 0 13px 50px rgba(55, 58, 67, 0.09),
      0 6px 80px rgba(255, 206, 115, 0.2);
    border-radius: 24px;
    &::after{
      width: 0;
    }
  }
}
</style>