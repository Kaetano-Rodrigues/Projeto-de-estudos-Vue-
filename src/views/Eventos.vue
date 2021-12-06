<template>
<div>

  <v-row >
      
      <v-col
         v-for="{ data, i } in events" 
         :key="i" 
         cols="12" 
         sm="4"
      >
     
      <MyCard :cardid="i" :cardInfo="data"></MyCard>  
     
      </v-col>
  </v-row>            
  
</div>
  
</template>

<script>
import MyCard from "../components/MyCard";
export default {
  name: "Home",
  data() {
    return {
      titleview: this.$store.state.title,
    };
  },
  computed: {
    myCards() {
      return this.$store.state.cards;
    },
    title() {
      return this.$store.getters.bigTitle;
    },
    events() {
      return this.$store.state.events;
    },
  },
  components: {
    MyCard,
  },
  async created() {
    this.$store.dispatch("fecthEvents");
  },
};
</script>
