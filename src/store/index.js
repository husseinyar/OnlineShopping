import { createStore } from 'vuex'
function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}
export default createStore({
  state: {
   cart:[]
  },
  getters:{
    productQuantity: state => product =>{
      const item = state.cart.find(i=> i.id === product.id)
      if (item) return item.quantity
      else return null 
    },
    cartitems: state=>{

      return state.cart
    },
    carTotal: state=>{
      return state.cart.reduce((a,b)=> a+ (b.price * b.quantity), 0)
    }
  
  },
  mutations: {
   
     addToCart(state, product){

      let items = state.cart.find(i=> i.id === product.id)
      if (items){
        items.quantity++
      } 
      else {
        state.cart.push({...product, quantity: 1})

      }
      updateLocalStorage(state.cart)
     },
     removeProductFromCart(state, product){
        
     let item=state.cart.find(i=> i.id === product.id)
     if (item){
      if (item.quantity >1) {
        item.quantity--
      }else {
        state.cart = state.cart.filter(i=> i.id !== product.id)
         }
         updateLocalStorage(state.cart)
      }
       
     },
     updateLocalStorage(state){
     const cart =localStorage.getItem('cart')
      if (cart) {
        state.cart =JSON.parse(cart)
      }
    }
   
  },
  actions: {
  },
  modules: {
  }
})
