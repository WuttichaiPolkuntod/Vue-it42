<!--
<template>
    <div>
    <form action="">
      <div class="">
      Sign-in
      </div>
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" value="user1">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" value="pass1">
      </div>
      <div>
        <input for="checkbox" id="remember" checked>
        <label for="remember">Remember for username</label>
      </div>
      <div>
        <button type="button" disabled>Sign-in</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  </div>
</template>

-->
<template>
  <div>
  <img :src="picture" :width="size" :height="size"><br>
  <form @submit="submitForm">
    <label for=""></label>
    <input type="text" @input="setNickName">
    <button type="submit">บันทึก</button>
  </form>
    <p>ชื่อ : {{ firstname }}</p>
    <p>นามสกุล : {{ lastname }}</p>
    <p>อายุ :{{ age }}</p>
    <p>ที่อยู่ : <span v-html="address"></span></p>
    <p>งานอดิเรก : </p>
      <ul>
        <li>{{ hobby[0] }}</li>
        <li>{{ hobby[1] }}</li>
        <li>{{ hobby[2] }}</li>
      </ul>
    <p>ข้อมูลพื้นฐาน : </p>
      <ul>
        <li>เพศ : {{ general.gender }}</li>
        <li>น้ำหนัก : {{ general.weight }}</li>
        <li>ส่วนสูง : {{ general.height }}</li>
        <li>โรคประจำตัว : {{ general.status }}</li>
        </ul>
        <button @click="showData">คลิกเพื่อดูข้อมูล</button>
        <button @click="increment(10)">เพิ่มคำ</button>
        <button @click="decrement(3)">ลดค่า</button>

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
      picture : "https://cdn-icons-png.flaticon.com/512/644/644617.png",
      size:150,
      hobby : ["ทำสวน","เล่นเกม","ดูหนัง"],
      general : {gender: "male",weight : 60,height : 180,status : false}
    };
  },
  methods : {
      getFullname(){
        return $(this.firstname)      },
      showData(){
        alert(this.firstname)
        },
        increment(value){
          this.age+= value
        },
        decrement(value){
          this.age -= value
        },
        setNickName(event){
          this.nickname=event.target.value
        },
        submitForm(e){
          e.preventDefault();
          alert('บันทึกข้อมูลเรียบร้อย')
        }
      }
};
</script>