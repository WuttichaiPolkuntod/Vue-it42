<template>
  <div class="q-pa-md">
    <div class="q-py-md">
      <q-btn icon="add" @click="onCreate" />
    </div>
    <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body-cell-avatar="props">
        <q-td :props="props">
          <q-img
            :src="props.row.avatar"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn icon="mode_edit" @click="onEdit(props.row.id)" />
          <q-btn icon="delete" @click="onDelete(props.row.id)" />
        </q-td>
      </template>
    </q-table>
  </div>
</template>
<script setup>
import {ref} from 'vue';
import router from '../router';
const columns = ref([
  {name: 'id',align: 'left',label: 'id',field: 'id',sortable: true},
  {name: 'fname',align: 'left',label: 'fname',field: 'fname',sortable: true},
  {name: 'lname',align: 'left',label: 'lname',field: 'lname',sortable: true},
  {name: 'username',align: 'left',label: 'username',field: 'username',sortable: true},
  {name: 'avatar',align: 'center',label: 'avatar',field: 'avatar'},
  {name: 'actions',align: 'center',label: 'id',field: 'id'},
])
const rows = ref([])

const fetchData = () =>{
  fetch(" https://www.melivecode.com/api/users")
  .then(res => res.json())
  .then((result) =>{
    rows.value=result
  })
}
fetchData()

const onEdit = (id) =>{
  router.push('/update/'+id)
}

const onDelete = (id) =>{
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": id
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://www.melivecode.com/api/users/delete", requestOptions)
  .then(response => response.json())
  .then(result => {
    alert(result.message)
    fetchData()
  })
  .catch(error => console.log('error', error));
}

const onCreate = (id) =>{
  router.push('/create')
}
</script>
