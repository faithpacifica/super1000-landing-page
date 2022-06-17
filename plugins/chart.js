import Vue from 'vue'
import { Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement } from 'vue-chartjs'
Chart.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
);

Vue.component('pie-chart', {
	extends: Pie,
	// props: ['data', 'options'],
	// mounted () {
	// 	this.renderChart(this.data, this.options)
	// }
})