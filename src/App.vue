<template>
  <v-app>
    <v-app-bar
            app
            color="primary"
            dark
    >
<!--      <div class="d-flex align-center">-->
<!--        <h1 class="ml-2">Binom</h1>-->
<!--      </div>-->
        <v-toolbar-title>
            <router-link class="headline hidden-md-and-down" to="/" tag="span" style="cursor: pointer">Binom</router-link>
        </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text to="/">
<!--        <v-icon>mdi-account-supervisor-outline</v-icon>-->
        <span class="mr-2">All Films</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
