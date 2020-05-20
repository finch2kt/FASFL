class="d-flex align-center"
<template>
  <v-app>
    <VNavBar />
    <!-- router-view :key="$route.fullPath"
    This line of code does the same thing as <router-view /> I don't know how though -->

    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import NavBar from '@/components/NavBar.vue'
// eslint-disable-next-line no-unused-vars
import NotificationContainer from '@/components/NotificationContainer.vue'
import VNavBar from '@/components/VuetifyNavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    VNavBar,
    // eslint-disable-next-line vue/no-unused-components
    NavBar,
    // eslint-disable-next-line vue/no-unused-components
    NotificationContainer,
    Footer
  },
  data: () => ({
    //
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
