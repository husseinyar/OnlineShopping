<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/Cart">Cart</router-link> |
    <router-link to="/delivery" >Delivery <img src="@/assets/carts.png" width="30"/> </router-link>|
    <router-link to="/Admin" >Admin: <img src="@/assets/Admin.jpg" width="30"/> </router-link>
   
  </div>
  <router-view/>
</template>

<script>
export default {
  mounted(){
    this.$store.commit('updateLocalStorage')
  }

}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, body {
margin: 0;
padding:0;
overflow-x:hidden;


}
body{
  background-color: rgb(245, 245, 245);
}
#nav{
padding:20px;
width:100%;
margin:0;
height: 30px;
background-color: white;
line-height:30px;
font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
      background-color: aqua;
      }


}
a{
 margin-right: 5px;

}

</style>
