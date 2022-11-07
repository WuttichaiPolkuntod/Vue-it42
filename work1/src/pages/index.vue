<!--
<template>
  <div>
    <h1>ชื่อผู้สมัครงาน :{{ firstname }}</h1>
    <h1>นามสกุล :{{ lastname }}</h1>
    <h1>อายุ :{{ age }}</h1>
    <h1>ที่อยู่ : <span v-html="address"></span></h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname : "Wuttichay",
      lastname : "Polkunthod",
      age : 19,
      address : "<i>Chonburi</i>",
    };
  },
};
</script>
-->
<template>
  <div>
    <h1>ชื่อ - นามสกุลผู้สมัครงาน :{{ getFullname() }}</h1>
    <h1>อายุ :{{ age }}</h1>
    <h1>ที่อยู่ : <span v-html="address"></span></h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      firstname : "Wuttichay" ,
      lastname: "Polkunthod" ,
      age: 19 ,
      address: "<i>Chonburi</i>",
    };
  },
  methods: {
    getFullname(){
      return`${this.firstname} ` + `${this.lastname}`
    }
  }
};
</script>