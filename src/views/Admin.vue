<template>
<div class="Inlogning">
   <form action="action_page.php" method="post">
  <div class="imgcontainer">
   
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <button @click="processSignupForm" type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
  </div>

  <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>


</div>

</template>

<script>
export default {
   props:['product'],
    methods:{
    
    
    processSignupForm(e) 
      {
      
        e.preventDefault();
         
        return this.$router.push('/Home');
      },  
    }


}
</script>

<style lang="scss" scoped>
.table_proddut{
   padding: 10px;
    margin: 20px auto;
    border-collapse: separate;
    width: 100%;
    text-align: center;
    color: whitesmoke;
    background-color: green;
}
 

.Inlogning{

    width: 50%;
    margin: auto;
}
form {
   margin: 30px auto;
  border: 3px solid #f1f1f1;

input{
  width: 100%;
  height: 50%px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
button:hover {
  opacity: 0.8;
}
}
.container {
  padding: 16px;
}
 .display_product{
      padding: 10px;
    margin: 20px auto;
    border-collapse: separate;
    width: 100%;
    text-align: center;
    color:black;
    background-color: wheat
 } 
</style>