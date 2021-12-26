<template>
    <div class="container">
              <form>
                <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="userInfo.email">
          <div class="mb-3">
            <label for="userName" class="form-label">User Name</label>
            <input type="text" class="form-control" id="userName" aria-describedby="emailHelp" v-model="userInfo.userName">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="userInfo.password">
          </div>
          
          
          <button  class="btn btn-primary" @click="createUser">Kayıt ol</button>
        </form>

        {{this.getterData}}
      
      </div>  
</template>

<script>
export default {


  data() {
    return {
      currentUser:[],
      userInfo:{
        email:null,
        userName:null,
        password:null,
      }
    }
  },

  created() {
    this.$axios.get("http://localhost:3000/users").then((result) => {
      this.currentUser = result.data
      console.log(result)
    }).catch((err) => {
      console.error(err)
    });

   },

  computed:{
  },


  methods:{
    createUser(){

      
      
          let emails = this.userInfo["email"]
          let user_name = this.userInfo["userName"]

         console.log(this.getterData)
          

          
         const condEmail = this.currentUser.filter(x => x.email === emails)
         const condUserName = this.currentUser.filter(x => x.userName === user_name)

        //  console.log(condEmail)
         

          
      
      
      if(Object.values(this.userInfo).includes(null)  ){
        alert("Tüm alanları doldurunuz")
        
        }
         if(condEmail.length > 0) {
          alert("Email adresi kayıtlı")
        } 
          else if(condUserName.length > 0) {
          alert("Kullanıcı adı kayıtlı")
        }         
        else{
          
          this.$axios.post("http://localhost:3000/users",this.userInfo).then(result => {
            Object.keys(this.userInfo).forEach(item => this.userInfo[item] = null)
            console.log(result)
          })
        }
            
    }
  },


}
</script>

<style>

</style>