<template>
 <div>
   <v-app-bar
      height="50px"
      app
      color="black"
      dark
    
     
      
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
       
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer">  </v-app-bar-nav-icon>

      <v-app-bar-title>Home Page</v-app-bar-title>
        
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-ticket</v-icon>
      </v-btn>

       <v-btn icon>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
    </v-app-bar>
 </div>
</template>
