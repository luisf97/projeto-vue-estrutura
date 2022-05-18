<template>
 <v-navigation-drawer
      v-model="getDrawer"
      app
      dark
      gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
      src="@/assets/natureza-1.gif"
    >
     <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Vue.js
          </v-list-item-title>
          <v-list-item-subtitle>
            Lista de Tarefas
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { title: 'Tarefas', icon: 'mdi-view-dashboard', to: '/' },
          { title: 'Sobre', icon: 'mdi-help-box', to: '/sobre' },
        ],
        right: null,
      }
    },
    props: {
        getDrawer: {
            type: Boolean,
        }
    },
  }
</script>