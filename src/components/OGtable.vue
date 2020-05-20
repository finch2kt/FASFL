<template>
  <div>
    <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1"></v-data-table>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      Categories: [
        {
          Category: 'Bugdeting'
        },
        {
          Category: 'Investments'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
