<template>
    <div class="cart-item card">
      <h3>cart total: ${{car_total.toFixed(2)}}</h3>
      <button class="veiw-product-button" @click="display_delivery()">Regster your delivery Adress</button>
    </div>
</template>
<script>
export default {
    
    computed: {
       car_total(){

           return this.$store.getters.carTotal
       },
    },

    methods:{
     display_delivery(){

         return this.$router.push('/delivery');
       }

    }

    
}
</script>

<style lang="scss">
 button{

    padding: 10px;
    background-color: rgb(187, 79, 120);
    border:none;
    font-weight: bold;
    border-radius: 5px;
    font-size: 1.15rem;
     cursor: pointer;
  }

    
</style>