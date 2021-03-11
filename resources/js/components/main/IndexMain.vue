<template>
  <div>
    <v-app id="inspire" class="main-page myFont">
      <v-navigation-drawer
        v-model="drawer"
        app
        class="elevation-10 d-block"
        id="main-sidebar"
      >
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="mangoding.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title"> Mangoding </v-list-item-title>
              <v-list-item-subtitle>Mari Ngoding~</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-item to="/dashboard">
            <v-list-item-action class="mr-4">
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/page-1">
            <v-list-item-action class="mr-4">
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Page 1</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/page-2">
            <v-list-item-action class="mr-4">
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Page 2</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Mangoding</v-toolbar-title>
      </v-app-bar>

      <v-main class="my-main">
        <v-container fluid>
          <v-row justify="center">
            <v-col>
              <transition name="fade" mode="out-in">
                <router-view class="main-view" name="MainView"></router-view>
              </transition>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return { drawer: true };
  },
};
</script>

<style>
.my-main {
  background: #f9f5ff !important;
}
</style>