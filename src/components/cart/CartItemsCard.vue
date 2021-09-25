<template>
    <div class="cart-item card"> 
<div class="header">
   <h3>{{product.name}} </h3>
    <h4>in car: {{product.quantity}}</h4>
   
     <h4>Total Cost:{{ item_cost.toFixed (2) }}</h4>
      
</div>
 
   <p>{{description}}</p>
     
   
    </div>
</template>

<script>
export default {
    props:['product'],
    computed: {

    
    description(){
      return this.product.description.substring(1,10)

    },
   item_cost(){

    return this.product.price * this.product.quantity

    
    }
 }
}
</script>
<style lang="scss" scope>
 .cart-item{
     width: 90%;
     margin:5%;
     background-color: green;
     box-shadow: 5px;
     border-radius: 5px;
     padding: 10px;
     text-align: left;

     .header{
         display: flex;
         justify-content: space-around;

     }

}
</style>