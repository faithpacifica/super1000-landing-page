<template>
<div class="py-[32rem] dark:bg-[#1A1D27]">
  <div class="container">
    <SectionTitle class="mb-[20rem] text-center dark:text-white" :title="'Jamoa'" />
    <div class="members-wrapper grid lg:grid-cols-5   sm:grid-cols-2  gap-[16rem] ">
      <SingleMember
       class="single-member"
        v-for="(item, index) in members"
        :key="index"
        v-bind="{
          image:item.image,
          name:item.name,
          position:item.position
        }"
      />

    </div>
  </div>
</div>
</template>

<script>
import SectionTitle from '~/components/common/SectionTitle.vue'
import SingleMember from '~/components/cards/SingleMember.vue'
export default {
  components: {
    SectionTitle,
    SingleMember
  },
  data() {
    return {
      members: [{
          image: require('@/assets/images/member.png'),
          name: 'Nomoz Mullayev',
          position: 'Mentor',
          shadow:''
        },
        {
          image: require('@/assets/images/member.png'),
          name: 'Azamat Norkhojayev',
          position: 'Koordinator'
        },
        {
          image: require('@/assets/images/aziz.png'),
          name: 'Aziz Halikov',
          position: 'Loyiha asoschisi'
        },
        {
          image: require('@/assets/images/member.png'),
          name: 'Xurshid Xudoyorov',
          position: 'Mentor'
        },
        {
          image: require('@/assets/images/member.png'),
          name: 'Timur Saidjaxonov',
          position: 'Direktor Az Capital'
        },
        {
          image: require('@/assets/images/member.png'),
          name: 'John Doe',
          position: 'Asistent'
        },
        {
          image: require('@/assets/images/member.png'),
          name: 'John Doe',
          position: 'Asistent'
        },
        {
          image: require('@/assets/images/member.png'),
          name: 'John Doe',
          position: 'Asistent'
        },
        {
          image: require('@/assets/images/member.png'),
          name: 'John Doe',
          position: 'Asistent'
        },
        {
          image: require('@/assets/images/member.png'),
          name: 'John Doe',
          position: 'Asistent'
        },
      ],
    }
  },
}
</script>

<style lang="scss">

  @media screen and (min-width: 860px) and (max-width: 1200px) {
 .members-wrapper{
      grid-template-columns: repeat(3, minmax(0, 1fr));
 }
}
  @media screen and (min-width: 320px) and (max-width: 1024px) {
  .single-member{
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
  }
}
 @media screen and (min-width: 501px) and (max-width: 640px) {
  .members-wrapper{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
 @media screen and (min-width: 320px) and (max-width: 500px) {
  .members-wrapper{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
