<template>
  <div>
    <h1>404 code status: Route {{ $route.params.catchAll }} is not found.</h1>
    <router-link to="/">Go Home</router-link>
    </div>  
</template>
<script>
export default {
    name: 'NotFound'
}
</script>

<style>

</style>