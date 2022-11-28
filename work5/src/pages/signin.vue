<template>
  <div class="container">
  <form action="">
    <div class="Signin">
    Sign-in
    </div>
    <div class="input">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" :disabled="busy">{{username}}
    </div>
    <div class="input">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" :disabled="busy">{{password}}
    </div>
    <div class="input">
      <input type="checkbox" id="remember" v-model="remember">
      <label for="remember">Remember for username</label>
    </div>
    <div class="input">
      <button type="button" :disabled="lock || busy" @click="doSignin">Sign-in{{lock}}</button>
      <button type="reset" class="" :disabled="lock || busy">Reset</button>
    </div>
  </form>
</div>
</template>
<script>
 export default {
  data(){
    return{
      username:"",
      password:"",
      remember:true,
      busy:false
      //lock:true
    }
  },
  // created(){
  //   console.log('created')
  //   let n = 1
  //   setInterval(()=>{
  //     this.username ='test' + n
  //     n++
  //     console.log("ok")
  // },1000)
  // },
  computed:{
    lock(){
      return this.username === '' || this.password ===''
    }
  },
  methods:{
    doSignin(){
      this.busy = true
      setTimeout(()=>{
        this.busy = false
      },3000)
    }
  }

 }
</script>
<style scoped>
  .container{
    width: 500px;
    margin: 100px auto;
    border: 1px solid #000;
    padding: 10px;
    background-color: pink;
  }
  .input{
    padding: 5px;
    margin: 5px;
  }
  .Signin{
    color: blue;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    background-color: lightskyblue;
  }
</style>