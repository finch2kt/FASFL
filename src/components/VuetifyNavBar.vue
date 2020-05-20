<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
        to="/"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
        to="/"
      />
    </div>
    <v-btn text to="/dashboard">
      <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text rounded to="/">Home</v-btn>
    <v-btn text rounded to="/login-us">Login</v-btn>
    <v-btn text rounded :to="{ name: 'about' }">About</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'VNavBar'
}
</script>

<style></style>
