<template>

  <v-app id="inspire">

    <ToolBar></ToolBar>

    <v-navigation-drawer 
    v-model="drawer"
      app
    
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"
          >
            Sigma Events
          </v-list-item-title>
          <v-list-item-subtitle>
            
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
          :to="item.to"
          link
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

 <v-system-bar
      window
      app
      dark
      color="Black"
    >
      <span></span>
      <v-spacer></v-spacer>
      <v-icon>mdi-minus</v-icon>
      <v-icon>mdi-checkbox-blank-outline</v-icon>
      <v-icon>mdi-close</v-icon>
    </v-system-bar>
    
   <!-- <v-app-bar
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
    </v-app-bar> -->
  
   
    <v-main>
      <router-view/>
    </v-main>
    
     <v-footer
    color="#000000"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="#000000 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>

   <v-bottom-navigation
    color="primary"
  >
    <v-btn>
      <span>Recents</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>

  </v-app>
</template>

<script>
import ToolBar from './components/ToolBar'
  export default { 
    data: () => ({
       drawer: null,
       items: [
          { title: 'Eventos', icon: 'mdi-magnify',to:'/Eventos' },
          { title: 'Minha Conta', icon: 'mdi-account',to:'/MinhaConta'},
          { title: 'Meus Ingressos', icon: 'mdi-ticket',to:'/Ingressos' },
          { title: 'Mapa ', icon: 'mdi-map-marker',to:'/Locais' },
        ],
       links: [
          'Home',
          'About Us',
          'Team',
          'Services',
          'Blog',
          'Contact Us',
        ],  
    }),

     components: {
        ToolBar
        }   
    
    
  }
</script>

