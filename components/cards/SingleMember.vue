<template>
<div :class="name == 'Aziz Halikov' ? 'single-member relative bg-white dark:bg-[#2B2F3A] overflow-hidden rounded-[16rem]   w-[224px] h-[200px]': 'single-member relative bg-white dark:bg-[#2B2F3A] overflow-hidden rounded-[16rem]  w-[224px] h-[200px]' ">

  <img v-if="name == 'Aziz Halikov'" class="z-5 absolute bottom-0 left-0 right-[10rem]" src="@/assets/images/aziz-shadow.png">
  <img v-else class="z-5 absolute bottom-0 left-0 right-0" src="@/assets/images/member-shadow.png">

  <img :class="name == 'Aziz Halikov' ? 'z-7 absolute bottom-0 left-[4rem] right-[4rem]' : 'z-7 absolute bottom-0 left-[11rem] right-[11rem]'" :src="image" alt="photo member">

  <div class="absolute bottom-[8rem] left-[8rem] right-[8rem] z-10  card-info text-white rounded-[12rem] text-center py-[8rem]">
    <h6 class="font-['Poppins'] font-semibold text-[16rem] leading-[21rem]">{{name}}</h6>
    <p class="single-member__position font-['Inter'] text-[12px] leading-[15px]">{{position}}</p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    image: String,
    name: String,
    position: String
  }
}
</script>

<style lang="scss">
.single-member {
  border: 0.6px solid rgba(17, 20, 45, 0.12);
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;

    .card-info {
      transition: 0.3s ease;
      background-color: rgba(109, 53, 225, 0.7);
      // backdrop-filter: blur(29.6296px);
    }
  }

  .card-info {
    background: rgba(132, 134, 140, 0.4);
    backdrop-filter: blur(29.6296px);

    .single-member__position {
      color: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>
