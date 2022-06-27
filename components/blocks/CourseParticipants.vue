<template>
  <div
    class="py-[32px] bg-[#F7F8FA] dark:bg-[#2B2F3A] overflow-hidden max-w-[1640px] mx-auto"
  >
    <SectionTitle
      class="mb-[22rem] text-center dark:text-white"
      :title="$t('participants_title')"
    />

    <div class="participants-carousel relative">
      <div class="marquee">
        <div class="marquee-content">
          <div
            class="marquee-item max-w-[100px] cursor-pointer relative"
            v-for="(item, i) in faces"
            :key="i"
          >
            <img
              class="max-w-[100px] max-h-[100px] w-full h-full"
              :src="item.image"
            />

            <!-- TOOLTIP -->
            <div
              class="tooltip opacity-0 absolute top-[-30px] left-[20px] z-40 flex justransition duration-500 ease-in-out bg-[#020B09] rounded-[8px] p-[8px] w-[188px] h-[52px]"
            >
              <img
                class="max-w-[36px] max-h-[36px] w-full h-full mr-[8px]"
                :src="item.image"
              />
              <a
                href="https://instagram.com"
                target="_blank"
                class="flex flex-col"
              >
                <p
                  class="text-white font-medium text-[14px] leading-[18px] line-clamp-1"
                >
                  {{ item.name }}
                </p>
                <div class="flex items-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.0166 0.632812C5.28293 0.632812 5.06554 0.64016 4.38467 0.671227C3.70522 0.702216 3.24117 0.810136 2.83513 0.96795C2.41536 1.13106 2.05937 1.34933 1.70446 1.70421C1.34958 2.05912 1.1313 2.41511 0.968195 2.83489C0.81038 3.24093 0.702465 3.70497 0.671475 4.38442C0.640409 5.06529 0.633057 5.28268 0.633057 7.01636C0.633057 8.75001 0.640409 8.96739 0.671475 9.64827C0.702465 10.3277 0.81038 10.7918 0.968195 11.1978C1.1313 11.6176 1.34958 11.9736 1.70446 12.3285C2.05937 12.6834 2.41536 12.9016 2.83513 13.0648C3.24117 13.2225 3.70522 13.3305 4.38467 13.3615C5.06554 13.3925 5.28293 13.3999 7.0166 13.3999C8.75025 13.3999 8.96763 13.3925 9.6485 13.3615C10.328 13.3305 10.792 13.2225 11.198 13.0648C11.6178 12.9016 11.9738 12.6834 12.3287 12.3285C12.6836 11.9736 12.9019 11.6176 13.065 11.1978C13.2228 10.7918 13.3307 10.3277 13.3617 9.64827C13.3928 8.96739 13.4001 8.75001 13.4001 7.01636C13.4001 5.28268 13.3928 5.06529 13.3617 4.38442C13.3307 3.70497 13.2228 3.24093 13.065 2.83489C12.9019 2.41511 12.6836 2.05912 12.3287 1.70421C11.9738 1.34933 11.6178 1.13106 11.198 0.96795C10.792 0.810136 10.328 0.702216 9.6485 0.671227C8.96763 0.64016 8.75025 0.632812 7.0166 0.632812ZM7.0166 1.78299C8.72106 1.78299 8.92296 1.78951 9.59608 1.82022C10.2185 1.8486 10.5565 1.95259 10.7814 2.04001C11.0794 2.15582 11.292 2.29414 11.5154 2.51754C11.7388 2.7409 11.8771 2.95355 11.9929 3.25152C12.0803 3.47646 12.1843 3.81446 12.2127 4.43685C12.2434 5.10997 12.2499 5.31187 12.2499 7.01636C12.2499 8.72081 12.2434 8.92272 12.2127 9.59584C12.1843 10.2182 12.0803 10.5562 11.9929 10.7812C11.8771 11.0791 11.7388 11.2918 11.5154 11.5151C11.292 11.7385 11.0794 11.8769 10.7814 11.9927C10.5565 12.0801 10.2185 12.1841 9.59608 12.2125C8.92306 12.2432 8.72119 12.2497 7.0166 12.2497C5.31199 12.2497 5.11013 12.2432 4.43709 12.2125C3.8147 12.1841 3.4767 12.0801 3.25176 11.9927C2.9538 11.8769 2.74114 11.7385 2.51778 11.5151C2.29441 11.2918 2.15606 11.0791 2.04026 10.7812C1.95284 10.5562 1.84884 10.2182 1.82046 9.59584C1.78975 8.92272 1.78324 8.72081 1.78324 7.01636C1.78324 5.31187 1.78975 5.10997 1.82046 4.43685C1.84884 3.81446 1.95284 3.47646 2.04026 3.25152C2.15606 2.95355 2.29438 2.7409 2.51778 2.51754C2.74114 2.29414 2.9538 2.15582 3.25176 2.04001C3.4767 1.95259 3.8147 1.8486 4.43709 1.82022C5.11021 1.78951 5.31212 1.78299 7.0166 1.78299ZM7.0166 3.73832C5.20617 3.73832 3.73856 5.20593 3.73856 7.01636C3.73856 8.82676 5.20617 10.2944 7.0166 10.2944C8.82701 10.2944 10.2946 8.82676 10.2946 7.01636C10.2946 5.20593 8.82701 3.73832 7.0166 3.73832ZM7.0166 9.14419C5.84141 9.14419 4.88874 8.19152 4.88874 7.01636C4.88874 5.84116 5.84141 4.8885 7.0166 4.8885C8.19177 4.8885 9.14443 5.84116 9.14443 7.01636C9.14443 8.19152 8.19177 9.14419 7.0166 9.14419ZM11.1902 3.60881C11.1902 4.03187 10.8472 4.37482 10.4241 4.37482C10.0011 4.37482 9.65811 4.03187 9.65811 3.60881C9.65811 3.18574 10.0011 2.84277 10.4241 2.84277C10.8472 2.84277 11.1902 3.18574 11.1902 3.60881Z"
                      fill="#A5ABAA"
                    />
                  </svg>

                  <span
                    class="text-[#A5ABAA] ml-[5px] transition duration-700 text-[12px] leading-[15px]"
                    >{{ item.social_link }}</span
                  >
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="marquee-content_center">
          <div
            class="marquee-item cursor-pointer marquee-item_center max-w-[100px] relative"
            v-for="(item, i) in faces"
            :key="i"
          >
            <img
              class="max-w-[100px] max-h-[100px] w-full h-full"
              :src="item.image"
            />

            <!-- TOOLTIP -->
            <div
              class="tooltip opacity-0 absolute top-[-30px] left-[20px] z-40 flex justransition duration-500 ease-in-out bg-[#020B09] rounded-[8px] p-[8px] w-[188px] h-[52px]"
            >
              <img
                class="max-w-[36px] max-h-[36px] w-full h-full mr-[8px]"
                :src="item.image"
              />
              <a
                href="https://instagram.com"
                target="_blank"
                class="flex flex-col"
              >
                <p
                  class="text-white font-medium text-[14px] leading-[18px] line-clamp-1"
                >
                  {{ item.name }}
                </p>
                <div class="flex items-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.0166 0.632812C5.28293 0.632812 5.06554 0.64016 4.38467 0.671227C3.70522 0.702216 3.24117 0.810136 2.83513 0.96795C2.41536 1.13106 2.05937 1.34933 1.70446 1.70421C1.34958 2.05912 1.1313 2.41511 0.968195 2.83489C0.81038 3.24093 0.702465 3.70497 0.671475 4.38442C0.640409 5.06529 0.633057 5.28268 0.633057 7.01636C0.633057 8.75001 0.640409 8.96739 0.671475 9.64827C0.702465 10.3277 0.81038 10.7918 0.968195 11.1978C1.1313 11.6176 1.34958 11.9736 1.70446 12.3285C2.05937 12.6834 2.41536 12.9016 2.83513 13.0648C3.24117 13.2225 3.70522 13.3305 4.38467 13.3615C5.06554 13.3925 5.28293 13.3999 7.0166 13.3999C8.75025 13.3999 8.96763 13.3925 9.6485 13.3615C10.328 13.3305 10.792 13.2225 11.198 13.0648C11.6178 12.9016 11.9738 12.6834 12.3287 12.3285C12.6836 11.9736 12.9019 11.6176 13.065 11.1978C13.2228 10.7918 13.3307 10.3277 13.3617 9.64827C13.3928 8.96739 13.4001 8.75001 13.4001 7.01636C13.4001 5.28268 13.3928 5.06529 13.3617 4.38442C13.3307 3.70497 13.2228 3.24093 13.065 2.83489C12.9019 2.41511 12.6836 2.05912 12.3287 1.70421C11.9738 1.34933 11.6178 1.13106 11.198 0.96795C10.792 0.810136 10.328 0.702216 9.6485 0.671227C8.96763 0.64016 8.75025 0.632812 7.0166 0.632812ZM7.0166 1.78299C8.72106 1.78299 8.92296 1.78951 9.59608 1.82022C10.2185 1.8486 10.5565 1.95259 10.7814 2.04001C11.0794 2.15582 11.292 2.29414 11.5154 2.51754C11.7388 2.7409 11.8771 2.95355 11.9929 3.25152C12.0803 3.47646 12.1843 3.81446 12.2127 4.43685C12.2434 5.10997 12.2499 5.31187 12.2499 7.01636C12.2499 8.72081 12.2434 8.92272 12.2127 9.59584C12.1843 10.2182 12.0803 10.5562 11.9929 10.7812C11.8771 11.0791 11.7388 11.2918 11.5154 11.5151C11.292 11.7385 11.0794 11.8769 10.7814 11.9927C10.5565 12.0801 10.2185 12.1841 9.59608 12.2125C8.92306 12.2432 8.72119 12.2497 7.0166 12.2497C5.31199 12.2497 5.11013 12.2432 4.43709 12.2125C3.8147 12.1841 3.4767 12.0801 3.25176 11.9927C2.9538 11.8769 2.74114 11.7385 2.51778 11.5151C2.29441 11.2918 2.15606 11.0791 2.04026 10.7812C1.95284 10.5562 1.84884 10.2182 1.82046 9.59584C1.78975 8.92272 1.78324 8.72081 1.78324 7.01636C1.78324 5.31187 1.78975 5.10997 1.82046 4.43685C1.84884 3.81446 1.95284 3.47646 2.04026 3.25152C2.15606 2.95355 2.29438 2.7409 2.51778 2.51754C2.74114 2.29414 2.9538 2.15582 3.25176 2.04001C3.4767 1.95259 3.8147 1.8486 4.43709 1.82022C5.11021 1.78951 5.31212 1.78299 7.0166 1.78299ZM7.0166 3.73832C5.20617 3.73832 3.73856 5.20593 3.73856 7.01636C3.73856 8.82676 5.20617 10.2944 7.0166 10.2944C8.82701 10.2944 10.2946 8.82676 10.2946 7.01636C10.2946 5.20593 8.82701 3.73832 7.0166 3.73832ZM7.0166 9.14419C5.84141 9.14419 4.88874 8.19152 4.88874 7.01636C4.88874 5.84116 5.84141 4.8885 7.0166 4.8885C8.19177 4.8885 9.14443 5.84116 9.14443 7.01636C9.14443 8.19152 8.19177 9.14419 7.0166 9.14419ZM11.1902 3.60881C11.1902 4.03187 10.8472 4.37482 10.4241 4.37482C10.0011 4.37482 9.65811 4.03187 9.65811 3.60881C9.65811 3.18574 10.0011 2.84277 10.4241 2.84277C10.8472 2.84277 11.1902 3.18574 11.1902 3.60881Z"
                      fill="#A5ABAA"
                    />
                  </svg>
                  <span
                    class="text-[#A5ABAA] ml-[5px] transition duration-700 text-[12px] leading-[15px]"
                    >{{ item.social_link }}</span
                  >
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="marquee-content_bottom">
          <div
            class="marquee-item cursor-pointer marquee-item_bottom max-w-[100px] relative"
            v-for="(item, i) in faces"
            :key="i"
          >
            <img
              class="max-w-[100px] max-h-[100px] w-full h-full"
              :src="item.image"
            />

            <!-- TOOLTIP -->
            <div
              class="tooltip opacity-0 absolute top-[-30px] left-[20px] z-40 flex justransition duration-500 ease-in-out bg-[#020B09] rounded-[8px] p-[8px] w-[188px] h-[52px]"
            >
              <img
                class="max-w-[36px] max-h-[36px] w-full h-full mr-[8px]"
                :src="item.image"
              />
              <a
                href="https://instagram.com"
                target="_blank"
                class="flex flex-col"
              >
                <p
                  class="text-white font-medium text-[14px] leading-[18px] line-clamp-1"
                >
                  {{ item.name }}
                </p>
                <div class="flex items-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.0166 0.632812C5.28293 0.632812 5.06554 0.64016 4.38467 0.671227C3.70522 0.702216 3.24117 0.810136 2.83513 0.96795C2.41536 1.13106 2.05937 1.34933 1.70446 1.70421C1.34958 2.05912 1.1313 2.41511 0.968195 2.83489C0.81038 3.24093 0.702465 3.70497 0.671475 4.38442C0.640409 5.06529 0.633057 5.28268 0.633057 7.01636C0.633057 8.75001 0.640409 8.96739 0.671475 9.64827C0.702465 10.3277 0.81038 10.7918 0.968195 11.1978C1.1313 11.6176 1.34958 11.9736 1.70446 12.3285C2.05937 12.6834 2.41536 12.9016 2.83513 13.0648C3.24117 13.2225 3.70522 13.3305 4.38467 13.3615C5.06554 13.3925 5.28293 13.3999 7.0166 13.3999C8.75025 13.3999 8.96763 13.3925 9.6485 13.3615C10.328 13.3305 10.792 13.2225 11.198 13.0648C11.6178 12.9016 11.9738 12.6834 12.3287 12.3285C12.6836 11.9736 12.9019 11.6176 13.065 11.1978C13.2228 10.7918 13.3307 10.3277 13.3617 9.64827C13.3928 8.96739 13.4001 8.75001 13.4001 7.01636C13.4001 5.28268 13.3928 5.06529 13.3617 4.38442C13.3307 3.70497 13.2228 3.24093 13.065 2.83489C12.9019 2.41511 12.6836 2.05912 12.3287 1.70421C11.9738 1.34933 11.6178 1.13106 11.198 0.96795C10.792 0.810136 10.328 0.702216 9.6485 0.671227C8.96763 0.64016 8.75025 0.632812 7.0166 0.632812ZM7.0166 1.78299C8.72106 1.78299 8.92296 1.78951 9.59608 1.82022C10.2185 1.8486 10.5565 1.95259 10.7814 2.04001C11.0794 2.15582 11.292 2.29414 11.5154 2.51754C11.7388 2.7409 11.8771 2.95355 11.9929 3.25152C12.0803 3.47646 12.1843 3.81446 12.2127 4.43685C12.2434 5.10997 12.2499 5.31187 12.2499 7.01636C12.2499 8.72081 12.2434 8.92272 12.2127 9.59584C12.1843 10.2182 12.0803 10.5562 11.9929 10.7812C11.8771 11.0791 11.7388 11.2918 11.5154 11.5151C11.292 11.7385 11.0794 11.8769 10.7814 11.9927C10.5565 12.0801 10.2185 12.1841 9.59608 12.2125C8.92306 12.2432 8.72119 12.2497 7.0166 12.2497C5.31199 12.2497 5.11013 12.2432 4.43709 12.2125C3.8147 12.1841 3.4767 12.0801 3.25176 11.9927C2.9538 11.8769 2.74114 11.7385 2.51778 11.5151C2.29441 11.2918 2.15606 11.0791 2.04026 10.7812C1.95284 10.5562 1.84884 10.2182 1.82046 9.59584C1.78975 8.92272 1.78324 8.72081 1.78324 7.01636C1.78324 5.31187 1.78975 5.10997 1.82046 4.43685C1.84884 3.81446 1.95284 3.47646 2.04026 3.25152C2.15606 2.95355 2.29438 2.7409 2.51778 2.51754C2.74114 2.29414 2.9538 2.15582 3.25176 2.04001C3.4767 1.95259 3.8147 1.8486 4.43709 1.82022C5.11021 1.78951 5.31212 1.78299 7.0166 1.78299ZM7.0166 3.73832C5.20617 3.73832 3.73856 5.20593 3.73856 7.01636C3.73856 8.82676 5.20617 10.2944 7.0166 10.2944C8.82701 10.2944 10.2946 8.82676 10.2946 7.01636C10.2946 5.20593 8.82701 3.73832 7.0166 3.73832ZM7.0166 9.14419C5.84141 9.14419 4.88874 8.19152 4.88874 7.01636C4.88874 5.84116 5.84141 4.8885 7.0166 4.8885C8.19177 4.8885 9.14443 5.84116 9.14443 7.01636C9.14443 8.19152 8.19177 9.14419 7.0166 9.14419ZM11.1902 3.60881C11.1902 4.03187 10.8472 4.37482 10.4241 4.37482C10.0011 4.37482 9.65811 4.03187 9.65811 3.60881C9.65811 3.18574 10.0011 2.84277 10.4241 2.84277C10.8472 2.84277 11.1902 3.18574 11.1902 3.60881Z"
                      fill="#A5ABAA"
                    />
                  </svg>
                  <span
                    class="text-[#A5ABAA] ml-[5px] transition duration-700 text-[12px] leading-[15px]"
                  >
                    {{ item.social_link }}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="shadow">
        <div
          class="shadow_left absolute h-full max-w-[300px] w-full left-0 top-0 z-20"
        ></div>
        <div
          class="shadow_right absolute h-full max-w-[300px] w-full right-0 top-0 z-20"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '~/components/common/SectionTitle.vue'
export default {
  components: {
    SectionTitle,
  },
  data() {
    return {
      faces: [
        {
          image: require('@/assets/images/face-1.png'),
          name: 'Shavqiyev Shohrux',
          social_link: '@shavqiyev_sh',
        },
        {
          image: require('@/assets/images/face-2.png'),
          name: 'Catherine Andreya',
          social_link: '@catherine_a',
        },
        {
          image: require('@/assets/images/face-3.png'),
          name: 'John Doe',
          social_link: '@doe_j',
        },
        {
          image: require('@/assets/images/face-1.png'),
          name: 'Shavqiyev Shohrux',
          social_link: '@shavqiyev_sh',
        },
        {
          image: require('@/assets/images/face-2.png'),
          name: 'Catherine Andreya',
          social_link: '@catherine_a',
        },
        {
          image: require('@/assets/images/face-3.png'),
          name: 'John Doe',
          social_link: '@doe_j',
        },
        {
          image: require('@/assets/images/face-1.png'),
          name: 'Shavqiyev Shohrux',
          social_link: '@shavqiyev_sh',
        },
        {
          image: require('@/assets/images/face-2.png'),
          name: 'Catherine Andreya',
          social_link: '@catherine_a',
        },
        {
          image: require('@/assets/images/face-3.png'),
          name: 'John Doe',
          social_link: '@doe_j',
        },
        {
          image: require('@/assets/images/face-1.png'),
          name: 'Shavqiyev Shohrux',
          social_link: '@shavqiyev_sh',
        },
        {
          image: require('@/assets/images/face-2.png'),
          name: 'Catherine Andreya',
          social_link: '@catherine_a',
        },
        {
          image: require('@/assets/images/face-3.png'),
          name: 'John Doe',
          social_link: '@doe_j',
        },
        {
          image: require('@/assets/images/face-1.png'),
          name: 'Shavqiyev Shohrux',
          social_link: '@shavqiyev_sh',
        },
        {
          image: require('@/assets/images/face-2.png'),
          name: 'Catherine Andreya',
          social_link: '@catherine_a',
        },
        {
          image: require('@/assets/images/face-3.png'),
          name: 'John Doe',
          social_link: '@doe_j',
        },
        {
          image: require('@/assets/images/face-1.png'),
          name: 'Shavqiyev Shohrux',
          social_link: '@shavqiyev_sh',
        },
        {
          image: require('@/assets/images/face-2.png'),
          name: 'Catherine Andreya',
          social_link: '@catherine_a',
        },
        {
          image: require('@/assets/images/face-3.png'),
          name: 'John Doe',
          social_link: '@doe_j',
        },
        {
          image: require('@/assets/images/face-1.png'),
          name: 'Shavqiyev Shohrux',
          social_link: '@shavqiyev_sh',
        },
        {
          image: require('@/assets/images/face-2.png'),
          name: 'Catherine Andreya',
          social_link: '@catherine_a',
        },
        {
          image: require('@/assets/images/face-3.png'),
          name: 'John Doe',
          social_link: '@doe_j',
        },
        {
          image: require('@/assets/images/face-1.png'),
          name: 'Shavqiyev Shohrux',
          social_link: '@shavqiyev_sh',
        },
        {
          image: require('@/assets/images/face-2.png'),
          name: 'Catherine Andreya',
          social_link: '@catherine_a',
        },
        {
          image: require('@/assets/images/face-3.png'),
          name: 'John Doe',
          social_link: '@doe_j',
        },
        {
          image: require('@/assets/images/face-1.png'),
          name: 'Shavqiyev Shohrux',
          social_link: '@shavqiyev_sh',
        },
        {
          image: require('@/assets/images/face-2.png'),
          name: 'Catherine Andreya',
          social_link: '@catherine_a',
        },
        {
          image: require('@/assets/images/face-3.png'),
          name: 'John Doe',
          social_link: '@doe_j',
        },
        {
          image: require('@/assets/images/face-1.png'),
          name: 'Shavqiyev Shohrux',
          social_link: '@shavqiyev_sh',
        },
        {
          image: require('@/assets/images/face-2.png'),
          name: 'Catherine Andreya',
          social_link: '@catherine_a',
        },
        {
          image: require('@/assets/images/face-3.png'),
          name: 'John Doe',
          social_link: '@doe_j',
        },
        {
          image: require('@/assets/images/face-1.png'),
          name: 'Shavqiyev Shohrux',
          social_link: '@shavqiyev_sh',
        },
        {
          image: require('@/assets/images/face-2.png'),
          name: 'Catherine Andreya',
          social_link: '@catherine_a',
        },
        {
          image: require('@/assets/images/face-3.png'),
          name: 'John Doe',
          social_link: '@doe_j',
        },
        {
          image: require('@/assets/images/face-1.png'),
          name: 'Shavqiyev Shohrux',
          social_link: '@shavqiyev_sh',
        },
        {
          image: require('@/assets/images/face-2.png'),
          name: 'Catherine Andreya',
          social_link: '@catherine_a',
        },
        {
          image: require('@/assets/images/face-3.png'),
          name: 'John Doe',
          social_link: '@doe_j',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
// .participants-carousel {
.shadow_left {
  background-image: linear-gradient(
    90deg,
    #f7f8fa 0%,
    rgba(247, 248, 250, 0) 100%
  );
  background-position: left 0 top 0;
  @media screen and (min-width: 370px) and (max-width: 1024px) {
    width: 100px;
  }
  @media screen and (min-width: 370px) and (max-width: 640px) {
    background-image: none;
  }
}

.shadow_right {
  background-image: linear-gradient(
    90deg,
    rgba(247, 248, 250, 0) 0%,
    #f7f8fa 100%
  );
  background-position: right 0 top 0;

  @media screen and (min-width: 370px) and (max-width: 1024px) {
    width: 100px;
  }
  @media screen and (min-width: 370px) and (max-width: 640px) {
    background-image: none;
  }
}

.dark .participants-carousel .shadow_left {
  background-image: linear-gradient(
    90deg,
    #2b2f3a 0%,
    rgba(43, 47, 58, 0) 100%
  );
  background-position: left 0 top 0;
  @media screen and (min-width: 370px) and (max-width: 1024px) {
    width: 100px;
  }
  @media screen and (min-width: 370px) and (max-width: 640px) {
    background-image: none;
  }
}

.dark .participants-carousel .shadow_right {
  background-image: linear-gradient(
    90deg,
    rgba(43, 47, 58, 0) 0%,
    #2b2f3a 100%
  );
  background-position: right 0 top 0;
  @media screen and (min-width: 370px) and (max-width: 1024px) {
    width: 100px;
  }
  @media screen and (min-width: 370px) and (max-width: 640px) {
    background-image: none;
  }
}
.dark .marquee-item::after {
  background-color: rgba(26, 29, 39, 0.4);
}

// -------------------------------------
.marquee-content {
  display: flex;
  animation: scrolling 250s ease infinite;
  &:hover {
    animation-play-state: paused;
    .marquee-item {
      cursor: grab;
    }
  }
}

.marquee-item {
  flex: 0 0 16vw;
  transition: 0.8s ease;

  &::after {
    content: '';
    position: absolute;
    background-color: rgba(109, 53, 225, 0.32);
    background-size: cover;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    transition: 0.5s ease;
  }

  &:hover {
    transition: 0.5s ease;
    &::after {
      transition: 0.5s ease;
      opacity: 0;
    }
    .tooltip {
      opacity: 1;
      transition: 0.5s ease;
    }
  }
}

.marquee-item img {
  display: block;
  width: 100%;
}

@keyframes scrolling {
  0% {    transform: translateX(0);
  }

  100% {
    transform: translateX(-144vw);
  }
}

// -------------------------------------------
.marquee-content_center {
  display: flex;
  animation: scrollReverse 300s ease-in-out  reverse infinite;
  &:hover {
    animation-play-state: paused;
    .marquee-item {
      cursor: grab;
    }
  }
}

.marquee-item_center {
  flex: 0 0 16vw;
}

.marquee-item_center img {
  display: block;
  width: 100%;
}

@keyframes scrollReverse {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100vw);
  }
}

// -------------------------------------------
.marquee-content_bottom {
  display: flex;
  animation: scrollingSecond 270s ease  infinite;
  &:hover {
    animation-play-state: paused;
    .marquee-item {
      cursor: grab;
    }
  }
}

.marquee-item_bottom {
  flex: 0 0 16vw;
}

.marquee-item_bottom img {
  display: block;
  width: 100%;
}

@keyframes scrollingSecond {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-120vw);
  }
}

@media screen and (min-width: 370px) and (max-width: 640px) {
  .tooltip {
    display: none;
  }
}
</style>
