<template>
<div class="articles py-[64px] dark:bg-[#1A1D27]">
  <div class="container">
    <div class="section-top flex items-center justify-between mb-[28rem]">
      <SectionTitle class="dark:text-white" :title="'Sohaga doir maqolalar'" />

      <nuxt-link class="all-news flex items-center" :to="localePath('/news')"  >
      <!-- to="/news" -->
        <span class="
              text-[20rem]
              leading-[26rem]
              font-medium font-['Poppins']
              text-[#84868C]
            ">Barcha yangiliklar</span>
        <Icon name="arrow_right" class="arrow_right w-[24px] ml-[4px] h-[24px] font-[#84868C]" />
      </nuxt-link>
    </div>

    <div data-aos="fade-left" class="article-cards grid lg:grid-cols-12 md:grid-cols-2  gap-[25rem] md:justify-center sm:justify-center ">
      <SingleArticle
      v-for="(item, index) in articles"
      :key="index"
      class="lg:col-span-4  w-[379rem] h-[330rem]  "
      v-bind=" {
        text: item.text,
      image:item.image }"
       />
    </div>

  </div>
</div>
</template>

<script>
import SectionTitle from '~/components/common/SectionTitle.vue'
import SingleArticle from '@/components/cards/SingleArticle.vue'
export default {
  components: {
    SectionTitle,
    SingleArticle,
  },
  data() {
    return {
      articles: [{
          image: require('@/assets/images/article-1.jpg'),
          text: 'O‘quvchilarimiz natijalari.',
        },
        {
          image: require('@/assets/images/article-2.jpg'),
          text: 'Eng faol o‘qivchi uchun Mclaren.',
        },
        {
          image: require('@/assets/images/article-3.jpg'),
          text: 'Loyihaning yopilish marosimi.',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.arrow_right svg {
  width: 24px;
  height: 24px;
}

.all-news {
  transition: 0.3s ease;

  &:hover {
    .arrow_right {
      transition: 0.3s ease;
      transform: translateX(10px);
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 1024px) {
  .article-cards{
    justify-content: center;
  }
}
</style>
