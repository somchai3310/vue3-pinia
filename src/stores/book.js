import { defineStore } from "pinia";

export const useBookStore = defineStore("book", {
  state: () => ({
    books: [{
      name: 'book name',
      author: 'somchai'
    }],
  }),
  actions: {
    addBook(newBook) {
      this.books.push(newBook);
    },
    updateBook(editedBook, index) {
      this.books.splice(index, 1, editedBook);
      // .splice (ตำแหน่งที่แก้ไข, 1 แทนที่ , หนังสือที่แก้ไขแล้ว)
    },
    removeBook(index) {
      this.books.splice(index, 1)
    },
    // const numbers = [1, 2, 3, 4];
    // numbers.splice(1, 1); remove array[1]
    // [1,3,4]

    // numbers.splice(0, 1, 10); update array[0]
    // [10, 2, 3, 4]
  },
});
