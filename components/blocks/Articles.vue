<template>
  <div class="articles py-[64px] dark:bg-[#1A1D27]">
    <div class="container">
      <div class="section-top flex items-center justify-between mb-[28rem]">
        <SectionTitle class="dark:text-white" :title="$t('articles.title')" />

        <nuxt-link class="all-news flex items-center" :to="localePath('/news')">
          <!-- to="/news" -->
          <span
            class="text-[20rem] leading-[26rem] font-medium poppins-font text-[#84868C]"
          >
            <!-- Barcha yangiliklar -->
            {{ $t('articles.all_news') }}
          </span>
          <Icon
            name="arrow_right"
            class="arrow_right w-[24px] ml-[4px] h-[24px] font-[#84868C]"
          />
        </nuxt-link>
      </div>

      <div
        class="article-cards grid lg:grid-cols-12 md:grid-cols-2 gap-[25rem] md:justify-center sm:justify-center"
      >
        <SingleArticle
          v-for="(item, index) in news.slice(0, showedCount)"
          :key="index"
          class="single-article lg:col-span-4 w-[379rem] h-[330rem]"
          v-bind="{
            title: item.title,
            image: item.image,
            slug:item.slug
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '~/components/common/SectionTitle.vue'
import SingleArticle from '@/components/cards/SingleArticle.vue'
import data from '~/assets/data.js'
export default {
  components: {
    SectionTitle,
    SingleArticle,
  },
  data() {
    return {
      // news: data.find(item => item.slug === this.$route.params.slug),
      showedCount: 3,
      news:data,
      // mainNews: [
      //   {
      //     title: 'Insider kim',
      //     image: require('@/assets/images/news-1.jpg'),
      //   },
      //   {
      //     title: 'Savdo robot nima?',
      //     image: require('@/assets/images/news-2.jpg'),
      //   },
      //   {
      //     title: 'Reinvestitsiya',
      //     image: require('@/assets/images/news-3.jpg'),
      //   },
      //   {
      //     title: 'Taniqli treyderlar 10taligi',
      //     image: require('@/assets/images/news-4.jpg'),
      //   },
      //   {
      //     title: 'Hedjlash',
      //     image: require('@/assets/images/news-5.jpg'),
      //   },
      //   {
      //     title: 'Scalping',
      //     image: require('@/assets/images/news-6.jpg'),
      //   },
      //   {
      //     title: 'Market-meykerlar',
      //     image: require('@/assets/images/news-7.jpg'),
      //   },
      // ],
    }
  },
  methods: {

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

@media screen and (min-width: 370px) and (max-width: 1024px) {
  .article-cards {
    justify-content: center;
  }
}
@media screen and (min-width: 451px) and (max-width: 650px) {
  .single-article {
    min-width: 450px;
    min-height: 250px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
@media screen and (min-width: 370px) and (max-width: 450px) {
  .single-article {
    min-width: 350px;
    min-height: 225px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
</style>
