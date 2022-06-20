<template>
<div class="applicants-sub flex gap-[12px]">
  <div :class="subIconBg" class=" sub-icon-wrapper p-[7px] rounded-[24px]">
    <Icon :name="name" class="z-20" />
  </div>

  <div class="sub-numbers-wrapper flex flex-col gap-[1px]">
    <div class="
          sub-numbers
          poppins-font font-semibold
          text-[16px]
          leading-[21px]
          text-white
        ">
      <span> <number ref="number2" :from="0" :to="numbers"  :duration="5" :delay="2" easing="Power1.easeOut" />
      </span> <span>{{ unit }}</span>
      -
      <span> {{ percentage }} %</span>
    </div>
    <p class="
          inter
          text-[12px]
          leading-[16px]
          text-white
          opacity-[0.6]
        ">
      {{ subText }}
    </p>
  </div>
</div>
</template>

<script>
import Icon from '@/components/Icon.vue'
export default {
  components: {
    Icon
  },
  props: {
    subIconBg: {
      type: String,
    },
    name: {
      type: String,
    },
    subText: String,
    numbers: String,
    unit: String,
    percentage: {
      type: String,
    },
  },
  methods:{
      playAnimation() {
            this.$refs.number2.play()
        }
  }
}
</script>
