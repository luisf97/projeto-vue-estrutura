<template>
  <v-app>
    <v-main>
      <NavBar />
      <router-view />

    </v-main>
  </v-app>
</template>

<script>

import NavBar from '@/components/NavBar'
import Vue from 'vue'

export default Vue.extend ({
  components: { NavBar },
  data() {
    return {

    }
  }
})
</script>