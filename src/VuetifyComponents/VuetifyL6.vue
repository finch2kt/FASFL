<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Sign Up</h1>
        <v-form>
          <v-text-field label="Email" type="email"></v-text-field>
          <v-autocomplete label="Which browser do you use?" :items="browsers"></v-autocomplete>
          <v-file-input label="Attach profile picture"></v-file-input>
          <v-text-field label="Birthday" v-model="birthday" readonly></v-text-field>
          <v-date-picker label="Birthday" v-model="birthday"></v-date-picker>
          <v-checkbox label="Agree to terms & conditions"></v-checkbox>
          <v-switch label="Agree to terms & conditions"></v-switch>
          <v-btn type="submit" color="primary">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'VuetifyForm',
  data: () => ({
    birthday: '',
    browsers: ['Chrome', 'FireFox', 'Safair', 'Edge', 'Brave']
  })
}
</script>

<style scoped>
</style>
