<template>
<div class="footer bg-[#1A1D27] pt-[32rem] pb-[20rem] text-white">
  <div class="container">
    <div class="footer-top flex items-center">
      <nuxt-link to="/" @click="scrollToTop()" class="inline-block w-[147rem] h-[34rem]">
        <Icon class="logo inline" name="logo_light" />
      </nuxt-link>
      <div class="
            vertical-stick
            mx-[32rem]
            h-[32rem]
            w-[1rem]
            bg-[#808191]
            opacity-20
          "></div>

      <ul class="footer__links flex gap-[24rem]">
        <li>
          <nuxt-link class="
                font-['Poppins]
                text-[16rem]
                leading-[31rem]
                transition
                hover:text-[#6D35E1]
              " to="/">Loyiha haqida
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="
                font-['Poppins]
                text-[16rem]
                leading-[31rem]
                transition
                hover:text-[#6D35E1]
              " to="/news">Yangiliklar
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="
                font-['Poppins]
                text-[16rem]
                leading-[31rem]
                transition
                hover:text-[#6D35E1]
              " to="/">Ommaviy offerta
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div class="
          horizontal-stick
          mt-[28rem]
          mb-[21rem]
          h-[1rem]
          w-full
          bg-[#808191]
          opacity-20
        "></div>

    <div class="footer-bottom flex-center justify-between">
      <p class="reserved font-['Poppins'] text-[13rem] leading-[17rem] opacity-50">“Super 1000” © 2020. <span>Barcha huquqlar himoyalangan.</span></p>

      <div class="footer-socials flex items-center">
        <!-- TODO: Hover -->
        <div class="hero-socials_wrapper flex gap-[9rem] mr-[8rem]">
          <a href="https://www.instagram.com/" target="_blank">
            <Icon name="insta_icon" class="icon" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <Icon name="youtube_icon" />
          </a>
          <a href="https://www.telegram.org/" target="_blank">
            <Icon name="telegram_icon" />
          </a>
        </div>
      </div>
      <div class="made-by flex items-center">
        <p class="mr-[8rem] font-['Poppins] text-[13rem] leading-[17rem] ring-opacity-50">Sayt ishlab chiquvchi:</p>
        <Icon name="uic_icon" class="w-[33rem] h-[17rem] " />
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {

  data() {
    return {}
  },
  computed: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss">
.footer {
  border-top: #80819133 1px solid;

  .made-by {
    transition: 0.5s linear;

    &:hover .icon svg {
      transition: 0.5s linear;
      transform:translateX(20px);
      &:hover {
        transition: 0.5s linear;
      }

    }
  }
}

@media screen and (min-width: 370px) and (max-width: 767px) {

  .footer-top,
  .footer-bottom {
    display: block;
  }

  .footer__links a {
    line-height: 24px;
  }

  .reserved,
  .footer-socials,
  .made-by {
    margin-bottom: 15px;
  }
}
</style>
