<template >
  <button class="mouse-wrapper  dark:bg-[#1b1d2366] dark:border-[#1A1D27] dark:border dark:border-solid py-[13rem] px-[24rem] ">
  <div class="mouse-wrapper__inner flex items-center">
      <svg
    class="mr-[8px]"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
      id="mouse"
        opacity="0.4"
        d="M8 9.33333C8 6.38781 10.3878 4 13.3333 4H18.6667C21.6122 4 24 6.38781 24 9.33333V22.6667C24 25.6122 21.6122 28 18.6667 28H13.3333C10.3878 28 8 25.6122 8 22.6667V9.33333Z"
        stroke="#708195"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
      id="wheel"
        d="M15.9999 9.33331V14.6666"
        stroke="#708195"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <div class="flex flex-col poppins-font flex-start">
      <span class="text-[#708195] dark:text-[#60667C] text-[12px] leading-[16px]">Sichqonchani</span>
      <span class="font-semibold text-[#1A1C21] dark:text-white text-[16px] leading-[24px]">pastga suring</span>
    </div>
  </div>
  </button>
</template>
<script>
export default {}
</script>
<style lang="scss">
.mouse-wrapper {
  cursor: pointer;
background:rgba(227, 230, 236, 0.5);
border: 1px solid #FFF;
backdrop-filter: blur(20px);
border-radius: 40px;
// TODO:bg galati berilvotti 2 xil qanday quyaman


// Mouse scroll down animation
@keyframes scroll {
	0% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(20%);
	}
}

svg #wheel {
	animation: scroll ease-in-out 1s infinite;
}
}
</style>