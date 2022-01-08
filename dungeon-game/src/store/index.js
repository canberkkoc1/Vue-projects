import { createStore } from 'vuex'

export default createStore({
  state: {
    hero:{
      health:100,
      damage:15,
      def:5,
      mana:100
      },
  enemy:{
      health:100,
      damage:11,
      def:2,
      mana:100
      
  }
  },
  mutations: {
    changeHeroHealth(state,data){
      state.hero.health = data
    },
    changeHeroMana(state,data){
      state.hero.mana = data
    },
    changeEnemyHealth(state,data){
      state.enemy.health = data
    },
    changeEnemyMana(state,data){
      state.enemy.mana = data
    },
  },
  actions: {
    enemyAttack({commit},damage){
      commit('changeEnemyHealth',damage)
    },
    HeroAttack({commit},damage){
      commit('changeHeroHealth',damage)
      
    },
    heroMana({commit},mana){
      commit('changeHeroMana',mana)
    },
    EnemyMana({commit},mana){
      commit('changeEnemyMana',mana)
    },
    
  },

  getters:{
    getHero(state){
      return state.hero
    },

    getEnemy(state){
      return state.enemy
    }
  },

  modules: {
  }
})
