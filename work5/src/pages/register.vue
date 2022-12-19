<template>
  <div class="container mt-5 w-50">
   <div class="card">
      <div class="card-header bg-primary text-white text-center">แบบฟอร์มการลงทะเบียนสมาชิก </div>
    <div class="card-body">
    <form action="">
    <div class="mb-3">
      <label class="col-form-lable">ชื่อ - นามสกุล</label>
      <input type="text" class="form-control" id="name" v-model="name">
    </div>
    <div class="mb-3">
      <label class="col-form-lable">รหัสประจำตัวประชาชน</label>
      <div class="input-group">
      <div class="input-group-prepend">
       <span class="input-group-text" v-text="max-idcard.length"></span>
      </div>
      <input type="text" class="form-control" v-model="idcard" :maxlength="max">
    </div>
  </div>
  <div class="mb-3">
      <label class="col-form-lable">วันเดือนปีเกิด</label>
      <input type="text" class="form-control" id="birthday" v-model="birthday">
    </div>
    <div class="mb-3">
      <label class="col-form-lable">ที่อยู่</label>
     <textarea class="form-control" id="address" cols="30" rows="3" v-model="address"></textarea>
    </div>
    <div class="mb-3">
      <label class="col-form-lable">Email</label>
      <input type="text" class="form-control" id="email" v-model="email">
    </div>
    <div class="mb-3">
      <label class="col-form-lable">รูปภาพประจำตัว</label>
      <div class="input-group mb-3">
      <input type="file" class="form-control" @change="onfileChange">
      <div >
       <img :src="image" class="img-fluid">
      </div>
      <button class="btn btn-danger" @click="removeImage" v-if="image">remove</button>
      </div>      
    </div>
    <button type="submit" class="btn btn-primary" :disabled="busy||lock" @click="signIn">Register</button>
    </form>
    </div>
  </div>
  </div>
  <div v-if="busy" class="position-fixed top-0 start-0 bottom-0 end-0 bg-primary">
  <h1>Please wait...</h1>
  </div>
</template>
<script>
  export default {
      data(){
          return {
              name:"",
              idcard:"",
              birthday:"",
              address:"",
              email:"",
              image:"",
              busy:false,
              max:13
          }
      },
      computed: {
          lock(){
              return this.name === '' || this.idcard === '' || this.birthday === '' || this.address === '' || this.email === ''

          }
      },
      methods:{
          onfileChange:function(e){
          var files=e.target.files
          if(!files.length)
          return
          this.createImage(files[0]);
      },
      createImage(files){
          var reader=new FileReader();
          reader.onload=(e)=>{
              this.image=e.target.result;
          }
          reader.readAsDataURL(files)
      },
          signIn(){
              this.busy=true
              setTimeout(() => {
                  this.busy = false
              },3000)
          },
          removeImage(){
          this.image="";
    }
      }
  }
</script>