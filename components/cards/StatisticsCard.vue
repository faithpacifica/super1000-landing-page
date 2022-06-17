<template>
<div class="transition applicants-main flex items-center">
  <div :class="iconRounded" class="
          p-[6px] rounded-[18px] mr-[20px] ">
    <div :class="iconBg" class="main-icon-wrapper
            p-[7px] rounded-[13px]">
      <Icon :name="name" />
    </div>

  </div>
  <div class="applicants-main__info">
    <div class="numbers">
      <div class=" font-['Poppins'] font-bold text-[40rem] leading-[52rem] text-white">
        <span>
          <number ref="number1" :from="0" :to="numbers"  :duration="5" :delay="2" easing="Power1.easeOut" />
         </span>
          <!-- {{numbers}} -->
         <span> {{unit}}</span>
      </div>
      <p class="font-['Inter'] text-[16rem] leading-[21rem] text-white">{{text}}</p>
    </div>
  </div>
</div>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  components: {
    Icon
  },
  props: {
    iconRounded: {
      type: String,
    },
    iconBg: {
      type: String,
    },
    name: {
      type: String
    },
    text: String,
    numbers: String,
    unit: String
  },
  methods:{
      playAnimation() {
            this.$refs.number1.play()
        }
  }
}
</script>
