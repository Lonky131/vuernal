<template>
  <div class="Clear">
    <h3> {{clearText}}</h3>
    <button @click="clearAll">
      YES!
    </button>
  </div>
</template>

<script>
export default {
  name: 'Clear',
  props:{
    clearText: String
  },

  // eslint-disable-next-line no-unused-vars
  setup(props, ctx){
    function clearAll(){
      ctx.emit('clearAllChild')
    }
    return {
      clearAll
    }
  } 
};
</script>
<style>
.Clear{
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(255, 255, 255);
}
</style>