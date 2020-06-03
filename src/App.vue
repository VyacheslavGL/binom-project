<template>
  <v-app>
    <v-app-bar
            app
            color="primary"
            dark
    >
        <v-toolbar-title>
            <router-link class="headline hidden-md-and-down" to="/" tag="span" style="cursor: pointer">Binom</router-link>
        </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text to="/">
        <span class="mr-2">All Films</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
