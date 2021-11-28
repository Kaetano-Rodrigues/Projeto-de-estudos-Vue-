import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/MinhaConta',
    name: 'Meu Cadastro',
    component: () => import( '../views/MeuCadastro.vue')
  },
  {
    path: '/Ingressos',
    name: 'Meus Ingressos',
    component: () => import( '../views/MeusIngressos.vue')
  },
  {
    path: '/Eventos',
    name: 'Eventos',
    component: () => import( '../views/Eventos.vue')
  },
  {
    path: '/Locais',
    name: 'Locais',
    component: () => import( '../views/Local.vue')
  },

 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
