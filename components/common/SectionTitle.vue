<template>
    <h4 class="poppins-font font-semibold text-[32rem] leading-[41.5rem] tracking-[.5px] " :class="color">
      {{ title }}
    </h4>
</template>

<script>
export default {
  props: {
    title: String,
    color: {
      type: String,
    },

  },
};
</script>

<style lang="scss">
.color{
  color: #373A43;
}

</style>