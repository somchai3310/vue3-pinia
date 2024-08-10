import { defineStore } from 'pinia'

// use User Store
export const useUserStore = defineStore('user', {
  state: () => ({
    firstname : 'test',
    lastname: 'iii',
  }),
  getters: {
    fullname (state) {
      return `${state.firstname} ${state.lastname}`
    }
  },
  actions: {
    changeName (formData) {
      this.firstname = formData.firstname
      this.lastname = formData.lastname
    }
  }
})