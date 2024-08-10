<script setup>
import {useBookStore} from '@/stores/book'
import {ref, reactive, onMounted, computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'

const route = useRoute()
const bookStore = useBookStore()
const router = useRouter()

const bookData = reactive({
  name: '',
  author: '',
})

const mode = ref('create')
const bookIndex = ref(-1)

onMounted(() => {
  if(route.name === 'book-edit-view'){
    mode.value = 'update'
    bookIndex.value = parseInt(route.params.id)
    const cBookStore = bookStore.books[bookIndex.value]
    bookData.name = cBookStore.name
    bookData.author = cBookStore.author
  }
  console.log('route',route.name);
  console.log('route',route.params.id);
  
})

const addBook = () => {
  if(mode.value === 'update'){
    bookStore.updateBook(bookData,bookIndex.value)
  } else {
    bookStore.addBook(bookData)
  }
  console.log('bookData', bookData);

  router.push({name: 'book-list'})
}
const displayButton = computed(() => {
  if(mode.value === 'create') {
    return 'Add'
  } else {
    return 'Update'
  }
})
</script>
<template>
  Book update view
  <div>
    Book name
    <input type="text" v-model="bookData.name">
  </div>
  <div>
    Book author
    <input type="text" v-model="bookData.author">
  </div>
  <button @click="addBook()">{{ displayButton }} Book</button>
  <router-link :to="{name: 'book-list'}">Back to Home</router-link>
</template>