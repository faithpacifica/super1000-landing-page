<template>
<div class="pt-[144rem] pb-[87rem] dark:bg-[#1A1D27]">
  <div class="container">
    <div data-aos="fade-left" class="single-news lg:mx-[200rem] sm:mx-[15px]">
      <img  class="
            single-news__img
            rounded-[16rem]
            w-full
            h-[440rem]
            mt-[32rem]
            mb-[16rem]
          " :src="news.image" alt="" />
      <div class="
            single-news__date
            inter
            text-[16rem]
            leading-[21rem]
            text-[#84868C]
            dark:text-[#A3A5A9]
            mb-[8rem]
          ">
           {{ $moment(news.date, "DD.MM.YYYY") }}
      </div>
      <div class="
            single-news__title
            poppins-font font-semibold
            text-[28rem]
            leading-[36rem]
            text-[#373A43]
            dark:text-white
          ">
           {{news.title}}
      </div>
      <div class="horizontal-stick w-full my-[16rem] h-[1rem] bg-[#D9D9D9]"></div>

      <p data-aos="fade-left" class="
            single-news__subtitle
            inter font-medium
            text-[18rem]
            leading-[23rem]
            text-[#373A43]
            dark:text-white
            text-justify
            mb-[16rem]
          ">
        {{news.description}}
      </p>
      <p data-aos="fade-left" class="
            inter
            text-[16rem]
            leading-[22rem]
            text-[#373A43]
            dark:text-white
            text-justify
            mb-[24rem]
          ">
          {{news.details}}
      </p>
      <div class="
            horizontal-stick
            w-full
            mb-[16rem]
            h-[1px]
            bg-[#D9D9D9]
            dark:bg-[#808191]
          "></div>

      <div class="socials-share bg-blue">
        <div class="socials-share__inner flex justify-between items-center ">
          <div class="socials gap-[9rem] flex">
            <!-- insta -->
            <a class="bg-[#808191] hover:bg-[#C013CA]  transition duration-500 ease p-[10px] rounded-[100px]" href="https://instagram.com">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00006 10.4001C9.3256 10.4001 10.4001 9.3256 10.4001 8.00006C10.4001 6.67452 9.3256 5.60002 8.00006 5.60002C6.67452 5.60002 5.60003 6.67452 5.60003 8.00006C5.60003 9.3256 6.67452 10.4001 8.00006 10.4001ZM8.00006 12.0001C10.2092 12.0001 12.0001 10.2092 12.0001 8.00006C12.0001 5.79089 10.2092 4 8.00006 4C5.79089 4 4 5.79089 4 8.00006C4 10.2092 5.79089 12.0001 8.00006 12.0001Z" fill="white" />
                <path d="M12.8002 3.99996C12.8002 4.44179 12.4421 4.79998 12.0002 4.79998C11.5584 4.79998 11.2002 4.44179 11.2002 3.99996C11.2002 3.55813 11.5584 3.19995 12.0002 3.19995C12.4421 3.19995 12.8002 3.55813 12.8002 3.99996Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1999 1.59978H4.79983C3.03249 1.59978 1.59978 3.03249 1.59978 4.79983V11.1999C1.59978 12.9672 3.03249 14.4 4.79983 14.4H11.1999C12.9672 14.4 14.4 12.9672 14.4 11.1999V4.79983C14.4 3.03249 12.9672 1.59978 11.1999 1.59978ZM4.79983 -0.000244141C2.14882 -0.000244141 -0.000244141 2.14882 -0.000244141 4.79983V11.1999C-0.000244141 13.8509 2.14882 16 4.79983 16H11.1999C13.8509 16 16 13.8509 16 11.1999V4.79983C16 2.14882 13.8509 -0.000244141 11.1999 -0.000244141H4.79983Z" fill="white" />
              </svg>
            </a>

            <!-- telegram -->
            <a class="bg-[#808191] hover:bg-[#279FDA]  transition duration-500 ease pt-[11px] pr-[11px] pb-[11px] pl-[10px] rounded-[100px]" href="https://telegram.org">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69185 2.00738C8.25885 2.60341 5.39487 3.83705 1.09992 5.7083C0.402482 5.98564 0.0371355 6.25697 0.00387615 6.52227C-0.0523325 6.97063 0.509146 7.14719 1.27374 7.38761C1.37774 7.42031 1.4855 7.4542 1.59598 7.49011C2.34822 7.73464 3.36012 8.0207 3.88616 8.03207C4.36333 8.04237 4.89591 7.84565 5.48389 7.4419C9.4968 4.73307 11.5683 3.36389 11.6983 3.33438C11.7901 3.31355 11.9172 3.28737 12.0034 3.36394C12.0895 3.44051 12.0811 3.58551 12.0719 3.62441C12.0163 3.86154 9.81229 5.91059 8.67171 6.97098C8.31614 7.30155 8.06392 7.53604 8.01236 7.58959C7.89686 7.70956 7.77914 7.82303 7.66601 7.9321C6.96716 8.60579 6.44309 9.111 7.69503 9.93601C8.29666 10.3325 8.77808 10.6603 9.25837 10.9874C9.78289 11.3446 10.306 11.7009 10.9829 12.1446C11.1554 12.2576 11.3201 12.375 11.4805 12.4894C12.0909 12.9246 12.6393 13.3155 13.3168 13.2532C13.7105 13.217 14.1172 12.8468 14.3237 11.7427C14.8118 9.13349 15.7712 3.48009 15.9929 1.15046C16.0123 0.946358 15.9879 0.685144 15.9682 0.570477C15.9486 0.455809 15.9076 0.292432 15.7586 0.171489C15.582 0.0282566 15.3095 -0.00194814 15.1877 9.46267e-05C14.6335 0.00996039 13.7834 0.30558 9.69185 2.00738Z" fill="white" />
              </svg>

            </a>

            <!-- facebook -->
            <a class="bg-[#808191] hover:bg-[#0269E3] inline-block  transition duration-500 ease px-[13px] pt-[8px] pb-[6px] rounded-[100px]" href="https://facebook.com">
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.57422 9.35005L9.00082 6.59921H6.33352V4.8141C6.33352 4.06152 6.70612 3.32794 7.90072 3.32794H9.11332V0.985893C9.11332 0.985893 8.01292 0.800049 6.96082 0.800049C4.76422 0.800049 3.32842 2.11758 3.32842 4.50267V6.59921H0.886719V9.35005H3.32842V16H6.33352V9.35005H8.57422Z" fill="white" />
              </svg>

            </a>

            <!-- twitter -->
            <a class="bg-[#808191] hover:bg-[#1C96E8]  transition duration-500 ease py-[11px]  px-[9px] rounded-[100px]" href="https://twitter.com">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7199 3.2146C13.729 3.33812 13.729 3.46167 13.729 3.5852C13.729 7.35283 10.7595 11.694 5.33204 11.694C3.65995 11.694 2.10666 11.2264 0.800049 10.4146C1.03762 10.4411 1.26603 10.4499 1.51274 10.4499C2.89242 10.4499 4.16249 9.99992 5.17671 9.23227C3.87924 9.20579 2.79193 8.3852 2.4173 7.25578C2.60006 7.28224 2.78278 7.29989 2.97468 7.29989C3.23965 7.29989 3.50464 7.26458 3.75133 7.20285C2.39905 6.93812 1.3848 5.79107 1.3848 4.40578V4.3705C1.77768 4.58226 2.23457 4.71462 2.7188 4.73224C1.92387 4.22047 1.40308 3.34695 1.40308 2.35871C1.40308 1.8293 1.54925 1.34401 1.8051 0.920477C3.2579 2.64989 5.44168 3.77928 7.89039 3.90283C7.84471 3.69107 7.81729 3.4705 7.81729 3.24991C7.81729 1.6793 9.13304 0.399902 10.7686 0.399902C11.6183 0.399902 12.3858 0.744019 12.9249 1.2999C13.5919 1.17638 14.2315 0.938131 14.798 0.611669C14.5787 1.27345 14.1127 1.82933 13.5006 2.18225C14.0945 2.12051 14.6701 1.96165 15.2 1.74109C14.7981 2.30577 14.2955 2.80869 13.7199 3.2146Z" fill="white" />
              </svg>
            </a>
          </div>

          <div class="socials-link flex items-center bg-[#F7F8FA] dark:bg-[#2B2F3A] rounded-[6px]">
            <div v-if="windowLocation" class="px-[8px]">
              <div class=" min-w-[222rem] inter text-[#708195] dark:text-[#ffffff99] leading-[20rem] text-[14rem] bg-transparent">
                {{ windowLocation }}
              </div>
            </div>
            <!-- class="dark:stroke-[#FFCE73] stroke-[#6D35E1]" -->

            <button @click="copyUrl()" class=" relative transition duration-500  copy-button p-[8px] bg-[#E9E5F7] dark:bg-[#3C3C3F]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="dark:stroke-[#FFCE73] stroke-[#6D35E1]" d="M14.9998 6.66675H8.33317C7.4127 6.66675 6.6665 7.41294 6.6665 8.33341V15.0001C6.6665 15.9206 7.4127 16.6667 8.33317 16.6667H14.9998C15.9203 16.6667 16.6665 15.9206 16.6665 15.0001V8.33341C16.6665 7.41294 15.9203 6.66675 14.9998 6.66675Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                <path class="dark:stroke-[#FFCE73] stroke-[#6D35E1]" d="M13.3335 6.66659V4.99992C13.3335 4.55789 13.1579 4.13397 12.8453 3.82141C12.5328 3.50885 12.1089 3.33325 11.6668 3.33325H5.00016C4.55814 3.33325 4.13421 3.50885 3.82165 3.82141C3.50909 4.13397 3.3335 4.55789 3.3335 4.99992V11.6666C3.3335 12.1086 3.50909 12.5325 3.82165 12.8451C4.13421 13.1577 4.55814 13.3333 5.00016 13.3333H6.66683" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div v-if="copied" class="tooltip-customed absolute bg-black  dark:bg-white p-[6px] ease-linear transition duration-500  rounded-[4px] text-white dark:text-black top-[-45px] right-0">
                <!-- Nusxalandi -->
                  {{ $t('copied')}}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import data from '~/assets/data.js'

export default {
 props:{
    title: String,
    image: String,
    description:String,
    details:String,
    slug:String,
  date: {
    type: String,
    default: null,
    },
  },
  data() {
    return {
      windowLocation: '',
      copied: false,
      // date:new Date(),
      news: data.find(item => item.slug === this.$route.params.slug),
    };
  },
  mounted() {
    this.windowLocation = window.location.href;
  },
  methods: {
    copyUrl() {
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.value = window.location.href;
      input.select();
      input.focus();
      document.execCommand('copy');
      input.remove();
      this.copied = true;

      setTimeout(() => {
        this.copied = false;
      }, 1800);
    }
  }
}
</script>

<style lang="scss">
.single-news__img {
  border: 1px solid rgba(17, 20, 45, 0.12);
  object-fit: cover;
  object-position: center;
}

.copy-button {
  background-color: rgba(109, 53, 225, 0.1);
  border-radius: 0 6px 6px 0;
}

.tooltip-customed {
  transition: all 0.3s ease-in-out;

  &::after {
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    content: '';
    border: 8px solid transparent;
    border-top-color: black;
    left: 60%;
  }
}

.dark .tooltip-customed::after {
  border-top-color: white;
}

@media screen and (min-width: 370px) and (max-width: 500px) {
  .socials-share__inner {
    flex-direction: column;
    justify-content: center;
  }

  .socials {
    margin-bottom: 20px;
  }
}
</style>
