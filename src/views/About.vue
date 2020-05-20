<template>
  <div>
    <h1>Welcome to FASFL - The Finiance App for Student Finianical Literacy</h1>
    <h3>
      There are a lot of practical skills and knowledge that we don't get taught
      in school or in life anymore. Finicial Literacy being one of them
    </h3>
    <h4>
      I want to create free, easy access to a library of knowledge so that
      younger generations do not have to learn the hard way
    </h4>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Budgeting 101</v-list-item-title>
        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Filing your taxes</v-list-item-title>
        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Credit</v-list-item-title>
        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-data-table :headers="headers" :items="categories" :items-per-page="5" class="elevation-1"></v-data-table>
    <v-spacer></v-spacer>
    <ul>
      <li>Entrepreuership</li>
      <li>Investing</li>
      <li>Stock Trading</li>
    </ul>
    <v-spacer></v-spacer>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
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
      ],
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
      ]
    }
  }
}
</script>

<style scoped></style>
