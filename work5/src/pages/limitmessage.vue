<template>
  <div class="container w-50">
    <h2>Limit Massage</h2>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" v-text="max-massage.length"></span>
      </div>
      <input type="text" class="form-control" v-model="massage" :maxlength="max">
    </div>
  </div>
</template>

<script>
 export default {
  data(){
    return{
      massage:"",
      max:20
    }
  },
 }
</script>