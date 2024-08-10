<script setup>
import { useBookStore } from "@/stores/book";
import { useRouter } from "vue-router";

const router = useRouter();
const bookStore = useBookStore();
</script>
<template>
  Book list view list Book
  <router-link :to="{ name: 'book-create-view' }">
    <button>Add book Page</button>
  </router-link>
  <pre>{{ bookStore.books }}</pre>
  <div>
    <ul>
      <li v-for="(book, index) in bookStore.books" :key="index">
        Name:{{ book.name }} Author:{{ book.author }}
        <router-link :to="{ name: 'book-edit-view', params: { id: index } }">
          <button>Edit</button>
        </router-link>

        <button @click="bookStore.removeBook(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>