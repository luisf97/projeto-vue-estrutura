<template>
    <v-app-bar
      app
      color="#fcb69f"
      dark
      src="@/assets/natureza-1.gif"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title><span>Todo</span><span><strong>List</strong></span></v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            drawer: null ,
            teste: 'ok'
        }
    },
    watch: {
        drawer() {
            this.$emit('changeDrawer', this.drawer)
        }
    }
})
</script>

<style>

</style>