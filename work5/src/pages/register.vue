<template>
  <div class="container mt-5 w-50">
  <div class="card text-center mg-50">
  <form action="">
    <div class="card-header bg-primary text-light">
      Sign-in
    </div>
    <div class="card-body">
      <div class="input-group mb-3">
      
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" id="username" v-model="username" :disabled="busy">{{username}}
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" v-text="max-massage.length"></span>
        </div>
        <input type="text" class="form-control" v-model="massage" :maxlength="max">
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" :disabled="busy">{{password}}
      </div>
      <div class="input-group">

        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
      <div class="input">
        <input type="checkbox" id="remember" v-model="remember">
        <label for="remember">Remember for username</label>
      </div>
      <div class="input">
        <button type="button" :disabled="lock || busy" @click="doSignin">Sign-in{{lock}}</button>
        <button type="reset" class="" :disabled="lock || busy">Reset</button>
      </div>
    </div>
  </form>
</div>
</div>
</template>

<script>
 export default {
  data(){
    return{
      username:"",
      password:"",
      remember:true,
      busy:false,
      //lock:true
      massage:"",
      max:13
    }
  },
}
</script>
<style scoped>
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