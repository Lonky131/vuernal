<template>
  <div class="home">
    <div class="panel">
      <div class="panel__profile">
          <h1> PANEL</h1>
          <h2>Number of updates in lifecycle: {{state.numOfUpdates}}</h2>
          <h2>Name: {{ state.username }}</h2>
          <h2>Date: {{ state.date }}</h2>
          <h2>Entries: {{ calculateEntries }}</h2>
          <Clear @clearAllChild="clearAll" :clearText="'Clear all entries?'"></Clear>
        </div>

        <div class="panel__entry">
          <h1> NEW ENTRY</h1>
          <div class="panel__entry-name">
            <label>Title: </label>
            <input required placeholder="Enter Title" v-model="state.newEntry.entryTitle">
          </div>

          <div class="panel__entry-date">
            <label>Date: </label>
            <input required placeholder="Enter Date" v-model="state.newEntry.entryDate">
          </div>

          <div class="panel__entry-edit">
            <label>Editable? </label>
            <input type="checkbox" id="checkbox" v-model="state.newEntry.entryEditable" />
            <label for="checkbox">{{ state.newEntry.entryEditable }}</label>
          </div>

          <div class="panel__entry-text">
            <textarea required id="text-area" v-model="state.newEntry.entryText" placeholder="Write about your day..." rows="6"></textarea>
          </div>

          <div class="panel__entry-submit">
            <button v-on:click="submitEntry">
              Submit!
            </button>
          </div>

        </div>
    </div>


    <div class="entries">
        <h1> Entries</h1>
        <div class="entries__entry-tab">
          <router-link
            v-for="entry in state.entriesList"
            :key="entry.entryId"
            :to="{name: 'EntryPage', params: {entryId: entry.entryId}}"
          >
          <Entry
            :title="entry.entryTitle"
            :date="entry.entryDate"
          ></Entry>
          </router-link>
        </div>
    </div> 


  </div>
</template>

<script>
import { reactive, computed, onMounted, onUpdated } from 'vue'
import Entry from "../components/Entry.vue"
import { useStore } from 'vuex'
import Clear from '../components/Clear.vue'


export default{
  name: 'Home',
  components: {
    Entry,
    Clear
    },
  setup() {
    const store = useStore()
    const state = reactive({
      username: 'Guest',
      date: '2022',
      numOfUpdates : 0,
      newEntry: {
        entryId: -1,
        entryTitle : '',
        entryDate : '',
        entryEditable : false,
        entryText: ''
      },
      entriesList : store.getters.entriesList
    })
    const calculateEntries = computed(()=>
      state.entriesList.length
    )
    function submitEntry(){
      let entryCopy = {...state.newEntry};
      entryCopy.entryId = state.entriesList.length;
      store.dispatch('addEntry',entryCopy)
      clearNewEntry();
      console.log(store.getters.entriesList)
    }
    function clearNewEntry(){
      state.newEntry.entryTitle = '';
      state.newEntry.entryDate = '';
      state.newEntry.entryEditable = false;
      state.newEntry.entryText = '';
    }
    function clearAll(){
      console.log("PARENT FUNC CALLED")
      store.dispatch('clearAll')
      state.entriesList = []
      console.log(store.getters.entriesList)
    }
    onMounted(()=>{
      console.log("Home MOUNTED")
    })
    onUpdated(()=>{
      state.entriesList = store.getters.entriesList
      state.numOfUpdates += 1
    })
    return {
      state,
      calculateEntries,
      submitEntry,
      clearNewEntry,
      clearAll
    }
  }
}
</script>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.panel{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.panel__profile{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: aqua;
  height: 400px;
}
.panel__entry{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:100%;
  background-color: rgb(168, 170, 40);
  height: 400px;
}
.panel__entry-submit{
  align-self: center;
  width: 20%;
  background-color: hotpink;
}
.panel__entry-text{
  align-self: center;
}
#text-area{
  min-width:500px;
  max-width:100%;
  min-height:100px;
  height:100%;
  width:100%;
}

.entries{
  background-color: brown;
}
</style>