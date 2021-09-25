<template>
    <div class="card">
      <div > <img v-bind:src="product.image" width="100" alt=""></div>
     <h3>{{product.title}} </h3>
       
    <h5 class ="price"> price: ${{product.price.toFixed(2)}} </h5>
   
     <p class="text-muted"> {{product.category}}  </p>
     <button class="view-product-button" @click="$emit('view-product', product)">See more</button>
    </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props:['product'],
  computed:{
   descraption(){

       return this.product.description.substring(0,150)
   }

  }
}
</script>

<style lang="scss">
.card{
   width: 30%;
   margin: 5%;
   padding: 10px;
   border-radius: 5px;
   background-color: wheat;
   box-shadow: 0 0 5px gray;
   h5.price{
     
     color: gray;

   }
 p.descraption{

   font-size: .85rem;
 }
  p.text-muted{
    color: gray;
 
  }
  button.view-product-button{

    padding: 10px;
    background-color: rgb(79,160, 187);
    border:none;
    font-weight: bold;
    border-radius: 5px;
    font-size: 1.15rem;
     cursor: pointer;
  }

  @media(min-width: 500px ){
        .card{
             width: 350px;
             margin: 10px;

          }

  }
  

}
</style>