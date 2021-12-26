<template>
    <div class="container">
      <form>
  <div class="mb-3">
    <label for="userName" class="form-label" >User Name</label>
    <input type="text" class="form-control" id="userName" aria-describedby="emailHelp" v-model="userInfoLogin.userNameLogin">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="userInfoLogin.passwordLogin">
  </div>
  
  
  <button  class="btn btn-primary" @click="checkLogin">Giriş</button>

</form>

    
    </div>  
</template>

<script>
export default {


  data() {
    return {
      currentUserLogin:[],
      userInfoLogin:{
        userNameLogin:null,
        passwordLogin:null

      },
      isHomePage:false,
    }
  },

  created() {
    this.$axios.get("http://localhost:3000/users").then((result) => {
      this.currentUserLogin = result.data
      console.log(this.currentUserLogin)
    }).catch((err) => {
      console.error(err)
    });
  },

  

  methods: {
    checkLogin(){
      let passLogin = this.userInfoLogin["passwordLogin"]
          let user_nameLogin = this.userInfoLogin["userNameLogin"]

          const condPassLogin = this.currentUserLogin.filter(x => x.password === passLogin)
         const condUserNameLogin = this.currentUserLogin.filter(x => x.userName === user_nameLogin)


        console.log(condPassLogin + " and " + condUserNameLogin)

          if(Object.values(this.userInfoLogin).includes(null)  ){
        alert("Tüm alanları doldurunuz")
        
        }
        if(condPassLogin.length > 0 && condUserNameLogin.length > 0) {
          
          this.$router.push({name:"Home"})
          // this.isHomePage = true
          // this.$emit("isHomePage",this.isHomePage)
        }           
        else{
          alert("Kullancı bulunamadı")
        }      
    }
  },



}
</script>

<style>

</style>