<template>
  <div class="container-fluid">
    <h2>ระบบตะกร้าสินค้า</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-3" v-for="item in products">
            <div class="card-header">
              <img :src="item.image" class="card-img-top" width="100" height="150">
            </div>
            <div class="card-body">
              <div class="card-title">{{ item.name }}</div>
              <p>{{ item.price }}</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary" @click="addCart(item)">หยิบลงตะกร้า</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6" v-if="carts != 0">
        <h4 class="text-center"></h4>
        <table class="table table-striped table-bordered">
          <tr>
            <th>ภาพสินค้า</th>
            <th>ชื่อสินค้า</th>
            <th>ราคาสินค้า</th>
            <th>จํานวน</th>
            <th>ยอดรวม</th>
            <th>ลบ</th>
          </tr>
          <tr v-for="product in carts">
            <td><img :src="product.image" width="70" height="80"></td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>
              <i class="bi bi-dash-circle" @click="minusQty(product)"></i>
              {{ product.qty }}
              <i class="bi bi-plus-circle" @click="plusQty(product)"></i>
            </td>
            <td>{{ product.total }}</td>
            <td>
              <button class="btn btn-outline-danger" @click="removeProduct(product)"><i class="bi bi-trash"></i></button>
            </td>
          </tr>
          <tr class="bg-success text-white">
            <td colspan="6" class="py-2 text-center">
              รวมเงินที่ต้องชำระเงิน: {{ total() }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { processSlotOutlet } from "@vue/compiler-core";

export default {
  data() {
    return {
      carts: [],
      coffee: 0,
      tea: 0,
      greentea:0,
      milktea:0,
      products: [
        {
          id: 1,
          name: "กาแฟเย็น",
          price: 30,
          image:"https://www.nestleprofessional.co.th/sites/default/files/styles/np_recipe_detail/public/2022-04/nescafe-iced-signature-540x400.jpg?itok=5gl_au1G",
          active: false,
        },
        {
          id: 2,
          name: "ชาดำเย็น",
          price: 35,
          image:"https://cdn.pixabay.com/photo/2016/11/29/01/11/beverages-1866476_960_720.jpg",
          active: false,
        },
        {
          id: 3,
          name: "ชาเขียว",
          price: 30,
          image:"https://cdn.pixabay.com/photo/2017/08/07/17/20/glass-2605911_960_720.jpg",
          active: false,
        },
        {
          id: 4,
          name: "ชานมเย็น",
          price: 30,
          image:"data:image/jpeg;base64,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",
          active: false,
        },
      ],
    };
  },
  methods: {
    addCart: function (item) {
      if (item.id == 1) {
        this.coffee += 1;
        if (this.coffee <= 1) {
          this.pushData(item)
        } else {
          var found = this.findIndex(item);
          this.carts[found].qty += 1;
          this.carts[found].total = this.carts[found].qty * this.carts[found].price;
        }
      } else if(item.id == 2) {
        this.tea += 1;
        if (this.tea <= 1) {
          this.pushData(item);
        } else {
          var found = this.findIndex(item);
          this.carts[found].qty += 1;
          this.carts[found].total = this.carts[found].qty * this.carts[found].price;
        }
      }else if(item.id == 3) {
        this.greentea += 1;
        if (this.greentea <= 1) {
          this.pushData(item);
        } else {
          var found = this.findIndex(item);
          this.carts[found].qty += 1;
          this.carts[found].total = this.carts[found].qty * this.carts[found].price;
        }
      }else if(item.id == 4) {
        this.milktea += 1;
        if (this.milktea <= 1) {
          this.pushData(item);
        } else {
          var found = this.findIndex(item);
          this.carts[found].qty += 1;
          this.carts[found].total = this.carts[found].qty * this.carts[found].price;
        }
        
      }
    },
    pushData(item) {
      this.carts.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        qty: 1,
        total: item.price,
      });
    },
    findIndex: function (item) {
      for (var i = 0; i < this.carts.length; i++) {
        if (this.carts[i].id == item.id) {
          return i;
        }
      }
      return -1;
    },
    minusQty: function (product) {
      product.qty -= 1;
      if (product.qty <= 1) {
        product.qty = 1;
      }
      product.total = product.price * product.qty;
    },
    plusQty: function (product) {
      product.qty += 1;
      product.total = product.price * product.qty;
    },
    removeProduct(product) {
      if (confirm("แน่ใจว่าจะลบนะ?")) {
        var index = this.carts.indexOf(product);
        this.carts.splice(index, 1);
        if ((product.id = 1)) {
          this.coffee = 0;
        } else {
          this.tea = 0;
        }
      }
    },
    total: function () {
      var sum = 0;
      this.carts.forEach(function (item) {
        sum += item.total;
      });
      return sum;
    },
  },
};
</script>
