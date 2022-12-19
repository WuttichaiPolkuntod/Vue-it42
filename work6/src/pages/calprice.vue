<template>
  <div class="container w-50">
    <h2>คำนวณราคาสินค้า</h2>
     <div class="row">
      <div class="col-md-3" v-for="item in products">
        <div class="card-header">
          <img :src="item.image" class="card-img-top" width="150" height="150">
        </div>
        <div class="card-body">
          <div class="card-title">{{ item.name }}</div>
          <p>ราคา {{ item.price }}</p>
        </div>
        <div class="card-footer">
          <input type="checkbox" @change="selected(item)">
        </div>
      </div>
      <h2>ยอดชำระเงิน{{ total() }} บาท</h2>
     </div>
  </div>
</template>

<script>
 export default {
  data(){
    return{
      products:[
        {
          id:1,
          name:"กาแฟเย็น",
          price:30,
          image:"https://www.nestleprofessional.co.th/sites/default/files/styles/np_recipe_detail/public/2022-04/nescafe-iced-signature-540x400.jpg?itok=5gl_au1G",
          active:false
        },
        {
          id:2,
          name:"ชาดำเย็น",
          price:35,
          image:"https://www.nestleprofessional.co.th/sites/default/files/styles/np_recipe_detail/public/2022-04/nestea-black-tea-540x400.jpg?itok=abNXW_oE",
          active:false
        },
        {
          id:3,
          name:"ชาเขียว",
          price:30,
          image:"https://img.wongnai.com/p/1920x0/2019/02/02/1e0e327a52ce405196bb7242d22ea752.jpg",
          active:false
        },
        {
          id:4,
          name:"ชานมเย็น",
          price:30,
          image:"https://static.thairath.co.th/media/dFQROr7oWzulq5FZXUxknnB6z0x3PEMhuzKBjE96in4SzVtgeULas0ycmBzB7cPJy7U.jpg",
          active:false
        }
      ]
    }
  },
  methods: {
      selected:function(item){
        item.active=!item.active
      },
      total:function(){
        var sum=0;
        this.products.forEach(function(item){
          if(item.active){
            sum+=item.price;
          }
        });
      }
    },
 }
</script>