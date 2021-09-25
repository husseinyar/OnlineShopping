<template>
  <div class="Cart">
    <h1>Your Cart</h1>
    <CartItemsCard
    v-for="product in items" :key="product.id"
    :product="product"/>

    <CartPaymentCard/>
  
   
  </div>
</template>
<script>
import CartItemsCard from '@/components/cart/CartItemsCard.vue'
import CartPaymentCard from '@/components/cart/CartPaymentCard.vue'
export default {
  components: {
    CartItemsCard,
    CartPaymentCard
  },
computed:{

  items(){
    return this.$store.getters.cartitems
  }
}

}
</script>