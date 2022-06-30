<template>
<nuxt-link :to="localePath(`/news/${slug}`)" class="transition single-article relative p-[20px] rounded-[24px] ">
  <img class="absolute z-3 top-0 left-0 right-0 bottom-0 rounded-[24px] w-full h-full object-cover object-center" :src="image" alt="image">
  <div class="box-shadow"></div>
  <div class="text-box z-10 absolute left-[20px] bottom-[20px] right-[20px]">

    <p class="article-text transition-all duration-300 poppins-font flex flex-col justify-self-end font-semibold text-[20rem] leading-[26rem] text-white  translate-y-[26px]">
      {{title}}
    </p>

    <nuxt-link class="more opacity-0  flex items-center "  :to="localePath(`/news${slug}`)"  >
     <!-- to="news/_slug" -->
      <span class="text-[16rem] inline-block leading-[20rem] poppins-font text-white">
        <!-- Batafsil -->
          {{ $t('more')}}
        </span>
      <Icon name="more" class="arrow_right self-baseline ml-[4px] transition" />
    </nuxt-link>
  </div>
</nuxt-link>
</template>

<script>

export default {
  props: {
    title: String,
    image: String,
    slug:String
  },
  data() {
    return {
      // news: data,
    }
  }
}
</script>

<style lang="scss">
.single-article {
  border: 1px solid rgba(17, 20, 45, 0.12);
  transition: 0.4s ease-in-out;

  &:hover {
    transition:0.3s ease;
    transform: translateY(-5px);

    .box-shadow {
      cursor: pointer;
      background-image: linear-gradient(180deg, rgba(109, 53, 225, 0.4) -10.61%, rgba(109, 53, 225, 0.88) 78.77%, #6D35E1 100%) !important;
    }
    .arrow_right {
      transform: translateX(10px);
    }
    .article-text{
      transform: translateY(-5px);
      transition: 0.3s ease-in;
    }
  }

  &:hover .more {
    opacity: 1;
    transition: 0.3s ease;
  }

  .box-shadow {
    position: absolute;
    background-image: linear-gradient(180deg, rgba(109, 53, 225, 0) 4.85%, #6D35E1 113.18%) !important;
    background-size: cover;
    z-index: 7;
    top: 0;
    right: 0;
    left: 0;
    bottom: -1px;
    border-radius: 24px;
  }

  .more {
    transition: 0.3s ease;

    &:hover .arrow_right {
      transform: translateX(10px);
    }
  }
}
</style>
