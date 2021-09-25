<template>
    <div class="daliverycart">
 
  <div class="form-group">
         
        <input type="text" v-model="Firstname" name="fname" required placeholder="First name" ><br>
       
        <input type="text" v-model="Email" name="lname" required placeholder="Email" ><br>
       
        <input type="text" v-model="Adress" name="fname" required="Adress" placeholder="Adress" ><br>
  
        <input  type="text" v-model="GataNummer" name="lname" required  placeholder="GataNummer" ><br><br>
        <input @click="processSignupForm" id="orlderlist" type="submit" required placeholder="Email" value="submit">
        </div>
    
         <div v-if="registerIscompleted">
           <ul>
                   
                  <li> Firstname: {{Firstname}}</li>
                  <li> Email:      {{Email}}</li>
                  <li>Adress:      {{Adress}}</li>
                  <li>GataNummer:  {{GataNummer}}</li>
    
         </ul>
          <h1>cart total =${{car_total}}</h1>   
           <button class="veiw-product-button" @click="DMessage()" >pay by card</button>
          
         
         </div>
         <div v-if="messege">

           <p>Tack att du handlat från oss din laverse kommer   inom 2-5 arbetsdagar</p>
          
           
         </div>
         
        
         
         
</div>
</template>
<script>
 
export default {
  
  
    computed: {
       car_total(){

           return this.$store.getters.carTotal
       }
      

    },
 
  data(){

    return{
      total:"",
      fulnames:[],
      registerIscompleted:false,
      messege:false
       
     
    }
  },
   
  methods:{
    
    
    processSignupForm(e) 
      {
      
        e.preventDefault();
      this.registerIscompleted= true
       let fulname={ firstname:"",  email: "", adress:"", gataNummer:""}
         
         fulname.firstname= this.Firstname,
         fulname.email = this.Email,
         fulname.adress= this.adress,
         fulname.gataNummer = this.GataNummer,

         this.fulnames = fulname
         
         console.log( this.fulnames);
         this.total = this.items();
         this.clearfils();
      },  
       DMessage(){

       return this.messege =true;
      },
 
        items(){
          return this.$store.getters.cartitems
        }
      },
      clearfils(){
       this.Firstname="";
       this.Email="";
       this.adress= "";
       this.GataNummer=""

      },
    
  

}
</script>


<style lang="scss">

body{
  background-color: rgb(188, 192, 235);
 
}
.daliverycart{

    background-color: rgb(188, 192, 235);
    width: 100%;
    margin: auto;


}
input{
 width: 50%;
 height: 1.5rem;
 border-radius: 2px;


}

.form-group{
  margin: auto;
  padding: 10%;

}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul li {
  background:rgb(188, 192, 235);
  padding: 5px;
  margin-left: 20%;
  text-align: start;
   font-weight: bold;
}
.veiw-product-button{

    padding: 10px;
    background-color: rgb(79,160, 187);
    border:none;
    font-weight: bold;
    border-radius: 5px;
    font-size: 1.15rem;
     cursor: pointer;
  }
#orlderlist{

  text-align: center;
  text-decoration: none;
  height: 3.0rem;
  border-radius: 1rem;
  cursor: pointer;
  color: black;
  background-color:cadetblue;
   font-weight: bold;
   text-shadow: black;
   font-size: large;
  
}

</style>