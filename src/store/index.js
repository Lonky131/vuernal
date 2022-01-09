import { createStore } from 'vuex'

export default createStore({
  state: {
    entriesList: [
      {
      entryId: 0,
      entryTitle: 'New Years',
      entryDate: '1.01.2022',
      entryEditable : false,
      entryText : 'It was a wonderfull experience. I am glad I could spend this time with my closest friends.'
      },
      {
      entryId: 1,
      entryTitle: 'Christmas',
      entryDate: '25.12.2021',
      entryEditable : false,
      entryText : 'I found a big present bellow the christmas tree. Thank you Santa.'
      },
      {
      entryId: 2,
      entryTitle: 'AdvancedWeb',
      entryDate: '9.1.2022',
      entryEditable : false,
      entryText : '15 hours remaining, will I make it?' 
      }
    ]
  },

  mutations: {
    SET_ENTRIES_LIST(state, entriesList){
      state.entriesList = entriesList
    },
    ADD_ENTRY(state,entry){
      state.entriesList.push(entry)
    },
    REMOVE_ENTRY(state, entryId){
      state.entriesList.remove((entry)=> entry.entryId == entryId)
    },
    CLEAR_ALL(state){
      state.entriesList = []
    }
    
  },

  actions: {
    setEntriesList({commit}, entriesList){
      commit('SET_ENTRIES_LIST', entriesList)
    },
    addEntry({commit}, entry){
      commit('ADD_ENTRY', entry)
    },
    removeEntry({commit}, entryId){
      commit('REMOVE_ENTRY', entryId)
    },
    clearAll({commit}){
      commit('CLEAR_ALL')
    }
  },

  getters:{
    entriesList(store){
      return store.entriesList
    }
  },

  modules: {

  }
})
