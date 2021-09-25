<template>
    <div class="drawer-background" :class="{show: active}" @click="$emit('close-product-drawer')">  

    <div class="drawer" :class="{show: active}">
     <div class="drawer-close" @click="$emit('close-product')">
         X
         
     </div>
    
     <div v-if="product" class="product-details">
         <div> <img v-bind:src="product.image" width="100" alt=""></div>
         <h3 class="text-center">{{product.title}}</h3>
          <p class="text-muted"> {{descraption}}</p>
         <h3 class="text-center">${{product.price.toFixed(2)}}</h3>
         <div class="cart-total" v-if="product_total">
             <h3>in Cart</h3>
             <h4>{{product_total}}</h4>
             </div>   
           <div class="button.container">    
               <button class="remove" @click="removeProductFromCart()">Remove</button>
                <button class="add" @click="addToCart()">Add</button> <br>
            <img src="@/assets/carts.png" width="30" alt=""  @click="cart()">
            
           </div>
        
     </div>
    
    </div>
   
  </div>
</template>
<script>

export default {
    
props:['product', 'active'],
 

methods:{
addToCart(){

    this.$store.commit('addToCart', this.product)
},
removeProductFromCart(){

 this.$store.commit('removeProductFromCart', this.product)

},
 cart(){

         return this.$router.push('/Cart');
    }



},

  

computed:{

    product_total(){
    return this.$store.getters.productQuantity(this.product)

    },
    descraption(){

       return this.product.description.substring(0,150)
   }
}


}
</script>
<style lang="scss">
  .drawer-background{

      width: 100%;
      height: vh;
      position: fixed;
      left: 0;
      top: 0;
      background-color: rgba(49, 47, 47, 0.55);
        z-index: 100;
        display: none;
        transition: display .5s;
        &.show{

            display: block;
        }
  }
   .drawer{
    width: 95vw ;
    height: 100vh;
    background-color: white;
    position: fixed;
    top:0;
    left: -105%vw;
    padding: 15px;
    transition: left .5s;
    z-index: 101;
    overflow-y: scroll;

    &.show{
        left:0;

    }
   }
  .drawer-close{

      font-size: 1.5em;
      padding: 5px;
      border-radius: 5px;
      right: 10px;
      border: 2px solid gray;
      width: 15px;
      float: right;
      cursor: pointer;
      &:hover{

          background-color:lightgray;
      }
  }
  .product-details{
    display: flex;
    justify-content: center;
    flex-direction: column;

    p.description{
        padding: 20px;
        line-height: 1.5rem;

    }
   
        
    }
      .remove{
       
        width: 100px;
        border:none;
        padding:10px;
        border-radius: 5px;
        margin: 0 5px 50px 5px;
         cursor: pointer;
         background-color: red;

        

  }
  .add{
       
        width: 100px;
        border:none;
        padding:10px;
        border-radius: 5px;
        margin: 0 5px 50px 5px;
         cursor: pointer;
         background-color: green;

        

  }
  .cartcollaction{
  width: 100px;
        border:none;
        padding:10px;
        border-radius: 5px;
        margin: 0 5px 50px 5px;
         cursor: pointer;
         


  }
  @media(min-width: 500px){
       .drawer{
           width: 450px;
       }

  }
 
</style>

