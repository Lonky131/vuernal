<template>
  <div id="page">
      <div class="nav">
      <div class="nav__title">
        <h1> Vuernal 1.0</h1>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
  setup() {
    return {
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

.nav {
  padding: 30px;
  width: 100%;
  height: 20px;
  background-color: chocolate;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.nav__home-link{
  padding-left: 30px;
}

</style>
