<template>
  <div>
    <h1>Dashboard</h1>
    <v-data-table
      :headers="headers"
      :items="categories"
      :items-per-page="5"
      class="elevation-1"
      @click:row="selectRow"
    ></v-data-table>
    <v-snackbar v-model="snackbar">
      You have selected {{ currentItem }}
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      currentItem: '',
      snackbar: false,
      headers: [
        {
          text: 'Categories',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Content', value: 'content' },
        { text: 'Beginner', value: 'beginner' },
        { text: 'Advanced', value: 'advanced' }
      ],
      categories: [
        {
          name: 'Bugdeting',
          content: 20,
          beginner: 13,
          advanced: 7
        },
        {
          name: 'Investments',
          content: 10,
          beginner: 3,
          advanced: 7
        }
      ]
    }
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    selectRow(event) {
      this.snackbar = true
      this.currentItem = event.name
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
