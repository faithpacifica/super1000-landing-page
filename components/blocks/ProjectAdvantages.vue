<template>
<div class="advantages-section bg-[#F7F8FA] dark:bg-[#2B2F3A] py-[64px]">
  <div class="container">
    <SectionTitle class="mb-[28rem] dark:text-white" :title="$t('advantage.title')" />

    <div  data-aos="fade-up" class="grid gap-[24px] lg:grid-cols-12  md:grid-cols-6">
      <AdvantageCard
          v-for="(item, index) in advantages"
          :key="index"
          class="advantage-cards-wrapper lg:col-span-4 md:col-span-6 sm:col-span-12  xs:col-span-12 "
          v-bind="{
                  name: item.name,
                  title: item.title,
                  text: item.text,
                }"
          />
    </div>
  </div>
</div>
</template>

<script>
import SectionTitle from '~/components/common/SectionTitle.vue'
import AdvantageCard from '@/components/cards/AdvantageCard.vue'
export default {
  components: {
    SectionTitle,
    AdvantageCard,
  },
  data() {
    return {
      advantages: [{
          name: 'beach',
          title: 'Dubaiga sayohat',
          text: 'Darslarning asosiy qismi B.A.A. da bo‘lgani o‘quvchilarga o‘zgacha ruh bag‘ishlandi'
        },
        {
          name: 'books',
          title: 'Professional darslar',
          text: 'Darslarning asosiy qismi B.A.A. da bo‘lgani o‘quvchilarga o‘zgacha ruh bag‘ishlandi'
        },
        {
          name: 'cash',
          title: 'Birinchi daromadga kirish',
          text: 'Darslarning asosiy qismi B.A.A. da bo‘lgani o‘quvchilarga o‘zgacha ruh bag‘ishlandi'
        },
      ]
    }
  }
}
</script>
