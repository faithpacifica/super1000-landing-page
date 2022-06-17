<template>
  <div class="statistics py-[64px] text-white">
    <div class="container statistics__container flex">
      <!-- PIE TODO:what to use?-->
      <div class="chart-wrapper">
        <div>
    <!-- <client-only placeholder="Loading...">
      <pie-chart
        :chart-options="options"
        :chart-data="data"
        :height="100"
        :width="300"
        chart-id="pieChart"
      />
    </client-only> -->
  </div>
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
              text: 'Loyihaga ariza topshirganlar soni',
              numbers: '2647',
              unit: 'ta',
            }"
          />

          <div class="sub-applicants-wrapper flex flex-col gap-[12px]">
            <StatisticsSubCard
              class="mb-[12px]"
              v-bind="{
                name: 'male_user',
                subIconBg: 'bg-[#ffce732e]',
                subText: 'Ariza topshirgan erkaklar soni',
                numbers: '60 000',
                unit: 'ta',
                percentage: '60',
              }"
            />
            <StatisticsSubCard
              class=""
              v-bind="{
                name: 'female_user',
                subIconBg: 'bg-[#55d8f52e]',
                subText: 'Ariza topshirgan ayollar soni',
                numbers: '40 000',
                unit: 'ta',
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
              text: 'Muvaffaqiyatli qabul qilinganlarning soni',
              numbers: '867',
              unit: 'ta',
            }"
          />

          <StatisticsCard
            class=""
            v-bind="{
              name: 'dollar_coin',
              iconRounded: 'bg-[#6ebcf22e]',
              iconBg: 'bg-[#6EBCF2]',
              text: 'O‘quvchilarning kurs davomidagi sof foydasi',
              numbers: '108 000',
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