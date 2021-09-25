<template>
  <div class="home">
 
   <productDescriptionDrawer
    :product="product" :active="active.product_drawer"
   v-on:close-product="closeproductpag()"/>

   <div class="product-cards-container">
       <productSummaryCard 
       v-for="product in items" 
       :key="product.id" 
       :product="product" v-on:view-product="veiwProduct($event)"/>
    </div>
   
  </div>
</template>

<script>
// @ is an alias to /src
/* import item from '@/components/data/items.js' */

import axios from 'axios'
import productSummaryCard from '@/components/products/productSummaryCard.vue'
import productDescriptionDrawer from '@/components/products/productDescriptionDrawer.vue'

export default {
  name: 'Home',
  components: {
    productSummaryCard,
    productDescriptionDrawer
  },
  data(){

    return{
      
      items:"",
      product:null,
      NewItem:false,
      active:{
       product_drawer:false
      }
      
    }
  },
  methods:{

    async  getData(){
           let config={
         Headers:{
           'Accept': 'application/json'
           
         }

        }
         const Response = await axios.get('https://fakestoreapi.com/products', config)
            
             this.items = Response.data             
         
        },
       
        
      
    
      veiwProduct(product){
        this.product= product
       this.active.product_drawer=true
     
    
      
      },
      closeproductpag(){
        this.active.product_drawer=false
         console.log(this.active.product_drawer)
    
      },
  

  },
   mounted() {
        this.getData();
        
      },
}
</script>
<style lang="scss">
.product-cards-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}
</style>