<template>
  <div class="container w-50">
    <h2>PreviewImage</h2>
    <div v-if="!image">
      <input type="file" class="form-control" @change="onfileChange">
    </div>
    <div v-else>
      <img :src="image" class="img-fluid">
      <button class="btn btn-danger" @click="removeImage">remove</button>
    </div>
  </div>
</template>


<script>
 export default {
  data(){
    return{
      image:"",
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
    removeImage(){
      this.image="";
    }
  }
 }
</script>