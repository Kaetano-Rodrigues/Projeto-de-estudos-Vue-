<template>
<div>

  <v-row >
      
      <v-col
        v-for="n in 1"
        :key="n"
        cols="5"
        lg="5"
      >
      <MyCard></MyCard>  
     
      </v-col>
      
      
      
    </v-row>

     <v-row 
    
     >
      <v-col
        v-for="n in 1"
        :key="n"
        cols="5"
        lg="5"
      >
      <MyCard2></MyCard2>  
      
      </v-col>
       
    </v-row>
    
     <v-row >
      <v-col
        v-for="n in 1"
        :key="n"
        cols="5"
        lg="5"
      >
      
      <MyCard3></MyCard3>
      
      </v-col>
    </v-row>
  
</div>
  
</template>

<script>
  import MyCard from '../components/MyCard'
  import MyCard2 from '../components/MyCard2'
  import MyCard3 from '../components/MyCard3'
  export default {
    name: 'Eventos',

    components: {
      MyCard,
      MyCard2,
      MyCard3
    },
  }
</script>
