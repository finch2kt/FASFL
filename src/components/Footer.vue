<template>
  <v-footer color="primary lighten-1" padless>
    <v-layout justify-center wrap>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-footer-link`"
        color="white"
        text
        rounded
        class="my-2"
        :to="link.url"
      >{{ link.label }}</v-btn>
      <v-flex primary lighten-2 py-4 text-center white--text xs12>
        {{ new Date().getFullYear() }} -
        <strong>Vuetify</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => {
    return {
      links: [
        {
          label: 'Home',
          url: '/'
        },
        {
          label: 'Login',
          url: '/login-us'
        },
        {
          label: 'About',
          url: '/about'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
