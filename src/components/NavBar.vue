<template>
  <nav>
      <Tollbar  @changeDrawer="drawer = $event" />
      <NavigationDrawer :getDrawer="drawer" />
  </nav>
</template>

<script>
import Vue from 'vue'
import Tollbar from '@/components/Tollbar'
import NavigationDrawer from '@/components/NavigationDrawer'

export default Vue.extend({
    components: {Tollbar, NavigationDrawer},
    data() {
        return {
            drawer: false
        }
    }
})
</script>

<style>

</style>