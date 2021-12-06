import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[
      {name:"XXXPERIENCE", price:"R$ 450,00",url:"https://pbs.twimg.com/profile_images/880443617621442560/C-57z_yQ_400x400.jpg", tipo:"Festival musica Eletronica"},
      {name:"MATUE", price:"R$ 180,00",url:"https://portalpopline.com.br/wp-content/uploads/2020/12/matue-3-640x800.jpeg", tipo:"Show"},
      {name:"MC Ryan SP", price:"R$ 90,00",url:"https://uploads.metropoles.com/wp-content/uploads/2021/08/17172231/MC-Ryan-SP4.jpg", tipo:"Show"},
    
    ],
    title: "Eventos",
    events: [],

  },
  mutations: {
    SET_EVENTS(state, payload) {
      state.events = payload;
    },
  },
  actions: {
    fetchEvents({ commit }) {
      axios
        .get("https://agenda-balaguer.herokuapp.com/api/event")
        .then((res) => {
          const payload = res.data.values;
          commit("SET EVENTS", payload);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    bigTitle(state) {
      return state.title.toUpperCase();
    },
  },
})
