
<template>
  <div class="entry-page">
      <h1>Route Id:{{ $route.params.entryId }}</h1>
      <h1>Computed Id: {{showEntryId}} </h1>
      <h1>Computed Title: {{showEntryTitle}} </h1>
      <h1>Computed Date: {{showEntryDate}} </h1>
      <p class="text">Computed Text: {{showEntryText}} </p>
      
      <router-link :to="{name: 'Home'}">
        <button>GO HOME</button>
      </router-link>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'EntryPage',
    setup(){
      const route = useRoute();
      const store = useStore();
      const state = {
        entry : store.getters.entriesList[route.params.entryId]
      }
      const showEntryId = computed(()=> {
        return route.params.entryId
      })

      const showEntryTitle = computed(()=> {
        return state.entry.entryTitle
        //return store.state.entriesList[route.params.entryId]
      })
      
      const showEntryDate = computed(()=> {
        return state.entry.entryDate
      })
      const showEntryText = computed(()=> {
        return state.entry.entryText
      })
      
      onMounted(()=> {
        console.log(store.getters.entriesList[route.params.entryId])
      })

      return {
        state,
        showEntryId,
        showEntryTitle,
        showEntryDate,
        showEntryText
      }
    }

}
</script>

<style scoped>
.text{
  font-size: 2rem;
}
</style>