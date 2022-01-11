import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    musicData:[]
  },
  mutations: {
    saveData(state,data){
      state.musicData=data
    }
  },
  actions: {
    async getSearcData({commit},query){
      
      await axios.get(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=282dcbc02732a25d7c92e213b02ef45d&limit=10&format=json`).then((result) => {
        commit("saveData",result.data.results.trackmatches.track)
        console.log(result)
      }).catch((err) => {
        alert(err)
      });

    }
  },

  getters:{
    _getAllData: state => state.musicData
  },


  modules: {
  }
})
