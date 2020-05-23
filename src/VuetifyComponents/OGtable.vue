<template>
  <v-container>
    <h1>Dashboard</h1>

    <v-row>
      <v-col v-for="sale in sales" :key="`${sale.title}`" col="12" md="4">
        <SalesGraph :sale="sale" />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="statistic in statistics"
        :key="`${statistic.title}`"
        col="12"
        sm="6"
        md="6"
        lg="3"
        xl="3"
      >
        <StatisticCard :statistic="statistic" />
      </v-col>
    </v-row>

    <v-row>
      <v-col col="12" sm="8" md="8">
        cols="8"
        <EmployeesTable :employees="employees" @select-employee="setEmployee" />
      </v-col>
      <v-col col="12" sm="4" md="4">
        cols="4"
        <EventTimeline :timeline="timeline" />
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" :left="$vuetify.breakpoint.lgAndUp">
      You have selected {{ selectedEmployee.name }},
      {{ selectedEmployee.title }}
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import EmployeesTable from '../VuetifyComponents/EmployeesTable'
import EventTimeline from '../VuetifyComponents/EventTimeline'
import SalesGraph from '../VuetifyComponents/SalesGraph'
import StatisticCard from '../VuetifyComponents/StatisticCard'
import employeesData from '../data-vuetify/employees.json'
import timelineData from '../data-vuetify/timeline.json'
import salesData from '../data-vuetify/sales.json'
import statisticsData from '../data-vuetify/statistics.json'
export default {
  name: 'OGtable',
  components: {
    EmployeesTable,
    EventTimeline,
    SalesGraph,
    StatisticCard
  },
  data: () => {
    return {
      employees: employeesData,
      sales: salesData,
      selectedEmployee: {
        name: '',
        title: ''
      },
      snackbar: false,
      statistics: statisticsData,
      timeline: timelineData
    }
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    setEmployee(event) {
      this.snackbar = true
      this.selectedEmployee.name = event.name
      this.selectedEmployee.title = event.title
    }
  }
}
</script>
