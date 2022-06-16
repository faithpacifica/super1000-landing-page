<template>
<div>
  <Hero />
  <ProjectPurpose />
  <Statistics />
  <AboutOwner />
  <ProjectAdvantages />
  <StaffOpinionCarousel />
  <Articles />
  <Members />
  <Licence />
  <CourseParticipants />
  <Sponsors />

</div>
</template>

<script>
import Hero from '@/components/blocks/Hero.vue'
import ProjectPurpose from '@/components/blocks/ProjectPurpose.vue'
import Statistics from '@/components/blocks/Statistics.vue'
import AboutOwner from '@/components/blocks/AboutOwner.vue'
import StatisticsCard from '@/components/cards/StatisticsCard.vue'
import ProjectAdvantages from "@/components/blocks/ProjectAdvantages.vue"
import StaffOpinionCarousel from "@/components/blocks/StaffOpinionCarousel.vue"
import Articles from "@/components/blocks/Articles.vue"
import Members from "@/components/blocks/Members.vue"
import Licence from "@/components/blocks/Licence.vue"
import CourseParticipants from "@/components/blocks/CourseParticipants.vue"
import Sponsors from "@/components/blocks/Sponsors.vue"
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  components: {
    Hero,
    ProjectPurpose,
    Statistics,
    AboutOwner,
    StatisticsCard,
    ProjectAdvantages,
    StaffOpinionCarousel,
    Articles,
    Members,
    Licence,
    CourseParticipants,
    Sponsors
  },
   mounted () {
    AOS.init();
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
