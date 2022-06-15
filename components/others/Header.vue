<template>
<div class="container header h-[84px] bg-white dark:dark-shadow  dark:bg-[#1A1D27] absolute mt-[32rem] mb-[26rem] w-full rounded-[24px] px-[36rem]  -640:px-[15px] py-[26px] z-[90]">
  <div class="">
    <div class="">
      <div class="flex-center-between">
        <div class="language-dropdown w-[140px] -640:w-[130px]">
          <div class="flex-center gap-[4rem] relative language-options">
            <Icon name="language_icon" class="w-[24px] h-[20px]" />
            <div class="
                      flex-center
                      gap-[4rem]
                      cursor-pointer
                      group
                    " @click="showLang = !showLang">
              <span class="
                      mr-[4px]
                      ml-[8px]
                        text-[#373A43]
                        dark:text-white
                        dark:opacity-60
                        text-[14px]
                        font-semibold
                        leading-[20rem]
                      ">{{ currentLang }}</span>
              <Icon name="lang_arrow" class="w-[16px] h-[16px] ease-in-out duration-300" :class="{ 'rotate-180': showLang }" />
            </div>

            <transition name="lang">
              <div v-if="showLang" class="
                        language-options
                        transition-all
                        duration-200
                        absolute
                        top-[30rem]
                        w-[150px]
                      ">
                <div class="
                          bg-white
                          border-[1px] border-[#d7d7d780]
                          rounded-[8rem]
                        ">
                  <div v-for="(item, index) in langs" :key="index" class="whitespace-nowrap flex-center gap-[8rem]" :class="{ 'lang-active': showLang }">
                    <nuxt-link :to="switchLocalePath(`${item.short}`)" class="
                              border-b-[1px] border-b-[#d7d7d780]
                              w-full
                              hover:text-[#6D35E1] hover:bg-[#e5e2ec]
                              cursor-pointer
                              transition
                              duration-200
                              whitespace-nowrap
                              flex
                              justify-start
                              gap-[6rem]
                              p-[15rem]
                              text-[#323232] text-[14rem]
                            " :class="{
                              'border-b-[0px]': index === langs.length - 1,
                            }" @click.native="showLang = false">
                            <Icon name="globus_icon" />
                            {{ item.title }}
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </transition>
          </div>

        </div>

        <nuxt-link class="logo-link ]" to="/">
          <Icon class="block " name="logo_light" />
        </nuxt-link>

        <div>
          <ThemeToggler />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ThemeToggler from '@/components/actions/ThemeToggler.vue';

export default {
  components: {
    ThemeToggler
  },
  data() {
    return {
      showLang: false,
      language: false,
      langs: [{
          title: "English",
          icon: "english",
          short: "en",
        },
        {
          title: "Russian",
          icon: "russia",
          short: "ru",
        },
        {
          title: "Uzbek",
          icon: "uzbek",
          short: "uz",
        },
      ],
    }
  },

  computed: {
    currentLang() {
      switch (this.$i18n.locale) {
        case "uz":
          return "O'zbekcha";
        case "ru":
          return "Русский";
        default:
          return "English";
      }
    },
  }
}
</script>

<style lang="scss">
.header {
  // TODO:box-shadow?
  border: 1px solid rgba(17, 20, 45, 0.12);
  // background: #010207;
  // backdrop-filter: blur(118px);
  box-shadow: 3px 19px 62px 36px rgba(227, 230, 236, 0.68);
}
.dark .header {
  box-shadow: 8px 18px 54px 28px rgba(15, 18, 25, 0.66);
}

@media screen and (min-width: 370px) and (max-width: 767px) {
    .header{
      padding-left:15px;
      padding-right:15px;

      .language-dropdown{
        width: 120px;
      }
      .logo-link{
        width: 80px;
      }
    }
}
</style>
