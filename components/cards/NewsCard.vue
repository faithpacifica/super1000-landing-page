<template>
    <!-- to="/news/_slug" -->
  <nuxt-link
  :to="localePath('/news/_slug')"
    class="
      news-card
      flex flex-col
      px-[16rem]
      pt-[16rem]
      pb-[20rem]
      bg-white
      dark:bg-[#1A1D27]
      border border-solid
      dark:border-[#ffffff1f]
      rounded-[20rem]
    "
  >
    <img
      class="news-card__img rounded-[12rem] mx-auto mb-[16rem] w-[347rem] h-[220rem]"
      src="@/assets/images/article-2.jpg"
      alt=""
    />
    <div>
      <p
        class="
          news-card__date
          inter
          text-[16rem]
          leading-[21rem]
          text-[#84868C]
          dark:text-[#A3A5A9]
          mb-[8rem]
        "
      >
     {{ $moment(date, "DD.MM.YYYY") }}
      </p>
      <div
        class="
          news-card__title
          poppins-font font-semibold
          text-[20rem]
          leading-[26rem]
          text-[#373A43]
          dark:text-white
          mb-[8rem]
        "
      >
        Eng faol o‘qivchilardan biri uchun yangi Mclaren
      </div>

      <p
        class="
          news-card__text
          inter
          text-[16rem]
          leading-[21rem]
          text-[#373A43]
          dark:text-white
          mb-[16rem]
        "
      >
        Loyiha ishtirokchilari orasidan, eng faollari saralab olinadi, va ular
        Mclarenni qo‘lga kiri...
      </p>
      <nuxt-link class="more flex items-center"   :to="localePath('/news/_slug')"   >
        <!-- to="/news/_slug" -->
        <span
          class="
            text-[16rem]
            inline-block
            leading-[20rem]
            inter
            text-[#84868C]
            dark:text-[#A3A5A9]
            transition
            dark:hover:!text-[#FFCE73]
          "
          >
          <!-- Batafsil -->
          {{ $t('more')}}
        </span>

        <Icon
          name="more"
          class="arrow_right_gray self-baseline ml-[4rem] transition"
        />
      </nuxt-link>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props:{
 date: {
      type: String,
      default: null,
    },
  },

}
</script>

<style lang="scss">
.news-card {
  border: 1px solid rgba(17, 20, 45, 0.12);
  transition: 0.3s ease;

  .more i svg path {
    stroke: #84868c;
  }

  &:hover {
    border: 1px solid rgba(109, 53, 225, 0.6);
    box-shadow: 0 13px 50px rgba(55, 58, 67, 0.09),
      0 6px 80px rgba(109, 53, 225, 0.1);

    .more span {
      color: #6d35e1;
    }

    .more i svg path {
      stroke: #6d35e1;
    }
  }

  &__img {
    border: 1px solid rgba(17, 20, 45, 0.12);
  }

  .more {
    transition: 0.3s ease;

    &:hover .arrow_right_gray {
      transform: translateX(10px);
    }
  }
}

.dark .news-card:hover {
  .more span {
    color: #ffce73;
  }

  .more i svg path {
    stroke: #ffce73;
  }
}

</style>
