<template>
  <div class="statistics py-[64px] text-white">
    <div class="container statistics__container flex">
      <!-- PIE TODO:what to use?-->
      <div class="chart-wrapper">
         <div class="chart self-baseline mr-[32px] p-[8px] rounded-[50%]">
          <div class="chart-pie">
            <img src="@/assets/images/pie.png" alt="" />
          </div>
        </div>
      </div>

      <!-- LEFT STATISTICS -->
      <div class="statistics-applicants applicants flex">
        <div class="applicants-left">
          <StatisticsCard
            class="mb-[22px]"
            v-bind="{
              name: 'people_icon',
              iconRounded: 'bg-[#77b7912e]',
              iconBg: 'bg-[#77B791]',
              text:  $t('statistics.applicants_number'),
              numbers: '2647',
              unit: $t('statistics.unit'),
            }"
          />

          <div class="sub-applicants-wrapper flex flex-col gap-[12px]">
            <StatisticsSubCard
              class="mb-[12px]"
              v-bind="{
                name: 'male_user',
                subIconBg: 'bg-[#ffce732e]',
                subText:  $t('statistics.males_number'),
                numbers: '60000',
                unit: $t('statistics.unit'),
                percentage: '60',
              }"
            />
            <StatisticsSubCard
              class=""
              v-bind="{
                name: 'female_user',
                subIconBg: 'bg-[#55d8f52e]',
                subText:$t('statistics.females_number'),
                numbers: '40000',
                unit:$t('statistics.unit'),
                percentage: '40',
              }"
            />
          </div>
        </div>

        <div class="stick w-[1px] h-[200px] ml-[68rem] mr-[64rem]"></div>

        <!-- RIGHT STATISTICS -->

        <div class="applicants-right">
          <StatisticsCard
            class="mb-[41rem]"
            v-bind="{
              name: 'school_hat',
              iconRounded: 'bg-[#ffce732e]',
              iconBg: 'bg-[#F2A360]',
              text:$t('statistics.accepted_applicants'),
              numbers: '867',
              unit: $t('statistics.unit'),
            }"
          />

          <StatisticsCard
            class=""
            v-bind="{
              name: 'dollar_coin',
              iconRounded: 'bg-[#6ebcf22e]',
              iconBg: 'bg-[#6EBCF2]',
              text: $t('statistics.revenue'),
              numbers: '108000',
              unit: '$',
            }"
          />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import StatisticsCard from '../cards/StatisticsCard.vue'
import StatisticsSubCard from '../cards/StatisticsSubCard.vue'
export default {
  components: { StatisticsCard, StatisticsSubCard },
}
</script>
<style lang="scss">
.statistics {
  background-color: rgba(109, 53, 225, 1);
  background-image: url(@/assets/images/statistics-cloud.svg);
  background-size: cover;

  .chart {
    background: rgba(255, 206, 115, 0.18);
  }
  .stick {
    background: rgba(255, 255, 255, 0.2);
  }
}

//RESPONSIVE
@media screen and (min-width: 370px) and (max-width: 887px) {
  .statistics__container {
    display: block;
    .chart-wrapper {
      text-align: center;
      .chart {
        margin-right: 0;
        margin-bottom: 24px;
        display: inline-block;
      }
    }
  }
}

@media screen and (min-width: 370px) and (max-width: 640px){
.statistics-applicants{
  display: block;
  padding-left: 20px;
  padding-right: 20px;
  .stick{
    text-align: center;
    height: 1px;
    width: 220px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
}
</style>