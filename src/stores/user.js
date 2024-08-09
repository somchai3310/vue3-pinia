import { defineStore } from 'pinia'

// use User Store
export const useUserStore = defineStore('user', {
  state: () => ({
    firstname : 'test',
    lastname: 'iii',
  }),
  actions: {
    changeName (formData) {
      this.firstname = formData.firstname
      this.lastname = formData.lastname
    }
  }
})