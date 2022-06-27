<template>
<section id="owner" class="about-owner bg-white dark:bg-[#1A1D27] pt-[64rem]">
  <div class="container">
    <div class="wrapper flex justify-between gap-[78rem]">
      <div class="owner-speech flex flex-col max-w-[680rem]">
        <h4 class="
              text-[#6D35E1]
              dark:text-white
              poppins-font
              font-semibold
              text-[28rem]
              leading-[36rem]
              mb-[16rem]
            ">
               {{ $t('owner.title') }}
          <!-- Aziz do‘stlar! -->
        </h4>
        <div class="
              speech
              poppins-font
              text-[18px]
              leading-[27px]
              text-[#353535]
              dark:text-[#ffffff99]
              -1000:text-red
            ">
          <p data-aos="fade-left" class="mb-[10rem] poppins-font">
                  {{ $t('owner.text_one')}}
          </p>
          <p data-aos="fade-left" class="mb-[10rem] poppins-font">
                  {{ $t('owner.text_two')}}
          </p>
          <p data-aos="fade-left" class="poppins-font">
                  {{ $t('owner.text_three')}}
          </p>
        </div>
        <div class="
              horizontal-stick
              mt-[24px]
              mb-[33px]
              h-[1px]
              w-full
              bg-[#E1E2E6]
            "></div>

        <!-- GET IN TOUCH -->
        <div class="get-in-touch flex items-center justify-between">
          <div class="flex">
            <div class="flex flex-col mr-[57rem]">
              <p class="owner-name
                    font-bold poppins-font
                    text-[24px]
                    leading-[31rem]
                    text-[#353535]
                    dark:text-white
                  ">
                Aziz Halikov
              </p>
              <p class="
                    inter
                    text-[16px]
                    leading-[21px]
                    text-[#737890]
                    dark:text-[#ffffff99]
                  ">
                <!-- Loyiha asoschisi -->
                  {{ $t('owner.founder')}}
              </p>
            </div>

            <!-- SIGNITURE TODO: -->
          <Icon v-if="dark" class=" inline" name="sign_dark" />
          <Icon v-else class="inline" name="sign_light" />
          </div>

          <div class="owner-socials flex gap-[9rem]">
            <a class="
                owner-socials__link
                socials-tooltip
                relative
                  flex
                  items-center
                  bg-[#F4EFFD]
                  hover:text-white
                  hover:bg-[#6D35E1]
                  dark:bg-[#6d35e13b]
                  dark:hover:bg-[#8f7cb43b]
                  transition
                  duration-300
                  rounded-[20px]
                  p-[8rem]
                  pr-[12rem]
                " href="http://telegram.org" target="_blank">

              <div class="icons text-[20rem] mr-[4rem]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="dark:fill-[#fff] fill-[#fff] transition duration-500 " fill-rule="evenodd" clip-rule="evenodd" d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10.4324 7.50461C9.53678 7.87713 7.7468 8.64816 5.06245 9.81768C4.62655 9.99103 4.39821 10.1606 4.37742 10.3264C4.34229 10.6066 4.69322 10.717 5.17109 10.8673C5.23609 10.8877 5.30344 10.9089 5.37249 10.9313C5.84264 11.0841 6.47507 11.2629 6.80385 11.27C7.10208 11.2765 7.43494 11.1535 7.80243 10.9012C10.3105 9.20817 11.6052 8.35243 11.6865 8.33399C11.7438 8.32097 11.8233 8.30461 11.8771 8.35246C11.931 8.40032 11.9257 8.49094 11.92 8.51526C11.8852 8.66346 10.5077 9.94412 9.79482 10.6069C9.57259 10.8135 9.41495 10.96 9.38272 10.9935C9.31054 11.0685 9.23697 11.1394 9.16626 11.2076C8.72948 11.6286 8.40193 11.9444 9.18439 12.46C9.56041 12.7078 9.8613 12.9127 10.1615 13.1171C10.4893 13.3404 10.8163 13.563 11.2393 13.8404C11.3471 13.911 11.4501 13.9844 11.5503 14.0559C11.9318 14.3279 12.2746 14.5722 12.698 14.5332C12.9441 14.5106 13.1982 14.2792 13.3273 13.5892C13.6324 11.9584 14.232 8.42506 14.3706 6.96904C14.3827 6.84147 14.3674 6.67821 14.3552 6.60655C14.3429 6.53488 14.3173 6.43277 14.2241 6.35718C14.1138 6.26766 13.9435 6.24878 13.8673 6.25006C13.521 6.25623 12.9896 6.44099 10.4324 7.50461Z" fill="currentColor" />
                </svg>
              </div>
              <span class="
                    font-medium
                    text-[14px]
                    hover:text-white
                    leading-[18px]
                    dark:text-white
                  ">@azizhalikov</span>
            </a>

            <a class="
                owner-socials__link
                socials-tooltip
                relative
                  flex
                  items-center
                  hover:text-white
                  bg-[#F4EFFD]
                  hover:bg-[#6D35E1]
                  dark:bg-[#6d35e13b]
                    dark:hover:bg-[#8f7cb43b]
                  transition
                  duration-300
                  rounded-[20rem]
                  p-[8rem]
                  pr-[12rem]
                " href="https://www.instagram.com/" target="_blank">

              <div class="icons text-[20rem] mr-[4rem]">

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="dark:fill-[#fff] fill-[#6D35E1] transition duration-500 " d="M10 11.75C9.0625 11.75 8.25 11 8.25 10C8.25 9.0625 9 8.25 10 8.25C10.9375 8.25 11.75 9 11.75 10C11.75 10.9375 10.9375 11.75 10 11.75Z" fill="currentColor" />
                  <path class="dark:fill-[#fff] fill-[#6D35E1] transition duration-500 " fill-rule="evenodd" clip-rule="evenodd" d="M12.125 5.75H7.875C7.375 5.8125 7.125 5.875 6.9375 5.9375C6.6875 6 6.5 6.125 6.3125 6.3125C6.16413 6.46087 6.09403 6.60923 6.0093 6.78856C5.98697 6.83583 5.96356 6.88537 5.9375 6.9375C5.92783 6.9665 5.91667 6.99701 5.9047 7.0297C5.83932 7.20833 5.75 7.45235 5.75 7.875V12.125C5.8125 12.625 5.875 12.875 5.9375 13.0625C6 13.3125 6.125 13.5 6.3125 13.6875C6.46087 13.8359 6.60923 13.906 6.78857 13.9907C6.83587 14.013 6.88532 14.0364 6.9375 14.0625C6.96651 14.0722 6.99701 14.0833 7.0297 14.0953C7.20833 14.1607 7.45235 14.25 7.875 14.25H12.125C12.625 14.1875 12.875 14.125 13.0625 14.0625C13.3125 14 13.5 13.875 13.6875 13.6875C13.8359 13.5391 13.906 13.3908 13.9907 13.2114C14.013 13.1641 14.0364 13.1147 14.0625 13.0625C14.0722 13.0335 14.0833 13.003 14.0953 12.9703C14.1607 12.7917 14.25 12.5476 14.25 12.125V7.875C14.1875 7.375 14.125 7.125 14.0625 6.9375C14 6.6875 13.875 6.5 13.6875 6.3125C13.5391 6.16413 13.3908 6.09403 13.2114 6.0093C13.1642 5.98699 13.1146 5.96354 13.0625 5.9375C13.0335 5.92783 13.003 5.91667 12.9703 5.9047C12.7917 5.83931 12.5477 5.75 12.125 5.75ZM10 7.3125C8.5 7.3125 7.3125 8.5 7.3125 10C7.3125 11.5 8.5 12.6875 10 12.6875C11.5 12.6875 12.6875 11.5 12.6875 10C12.6875 8.5 11.5 7.3125 10 7.3125ZM13.375 7.25C13.375 7.59518 13.0952 7.875 12.75 7.875C12.4048 7.875 12.125 7.59518 12.125 7.25C12.125 6.90482 12.4048 6.625 12.75 6.625C13.0952 6.625 13.375 6.90482 13.375 7.25Z" fill="currentColor" />
                  <path class="dark:fill-[#fff] fill-[#6D35E1] transition duration-500 " fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM7.875 4.8125H12.125C12.6875 4.875 13.0625 4.9375 13.375 5.0625C13.75 5.25 14 5.375 14.3125 5.6875C14.625 6 14.8125 6.3125 14.9375 6.625C15.0625 6.9375 15.1875 7.3125 15.1875 7.875V12.125C15.125 12.6875 15.0625 13.0625 14.9375 13.375C14.75 13.75 14.625 14 14.3125 14.3125C14 14.625 13.6875 14.8125 13.375 14.9375C13.0625 15.0625 12.6875 15.1875 12.125 15.1875H7.875C7.3125 15.125 6.9375 15.0625 6.625 14.9375C6.25 14.75 6 14.625 5.6875 14.3125C5.375 14 5.1875 13.6875 5.0625 13.375C4.9375 13.0625 4.8125 12.6875 4.8125 12.125V7.875C4.875 7.3125 4.9375 6.9375 5.0625 6.625C5.25 6.25 5.375 6 5.6875 5.6875C6 5.375 6.3125 5.1875 6.625 5.0625C6.9375 4.9375 7.3125 4.8125 7.875 4.8125Z" fill="currentColor" />
                </svg>
              </div>

              <span class="
                    font-medium
                    text-[14px]
                    hover:text-white
                    leading-[18px]
                    dark:text-white
                  ">@a.halikov</span>
            </a>
          </div>
        </div>
      </div>

      <div class="owner-image max-w-[412px] w-full h-full max-h-[540px]">
        <img src="@/assets/images/owner.png" alt="" />
      </div>

    </div>
  </div>
</section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
computed: {
      ...mapGetters(['dark']),
    },

}
</script>

<style lang="scss">
.icons path {
  fill: #6d35e1;
}

.owner-socials__link:hover {
  svg path {
    fill: white;
  }
}


// RESPONSIVE
@media screen and (min-width: 370px) and (max-width: 640px) {
  .owner-name{
    font-size: 20px;
    line-height:27px;
  }
}

@media screen and (min-width: 370px) and (max-width: 887px) {
  .about-owner {
    .wrapper {
      display: block;

      .owner-speech {
        max-width: unset;
      }

      .owner-image {
        margin-top: 20px;
        height: 300px;
        max-height: unset;
        max-width: unset;

        img {
          text-align: center;
          height: 300px;
          width: auto;
          max-width: unset;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
}

@media screen and (min-width: 370px) and (max-width: 540px) {
  .get-in-touch {
    display: block;
  }
.owner-speech h4{
  font-size:21.36px;
}
  .owner-socials {
    margin-top: 15px;
  }
  .speech{
    font-size:15px;
    line-height: 23px;
  }
}
</style>
